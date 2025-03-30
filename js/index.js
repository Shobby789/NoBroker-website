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
