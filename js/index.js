import { renderProjects, renderOngoingProjects } from "./projects.js";

document.addEventListener("DOMContentLoaded", () => {
    // Navbar hamburger toggle
    const toggleButton = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Theme toggle
    const themeToggle = document.querySelector(".theme-toggle");
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (themeToggle) {
        updateThemeIcon(themeToggle, savedTheme);
        themeToggle.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme");
            const next = current === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            updateThemeIcon(themeToggle, next);
        });
    }

    // Render projects if containers exist
    if (document.getElementById("projects-section")) {
        renderProjects();
    }
    if (document.getElementById("ongoing-projects-section")) {
        renderOngoingProjects();
    }

    // Scroll-triggered fade-in animations (runs after dynamic content is rendered)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

    // Footer year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()} Shawn Yat Sin`;
});

function updateThemeIcon(btn, theme) {
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}
