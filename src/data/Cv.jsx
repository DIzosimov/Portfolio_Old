import React, { Component } from "react"
import axios from "axios"
import { UndrawPortfolioWebsite } from 'react-undraw-illustrations';
import EduCard from "./EduCard"
import JobsCard from "./JobsCard"


class Cv extends Component {
    state = {
        jobs: [],
        educations: []
    }
    componentDidMount() {
        debugger
        // axios.get('./src/data/jobs.json')
        // axios.get('./src/data/education.json')
        // .then(response => {
        //     this.setState({
        //         jobs: response.data,
        //         educations: response.data
        //     })
        // })
    }

    getJobs() {
        
    }

    

    render() {
        const jobs = this.state.jobs
        let jobsList
                
        const educations = this.state.educations
        let educationsList

        if (jobs.length > 0) {
            jobsList = jobs.map(job => {
                return (
                    <div key={job.id}>
                        <JobsCard job={job} />
                    </div>
                )
            })
        }

        if (educations.length > 0) {
            educationsList = education.map(education => {
                return (
                    <div key={education.id}>
                        <EduCard education={education} />
                    </div>
                )
            })
        }

        return (
            <div className="ui main container">
                <div class="ui stackable two column grid">
                    <div class="column">
                        <h1 className="ui header">My CV</h1>
                        <div className="ui stackable four column grid">
                            {jobsList}
                        </div>
                    </div>
                    <div class="column">
                        <UndrawPortfolioWebsite primaryColor='#12283a' height='200px' />
                        <div className="ui stackable four column grid">
                            {educationsList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cv