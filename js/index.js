function updateURL(type, btn) {
  const baseURL = "http://127.0.0.1:5500";
  const newURL = `${baseURL}/${type}`;
  window.history.replaceState({}, "", newURL);

  // Remove 'active' class from all buttons
  document
    .querySelectorAll(".nav-btn")
    .forEach((button) => button.classList.remove("active"));

  // Add 'active' class to clicked button
  btn.classList.add("active");
}

// property description map togglers
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const arrow = item.querySelector(".arrow");

    // Open first item by default
    if (index === 0) {
      answer.classList.remove("hidden");
    }

    question.addEventListener("click", function () {
      // Close all FAQs
      faqItems.forEach((faq) => {
        faq.querySelector(".faq-answer").classList.add("hidden");
        faq.querySelector(".arrow").textContent = "▼";
      });

      // Open clicked FAQ
      answer.classList.toggle("hidden");
      arrow.textContent = answer.classList.contains("hidden") ? "▼" : "▲";
    });
  });
});

// login popup
const openBtn = document.getElementById("openLoginBtn");
const overlay = document.getElementById("loginOverlay");
const popup = document.getElementById("loginPopup");

// Open popup
openBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

// Close popup if clicked outside the popup content
overlay.addEventListener("click", (e) => {
  if (!popup.contains(e.target)) {
    overlay.classList.add("hidden");
  }
});

// Optional: Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.classList.add("hidden");
  }
});

// signup popup
const openSignupBtn = document.getElementById("openSignupBtn");
const signupOverlay = document.getElementById("signupOverlay");
const signupPopup = document.getElementById("signupPopup");

// Open popup
openSignupBtn.addEventListener("click", () => {
  signupOverlay.classList.remove("hidden");
});

// Close popup if clicked outside the popup content
signupOverlay.addEventListener("click", (e) => {
  if (!signupPopup.contains(e.target)) {
    signupOverlay.classList.add("hidden");
  }
});

// Optional: Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    signupOverlay.classList.add("hidden");
  }
});
