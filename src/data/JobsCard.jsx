import React from "react"

const JobsCard = (props) => {
    let job = props.job
    return (
        <>
            <div className="ui card">
                <div className="content">
                    <h3 className="ui header">{job.name}</h3>
                    <div className="description">
                        {job.description}
                    </div>
                    <div className="length">
                        {job.length}
                    </div>
                    <div className="employers">
                        {job.employer}
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsCard