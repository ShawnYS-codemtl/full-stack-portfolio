import { projects } from "../data/projectData.js"
import { ongoingProjects } from "../data/ongoingProjects.js"

export function renderProjects(){
    const projectsSection = document.getElementById('projects-section')
    let html = ``
    

    projects.forEach((project) => {
        let techstackHtml = ''
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
                <a class="github-btn" href="${project.github_repo}" target="_blank"><i class="fa-brands fa-github" ></i>  Code</a>
                ${project.direct_link ? `<a class="direct-link" href="${project.direct_link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i>  Demo</a>` : ""}
            </div>
        </div>`

    })

    projectsSection.innerHTML = html
}

export function renderOngoingProjects(){
    const ongoingProjectsSection = document.getElementById('ongoing-projects-section')
    let html = ''
    

    ongoingProjects.forEach((project) => {
        let techstackHtml = ''
        project.technologies.forEach(tech => {
        techstackHtml +=   
        ` <p class="tech">${tech}</p>
        `
        })

        html += 
        `<div class="project-container">
            <p class="project-name">${project.name}</p>
            <p class="project-desc">${project.desc}</p>
            <div class="tech-stack">
                ${techstackHtml}
            </div> 
            <div class="project-btns">
                ${project.github_repo ? `<a class="github-btn" href="${project.github_repo}" target="_blank"><i class="fa-brands fa-github" ></i>  Code</a>` : ""}
                ${project.direct_link ? `<a class="direct-link" href="${project.direct_link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i>  Demo</a>` : ""}
            </div>
        </div>`

    })

    ongoingProjectsSection.innerHTML = html
}