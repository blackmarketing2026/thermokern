(function () {
  "use strict";

  var CONSENT_KEY = "cookie_consent";
  var CONSENT_VERSION = 1;

  var CATEGORIES = {
    necessary: {
      label: "Notwendig",
      description: "Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.",
      provider: "Eigener Server",
      duration: "Sitzung / 1 Jahr",
      required: true
    },
    statistics: {
      label: "Statistik",
      description: "Helfen uns zu verstehen, wie Besucher die Website nutzen, um sie zu verbessern.",
      provider: "z. B. Google Analytics",
      duration: "bis zu 2 Jahre",
      required: false
    },
    marketing: {
      label: "Marketing",
      description: "Werden verwendet, um Besuchern relevante Werbung und Kampagnen anzuzeigen.",
      provider: "z. B. Google Ads, Facebook",
      duration: "bis zu 2 Jahre",
      required: false
    }
  };

  function getConsent() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (parsed.version !== CONSENT_VERSION) return null;
      return parsed;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(categories) {
    var data = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      categories: categories
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    applyConsent(categories);
    hideBanner();
  }

  function applyConsent(categories) {
    document.documentElement.setAttribute("data-consent-statistics", categories.statistics ? "true" : "false");
    document.documentElement.setAttribute("data-consent-marketing", categories.marketing ? "true" : "false");

    var event = new CustomEvent("cookieConsentChanged", { detail: categories });
    document.dispatchEvent(event);
  }

  function hideBanner() {
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.setAttribute("aria-hidden", "true");
  }

  function showBanner() {
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.setAttribute("aria-hidden", "false");
  }

  function showSettings() {
    var details = document.getElementById("cb-settings");
    if (details) details.style.display = "block";
  }

  function hideSettings() {
    var details = document.getElementById("cb-settings");
    if (details) details.style.display = "none";
  }

  function acceptAll() {
    saveConsent({ necessary: true, statistics: true, marketing: true });
  }

  function rejectAll() {
    saveConsent({ necessary: true, statistics: false, marketing: false });
  }

  function saveSelection() {
    var categories = { necessary: true };
    var keys = Object.keys(CATEGORIES);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (CATEGORIES[key].required) continue;
      var checkbox = document.getElementById("cb-cat-" + key);
      categories[key] = checkbox ? checkbox.checked : false;
    }
    saveConsent(categories);
  }

  function buildBanner() {
    var banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookie-Einstellungen");
    banner.setAttribute("aria-hidden", "false");

    var categoryRows = "";
    var keys = Object.keys(CATEGORIES);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var cat = CATEGORIES[key];
      var disabled = cat.required ? ' disabled checked' : '';
      var checked = cat.required ? ' checked' : '';
      categoryRows +=
        '<div class="cb-category">' +
          '<label class="cb-category-header">' +
            '<input type="checkbox" id="cb-cat-' + key + '"' + checked + disabled + '>' +
            '<strong>' + cat.label + '</strong>' +
            (cat.required ? ' <span class="cb-required">(immer aktiv)</span>' : '') +
          '</label>' +
          '<p class="cb-category-desc">' + cat.description + '</p>' +
          '<p class="cb-category-meta">Anbieter: ' + cat.provider + ' · Speicherdauer: ' + cat.duration + '</p>' +
        '</div>';
    }

    banner.innerHTML =
      '<div class="cb-inner">' +
        '<div class="cb-text">' +
          '<h2>Cookie-Einstellungen</h2>' +
          '<p>Wir verwenden Cookies und ähnliche Technologien auf unserer Website. Einige sind technisch notwendig, ' +
          'andere helfen uns, die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen. ' +
          'Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. ' +
          'Ihre Einwilligung ist freiwillig und kann jederzeit über den Link „Cookie-Einstellungen" im Footer widerrufen werden. ' +
          'Weitere Informationen finden Sie in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.</p>' +
        '</div>' +
        '<div class="cb-actions">' +
          '<button type="button" class="cb-btn cb-btn-accept" id="cb-accept-all">Alle akzeptieren</button>' +
          '<button type="button" class="cb-btn cb-btn-reject" id="cb-reject-all">Alle ablehnen</button>' +
          '<button type="button" class="cb-btn cb-btn-settings" id="cb-show-settings">Einstellungen</button>' +
        '</div>' +
        '<div id="cb-settings" style="display:none">' +
          '<div class="cb-categories">' + categoryRows + '</div>' +
          '<div class="cb-actions">' +
            '<button type="button" class="cb-btn cb-btn-save" id="cb-save-selection">Auswahl speichern</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);

    document.getElementById("cb-accept-all").addEventListener("click", acceptAll);
    document.getElementById("cb-reject-all").addEventListener("click", rejectAll);
    document.getElementById("cb-show-settings").addEventListener("click", function () {
      var settings = document.getElementById("cb-settings");
      if (settings.style.display === "none") {
        showSettings();
        this.textContent = "Einstellungen ausblenden";
      } else {
        hideSettings();
        this.textContent = "Einstellungen";
      }
    });
    document.getElementById("cb-save-selection").addEventListener("click", saveSelection);
  }

  function init() {
    var existing = getConsent();
    if (existing) {
      applyConsent(existing.categories);
      return;
    }
    buildBanner();
    showBanner();
  }

  // Revoke-Link im Footer
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "cb-revoke") {
      e.preventDefault();
      localStorage.removeItem(CONSENT_KEY);
      var oldBanner = document.getElementById("cookie-banner");
      if (oldBanner) oldBanner.remove();
      buildBanner();
      showBanner();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.CookieConsent = {
    getConsent: getConsent,
    hasCategory: function (cat) {
      var consent = getConsent();
      return consent && consent.categories && consent.categories[cat] === true;
    },
    revoke: function () {
      localStorage.removeItem(CONSENT_KEY);
      location.reload();
    }
  };
})();
