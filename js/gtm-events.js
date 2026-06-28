(function () {
  "use strict";

  window.dataLayer = window.dataLayer || [];

  document.addEventListener("click", function (e) {
    var link = e.target.closest("a[href]");
    if (!link) return;

    var href = link.getAttribute("href") || "";

    if (href.indexOf("tel:") === 0) {
      dataLayer.push({ event: "anruf", link_url: href });
    }

    if (href.indexOf("https://wa.me/") === 0) {
      dataLayer.push({ event: "whatsapp", link_url: href });
    }
  });

  document.querySelectorAll(".contact-form").forEach(function (form) {
    form.addEventListener("submit", function () {
      dataLayer.push({ event: "lead", form_id: form.id || "contact-form" });
    });
  });
})();
