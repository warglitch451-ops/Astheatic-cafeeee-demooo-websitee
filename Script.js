// ==========================
// LUXE CAFÉ SCRIPT
// ==========================

// PAGE LOADER
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0,0,0,0.95)";
      navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
      navbar.style.background = "rgba(10,10,10,.92)";
      navbar.style.boxShadow = "none";
    }
  });
}

// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show-menu");

    menuToggle.classList.toggle("active");

    this.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("show-menu")
    );

  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show-menu");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function(e){

    if(
      !menuToggle.contains(e.target) &&
      !navLinks.contains(e.target)
    ){
      navLinks.classList.remove("show-menu");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded","false");
    }

  });

}
// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

  if (link.href === window.location.href) {

    link.classList.add("active");

  }

});
// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.15
});

document.querySelectorAll(
  ".stat-card,.review-box,.menu-card,.gallery-card,.about-value,.contact-card"
).forEach((el) => {

  observer.observe(el);

});

// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

topBtn.setAttribute("aria-label", "Back to top");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  topBtn.style.display = window.scrollY > 300 ? "flex" : "none";

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

// ==========================
// RESERVATION FORM
// ==========================

const form = document.querySelector(".reservation-form");

if (form) {

  const message = document.querySelector(".form-message");

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (message) {

      message.innerHTML = "✅ Thank you! Your reservation request has been received.";

      message.style.color = "#d4af37";

    } else {

      alert("Thank you! Your reservation request has been received.");

    }

    form.reset();

  });

}

// ==========================
// END OF SCRIPT
// ==========================
