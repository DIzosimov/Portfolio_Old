import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (
        <>
            <div className="ui card">
                <div className="ui image">
                <a href={project.link}>
                    <img src={project.image} alt="Logo" />
                </a>
                </div>
                <div className="content">
                    <h3 className="ui header">{project.name}</h3>
                    <div className="description">
                        {project.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard