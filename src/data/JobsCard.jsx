import React from "react"

const JobsCard = (props) => {
    let job = props.job
    return (
        <>
            <div class="ui card">
                <div class="content">
                    <h3 class="ui header">{job.name}</h3>
                    <div class="description">
                        {job.description}
                    </div>
                    <div class="length">
                        {job.length}
                    </div>
                    <div class="employers">
                        {job.employer}
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsCard