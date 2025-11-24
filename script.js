// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      if (window.innerWidth <= 768 && navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
      }
    }
  });
});

// Demo form handling (no backend)
function handleDemoForm(form, msg) {
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(msg);
    form.reset();
  });
}

handleDemoForm(
  document.querySelector(".hero-form"),
  "Thank you! We received your call-back request. (Demo only)"
);

handleDemoForm(
  document.querySelector(".contact-form"),
  "Thank you for contacting us! (Demo only, no real email is sent.)"
);
