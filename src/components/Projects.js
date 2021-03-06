import React from 'react';
import projectData from '../store/projectData'

export default function Projects() {

    return(
        <section className="projects">
            <h3 className="projects__heading">Projects</h3>
            <div className="projects__card-display">
                {projectData.map((project, i) => {
                    const key = `project--${i}`

                    return(
                        <article className="projects__card" key={key}>
                            <a className="projects__subheading" href={project.url} target="_blank">{project.name}</a>
                            <p className="projects__caption">{project.desc}</p>
                            <div className="projects__link-row">
                                <a className="projects__link" href={project.url} target="_blank">View Site</a>
                                <a className="projects__link" href={project.repo} target="_blank">View Code</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}