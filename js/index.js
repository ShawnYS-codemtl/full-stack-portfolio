import { renderProjects, renderOngoingProjects } from "./projects.js";

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    });

    // Render projects if container exists
    if (document.getElementById('projects-section')) {
        renderProjects()
    }
    if (document.getElementById('ongoing-projects-section')) {
        renderOngoingProjects()
    }

    // Update footer year
    const yearEl = document.getElementById('year')
    const year = new Date().getFullYear()
    if (yearEl) yearEl.textContent = ` © ${year} Shawn Yat Sin`
})