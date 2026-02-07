// script.js
// Handles: typing effect, scroll reveal, smooth scroll, navbar, EmailJS

/* ========== Typing Animation ========== */

function initTypingEffect() {
  const textEl = document.getElementById("typing-text");
  const cursorEl = document.getElementById("typing-cursor");
  if (!textEl || !cursorEl) return;

  const roles = ["Full-Stack Developer", "Python Developer", "Data Analyst"];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 120; // ms per character
  const deletingSpeed = 70;
  const delayBetweenWords = 1200;

  function type() {
    const current = roles[roleIndex];
    if (!isDeleting) {
      // typing forward
      charIndex++;
      textEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        // pause, then start deleting
        setTimeout(() => {
          isDeleting = true;
          requestAnimationFrame(type);
        }, delayBetweenWords);
        return;
      }
    } else {
      // deleting
      charIndex--;
      textEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, delay);
  }

  // start typing
  type();
}

/* ========== Scroll Reveal ========== */

function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || revealEls.length === 0) {
    // Fallback: just show everything
    revealEls.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    },
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ========== Smooth Scroll for Nav Links ========== */

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const headerOffset = document.querySelector(".header")?.offsetHeight || 0;
      const rect = targetEl.getBoundingClientRect();
      const offsetTop = rect.top + window.pageYOffset - headerOffset + 4;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // close mobile nav after click
      const nav = document.getElementById("nav-menu");
      document.body.classList.remove("nav-open");
      nav?.classList.remove("open");
    });
  });
}

/* ========== Active Nav Highlight on Scroll ========== */

function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (sections.length === 0 || navLinks.length === 0) return;

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight * 0.25;

    let currentId = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      if (scrollPos >= top && scrollPos < top + section.offsetHeight) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const id = href.substring(1);
      if (id === currentId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  // run once on load
  onScroll();
}

/* ========== Mobile Navbar Toggle ========== */

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-menu");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
  });
}

/* ========== EmailJS Integration ========== */

function initEmailJS() {
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");
  if (!form || !statusEl || !window.emailjs) return;

  // TODO: 🔧 Replace these with your real EmailJS IDs
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";
  const SERVICE_ID = "YOUR_SERVICE_ID_HERE";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";

  try {
    emailjs.init(PUBLIC_KEY);
  } catch (err) {
    console.warn("EmailJS init failed. Did you set your PUBLIC_KEY?", err);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusEl.textContent = "Sending...";
    statusEl.classList.remove("success", "error");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, this)
      .then(() => {
        statusEl.textContent = "Message sent successfully! ✅";
        statusEl.classList.add("success");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        statusEl.textContent = "Something went wrong. Please try again.";
        statusEl.classList.add("error");
      });
  });
}

/* ========== Footer Year ========== */

function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
}
// script.js – animations, nav, EmailJS

document.addEventListener("DOMContentLoaded", () => {
  initTypingEffect();
  initScrollReveal();
  initSmoothScroll();
  initNavHighlight();
  initMobileNav();
  initEmailJS();
  setCurrentYear();
});

/* ---------- Typing animation in hero ---------- */

function initTypingEffect() {
  const textEl = document.getElementById("typing-text");
  if (!textEl) return;

  const roles = [
    "Full-Stack Developer",
    "Python Developer",
    "Data Analyst",
    "Web Developer",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 120;
  const deletingSpeed = 70;
  const pause = 1200;

  function type() {
    const current = roles[roleIndex];

    if (!isDeleting) {
      charIndex++;
      textEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, pause);
        return;
      }
    } else {
      charIndex--;
      textEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, delay);
  }

  type();
}

/* ---------- Scroll reveal for .reveal sections ---------- */

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  elements.forEach((el) => observer.observe(el));
}

/* ---------- Smooth scroll for nav links ---------- */

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector(".header");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const offset = header ? header.offsetHeight : 0;
      const top =
        target.getBoundingClientRect().top + window.scrollY - offset + 4;

      window.scrollTo({ top, behavior: "smooth" });

      // close mobile nav after click
      const nav = document.getElementById("nav-menu");
      const toggle = document.getElementById("nav-toggle");
      nav?.classList.remove("open");
      document.body.classList.remove("nav-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Highlight active nav link on scroll ---------- */

function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight * 0.3;
    let activeId = "";

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        activeId = sec.id;
      }
    });

    navLinks.forEach((link) => {
      const id = (link.getAttribute("href") || "").replace("#", "");
      if (id === activeId) link.classList.add("active");
      else link.classList.remove("active");
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
}

/* ---------- Mobile nav toggle ---------- */

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-menu");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ---------- EmailJS contact form ---------- */

function initEmailJS() {
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");
  if (!form || !statusEl || !window.emailjs) return;

  // 🔧 REPLACE these three with your real EmailJS values
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";
  const SERVICE_ID = "YOUR_SERVICE_ID_HERE";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";

  try {
    emailjs.init(PUBLIC_KEY);
  } catch (e) {
    console.warn("EmailJS init failed – set your PUBLIC_KEY in script.js", e);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusEl.textContent = "Sending...";
    statusEl.classList.remove("success", "error");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, this)
      .then(() => {
        statusEl.textContent = "Message sent successfully ✅";
        statusEl.classList.add("success");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        statusEl.textContent = "Something went wrong. Please try again.";
        statusEl.classList.add("error");
      });
  });
}

/* ---------- Footer year ---------- */

function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
