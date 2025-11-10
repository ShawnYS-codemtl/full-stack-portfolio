const toggleButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById('year')

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const year = new Date().getFullYear()
yearEl.textContent = ` © ${year} Shawn Yat Sin`