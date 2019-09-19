import React from "react"

const JobsCard = (props) => {
    let jobs = props.jobs
    return (
        <>
            <div class="ui card">
                <div class="ui image">
                    {/* Embed Links? */}
                    <img src={jobs.image} alt="Logo" />;
                </div>
                <div class="content">
                    <h3 class="ui header">{jobs.name}</h3>
                    <div class="description">
                        {jobs.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsCard