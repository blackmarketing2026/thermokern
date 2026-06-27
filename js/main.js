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

  // === Kontaktformulare ===
  function initContactForm(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = "Wird gesendet…";
      btn.disabled = true;

      var payload = {
        name: (form.querySelector('[name="name"]').value || "").trim(),
        phone: (form.querySelector('[name="phone"]').value || "").trim(),
        email: (form.querySelector('[name="email"]').value || "").trim(),
        message: (form.querySelector('[name="message"]').value || "").trim(),
      };

      var serviceField = form.querySelector('[name="service"]');
      if (serviceField) {
        payload.service = (serviceField.value || "").trim();
      }

      var addressField = form.querySelector('[name="address"]');
      if (addressField) {
        payload.address = (addressField.value || "").trim();
      }

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Server error");
          var userName = encodeURIComponent(payload.name);
          window.location.href = "/danke.html?name=" + userName;
        })
        .catch(function () {
          btn.textContent = "Fehler – bitte rufen Sie uns an.";
          btn.style.background = "#c0392b";
          btn.style.borderColor = "#c0392b";
          setTimeout(function () {
            btn.textContent = originalText;
            btn.style.background = "";
            btn.style.borderColor = "";
            btn.disabled = false;
          }, 4000);
        });
    });
  }

  document.querySelectorAll(".contact-form").forEach(function (form) {
    initContactForm(form);
  });

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
