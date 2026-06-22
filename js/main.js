(function () {
  "use strict";

  // === Mobile Navigation ===
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".site-header nav ul");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      navList.classList.toggle("open");
      var isOpen = navList.classList.contains("open");
      toggle.setAttribute("aria-expanded", isOpen);
      toggle.innerHTML = isOpen ? "&#10005;" : "&#9776;";
    });

    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("open");
        toggle.innerHTML = "&#9776;";
      });
    });
  }

  // === Quiz / Kostenrechner ===
  var quizData = {};
  var currentStep = 1;
  var totalSteps = 4;

  var priceMatrix = {
    type:   { wohnung: 400, keller: 200, gewerbe: 500, garage: 150 },
    size:   { klein: 0, mittel: 200, gross: 500, "sehr-gross": 900 },
    fill:   { wenig: 0, normal: 150, voll: 400, messie: 800 },
    urgent: { sofort: 150, "2wochen": 50, monat: 0, flexibel: 0 }
  };

  var stepKeys = ["type", "size", "fill", "urgent"];

  function updateProgress() {
    var bar = document.getElementById("quiz-progress-bar");
    if (bar) {
      bar.style.width = ((currentStep - 1) / totalSteps * 100) + "%";
    }
  }

  function showStep(step) {
    document.querySelectorAll(".quiz-step").forEach(function (el) {
      el.classList.remove("active");
    });
    var target = step === "result"
      ? document.querySelector('[data-step="result"]')
      : document.querySelector('[data-step="' + step + '"]');
    if (target) target.classList.add("active");
    updateProgress();
  }

  function calculatePrice() {
    var base = 0;
    for (var i = 0; i < stepKeys.length; i++) {
      var key = stepKeys[i];
      var val = quizData[key];
      if (val && priceMatrix[key][val] !== undefined) {
        base += priceMatrix[key][val];
      }
    }
    var low = Math.round(base * 0.85 / 50) * 50;
    var high = Math.round(base * 1.35 / 50) * 50;
    if (low < 150) low = 150;

    var priceEl = document.getElementById("quiz-price");
    if (priceEl) {
      priceEl.textContent = "ca. " + low + " € – " + high + " €";
    }
  }

  document.querySelectorAll(".quiz-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var step = this.closest(".quiz-step");
      var stepNum = parseInt(step.getAttribute("data-step"));
      var value = this.getAttribute("data-value");

      step.querySelectorAll(".quiz-option").forEach(function (b) {
        b.classList.remove("selected");
      });
      this.classList.add("selected");

      quizData[stepKeys[stepNum - 1]] = value;

      setTimeout(function () {
        if (stepNum < totalSteps) {
          currentStep = stepNum + 1;
          showStep(currentStep);
        } else {
          currentStep = totalSteps + 1;
          calculatePrice();
          showStep("result");
          var bar = document.getElementById("quiz-progress-bar");
          if (bar) bar.style.width = "100%";
        }
      }, 250);
    });
  });

  var restartBtn = document.querySelector(".quiz-restart");
  if (restartBtn) {
    restartBtn.addEventListener("click", function () {
      quizData = {};
      currentStep = 1;
      document.querySelectorAll(".quiz-option").forEach(function (b) {
        b.classList.remove("selected");
      });
      showStep(1);
    });
  }

  updateProgress();

  // === Kontaktformular ===
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action");
      if (!action || action === "{{FORM_ACTION}}") {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        btn.textContent = "Vielen Dank! Wir melden uns.";
        btn.disabled = true;
        btn.style.background = "#27ae60";
        btn.style.borderColor = "#27ae60";
      }
    });
  }

  // === Blog-Sortierung ===
  var blogList = document.getElementById("blog-list");
  var blogSort = document.getElementById("blog-sort-select");
  var blogCount = document.getElementById("blog-count");

  if (blogList && blogSort) {
    function sortBlog(order) {
      var cards = Array.prototype.slice.call(blogList.querySelectorAll(".blog-card"));
      cards.sort(function (a, b) {
        var dateA = a.getAttribute("data-date");
        var dateB = b.getAttribute("data-date");
        return order === "newest"
          ? dateB.localeCompare(dateA)
          : dateA.localeCompare(dateB);
      });
      cards.forEach(function (card) {
        blogList.appendChild(card);
      });
    }

    if (blogCount) {
      var total = blogList.querySelectorAll(".blog-card").length;
      blogCount.textContent = total + (total === 1 ? " Beitrag" : " Beiträge");
    }

    blogSort.addEventListener("change", function () {
      sortBlog(this.value);
    });

    sortBlog("newest");
  }

  // === Smooth Scroll für Sticky CTA ===
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
