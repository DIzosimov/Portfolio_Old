import React, { useEffect, useState } from 'react'
import axios from 'axios'
import JobsCard from './JobsCard'
import EduCard from './EduCard'

const Cv = () => {
  const [jobs, setJobs] = useState([])
  const [educations, setEducations] = useState([])

  let jobsList, educationsList, getJobs, getEducations, errorMsg

  useEffect(() => {
    getJobs()
    getEducations()
  }, [])

  getJobs = () => {
		axios.get('./src/data/jobs.json').then(response => {
			setJobs(response.data)
		})
  }

  getEducations = () => {
		axios.get('./src/data/education.json').then(response => {
			setEducations(response.data)
		})
  }

  if (educations.length >=1 && jobs.length >=1) {
    educationsList = (
      educations.map(education => {
        return (
          <div key={education.id}>
            <EduCard education={education} />
          </div>
        )
      })
		)

		jobsList = (
      jobs.map(job => {
        return (
          <div key={job.id}>
            <JobsCard job={job} />
          </div>
        )
      })
    )
  } else {
    setTimeout(() => {
      errorMsg = <h1>Oops something went wrong here!</h1>
    }, 500)
	}

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
					<div className="column">
						<h1 className="ui header">My CV</h1>
						{errorMsg}
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
    </div>
  )
}

export default Cv