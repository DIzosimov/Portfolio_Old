import React from "react"

const EduCard = (props) => {
    let education = props.education
    return (
        <>
            <div id="EduCards" className="ui card">
                <div className="ui image">
                    {/* embed <a link for each school? */}
                    <img src={education.image} alt="Logo" />
                </div>
                <div className="content">
                    <h3 className="ui header">{education.school}</h3>
                    <div className="noteworthy">
                        {education.noteworthy}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EduCard