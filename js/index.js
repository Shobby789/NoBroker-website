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
