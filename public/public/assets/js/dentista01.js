// Comportamentos do template Dentista01: navbar scroll, mobile menu, reveal, before/after slider, FAQ accordion.
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    // Reveal on scroll
    var els = document.querySelectorAll(".d01-reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("active");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add("active"); });
    }

    // Navbar scroll state
    var navbar = document.getElementById("d01-navbar");
    if (navbar) {
      var onScroll = function () {
        if (window.scrollY > 40) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // Mobile menu
    var menuBtn = document.getElementById("d01-menu-btn");
    var menu = document.getElementById("d01-mobile-menu");
    var menuIcon = document.getElementById("d01-menu-icon");
    function toggleMenu(force) {
      if (!menu) return;
      var open = force !== undefined ? force : !menu.classList.contains("open");
      menu.classList.toggle("open", open);
      if (menuIcon) {
        menuIcon.classList.toggle("ph-list", !open);
        menuIcon.classList.toggle("ph-x", open);
      }
      document.body.style.overflow = open ? "hidden" : "";
    }
    if (menuBtn) menuBtn.addEventListener("click", function () { toggleMenu(); });
    document.querySelectorAll(".d01-mobile-link").forEach(function (a) {
      a.addEventListener("click", function () { toggleMenu(false); });
    });

    // Before/After sliders
    document.querySelectorAll(".d01-ba").forEach(function (container) {
      var input = container.querySelector(".d01-ba-input");
      var after = container.querySelector(".d01-ba-after");
      var handle = container.querySelector(".d01-ba-handle");
      if (!input || !after || !handle) return;
      var apply = function (p) {
        after.style.clipPath = "polygon(" + p + "% 0, 100% 0, 100% 100%, " + p + "% 100%)";
        handle.style.left = p + "%";
      };
      input.addEventListener("input", function (e) { apply(e.target.value); });
      apply(input.value || 50);
    });

    // FAQ accordion
    document.querySelectorAll(".d01-faq-item").forEach(function (item) {
      var btn = item.querySelector(".d01-faq-btn");
      var content = item.querySelector(".d01-faq-content");
      if (!btn || !content) return;
      btn.addEventListener("click", function () {
        var open = item.classList.contains("open");
        // close all
        document.querySelectorAll(".d01-faq-item.open").forEach(function (o) {
          o.classList.remove("open");
          var c = o.querySelector(".d01-faq-content");
          if (c) c.style.maxHeight = null;
        });
        if (!open) {
          item.classList.add("open");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });
})();
