import React from "react"
import axios from "axios"


class Cv extends Component {
    constructor() {
        super();
        this.state = {
            cv: []
        };
    }
    componentDidMount() {
        axios.get('./src/data/Json/jobs.json')
        .then(response => {
            this.setState({
                cv:response.data
            })
        })
    }

    componentDidMount() {
        axios.get('./src/data/Json/education.json')
        .then(response => {
            this.setState({
                cv:response.data
            })
        })
    }

    render() {
        const cv = this.state.cv
        let cvList

        if (cv.length > 0) {
            cvList = cv.map(cvJobs => {
                return (
                    <div key={cvJobs.id}>
                        <
                    </div>
                )
            })
        }

        return (
            <div className="ui main container">
                <div class="ui stackable two column grid">
                    <div class="column">

                    </div>
                    <div class="column">

                    </div>
                </div>
            </div>
        )
    }
}

export default Cv