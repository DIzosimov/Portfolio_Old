import React, { useState, useEffect } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawDesigner } from 'react-undraw-illustrations';

const Projects = () => {
	let projectsList
	const [projects, setProjects] = useState([])

	useEffect(() => {
		axios.get('./src/data/projects.json')
		.then(response => {
			setProjects(response.data)
		})
	}, [])

	if (projects.length > 0) {
		projectsList = projects.map(project => {
			return (
				<div key={project.id}>
					<ProjectCard project={project} />
				</div>
			)
		})
	}

	return (
		<div className="ui main container">
			<div className="ui stackable two column grid">
				<div className="column">
					<UndrawDesigner primaryColor='#12283a' height='200px' />
				</div>
				<div className="column">
					<h1 className="ui header">My Projects</h1>
					<p>A collection of my creations</p>
				</div>
			</div>
			<div id="ProjectsColumns" className="ui stackable four column grid">
				{projectsList}
			</div>
		</div>
	)
}

export default Projects