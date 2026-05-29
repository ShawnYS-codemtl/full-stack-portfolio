import { projects } from "../data/projectData.js"

// ES modules are deferred — the DOM is ready when this runs, no DOMContentLoaded needed.
const container = document.getElementById("project-detail")
if (!container) {
    // Not on the project detail page — do nothing.
} else {
    const id = window.location.hash.slice(1)  // "#sticker-ecommerce" → "sticker-ecommerce"
    const project = projects.find(p => p.id === id)

    if (!project) {
        container.innerHTML = `
            <a class="detail-back" href="./projects.html">
                <i class="fa-solid fa-arrow-left"></i> Back to Projects
            </a>
            <p style="color:#aaa;margin-top:2rem;">Project not found.</p>
        `
    } else {
        renderDetail(project)
    }
}

function renderDetail(project) {
    const container = document.getElementById("project-detail")

    document.title = `${project.name} — Shawn Yat Sin`

    const techHtml = project.technologies
        .map(t => `<span class="tech">${t}</span>`)
        .join("")

    const btnsHtml = `
        ${project.github_repo
            ? `<a class="github-btn" href="${project.github_repo}" target="_blank"><i class="fa-brands fa-github"></i>  Code</a>`
            : ""}
        ${project.direct_link
            ? `<a class="direct-link" href="${project.direct_link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i>  Live Demo</a>`
            : ""}
    `

    const sectionsHtml = project.details ? `
        <div class="detail-sections">
            <div class="detail-section">
                <p class="detail-section-label">The Problem</p>
                <p class="detail-section-body">${project.details.problem}</p>
            </div>
            <div class="detail-section">
                <p class="detail-section-label">The Approach</p>
                <p class="detail-section-body">${project.details.approach}</p>
            </div>
            <div class="detail-section">
                <p class="detail-section-label">The Outcome</p>
                <p class="detail-section-body">${project.details.outcome}</p>
            </div>
        </div>
    ` : ""

    container.innerHTML = `
        <a class="detail-back" href="./projects.html">
            <i class="fa-solid fa-arrow-left"></i> Back to Projects
        </a>
        <div class="detail-hero">
            <div class="detail-hero-top">
                <h1 class="detail-title">${project.name}</h1>
                ${project.featured ? '<span class="featured-badge" style="position:static;">Featured</span>' : ""}
            </div>
            <div class="detail-tech-stack">
                ${techHtml}
            </div>
            <div class="detail-btns">
                ${btnsHtml}
            </div>
        </div>
        ${sectionsHtml}
    `
}
