import { projects } from "./data/projectData.js"

export function renderProjects(){
    console.log(projects)
    const projectsSection = document.getElementById('projects-section')
    let html = ''
    let techstackHtml = ''

    projects.forEach((project) => {
        project.technologies.forEach(tech => {
        techstackHtml +=   
        ` <p class="tech">${tech}</p>
        `
        })

        html += 
        `<div class="project-container">
            <img class="project-img" src="${project.img}">
            <p class="project-name">${project.name}</p>
            <p class="project-desc">${project.desc}</p>
            <div class="tech-stack">
                ${techstackHtml}
            </div> 
            <div class="project-btns">
                <a class="github-btn" href="${project.github_repo}"><i class="fa-brands fa-github"></i>  Code</a>
                <a class="direct-link" href="${project.direct_link}"><i class="fa-solid fa-arrow-up-right-from-square"></i>  Demo</a>
            </div>
        </div>`

    })

    projectsSection.innerHTML = html
}