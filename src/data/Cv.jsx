import React, { Component } from 'react'
import axios from "axios"
import EduCard from "./EduCard"
import JobsCard from "./JobsCard"
import { UndrawDesignerLife } from 'react-undraw-illustrations';



class Cv extends Component {
    constructor() {
        super();
        this.state = {
        jobs: [],
        educations: []
        };
    }

    componentDidMount() {
        this.getJobs()
        this.getEducations()
    }
  
    getJobs() {
        axios.get('./src/data/jobs.json').then(response => {
            this.setState({
                jobs: response.data
            })
        })
    }

    getEducations() {
        axios.get('./src/data/education.json').then(response => {
            this.setState({
                educations: response.data
            })
        })
    }

    render() {
    const jobs = this.state.jobs
    let jobsList
            
    const educations = this.state.educations
    let educationsList

    if (educations.length >= 1) {
        educationsList = educations.map(education => {
            return (
                <div key={education.id}>
                    <EduCard education={education} />
                </div>
            )
        })
    }

    if (jobs.length >= 1) {
      jobsList = jobs.map(job => {
        return (
            <div key={job.id}>
                <JobsCard job={job} />
            </div>
            )
        })
    }

    return (
        <div className="ui main container">
            <div className="ui stackable two column grid">
                <div className="column">
                    <h1 className="ui header">My CV</h1>
                    <div className="ui stackable four column grid">
                        <div id="column">
                            {jobsList}
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui stackable four column grid">
                        {educationsList}
                    </div>
                </div>
            </div>
            {/* <UndrawDesignerLife primaryColor='#12283a' height='200px' /> */}
      </div>
    )
  }
}

export default Cv