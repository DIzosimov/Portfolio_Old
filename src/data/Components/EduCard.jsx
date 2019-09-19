import React from "react"

const EduCard = (props) => {
    let education = props.education
    return (
        <>
            <div class="ui card">
                <div class="ui image">
                    {/* embed <a link for each school? */}
                    <img src={ProjectCard.image} alt="Logo" />;
                </div>
                <div class="content">
                    <h3 class="ui header">{education.school}</h3>
                    <div class="noteworthy">
                        {education.noteworthy}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EduCard