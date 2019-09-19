import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (
        <>
            <div class="ui card">
                <div class="ui image">
                <a href={project.link}>
                    <img src={project.image} alt="Logo" />;
                </a>
                </div>
                <div class="content">
                    <h3 class="ui header">{project.name}</h3>
                    <div class="description">
                        {project.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard