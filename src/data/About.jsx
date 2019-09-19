import React from "react"
import { UndrawDesignerLife } from 'react-undraw-illustrations';

const About = () => {
    return (
        <div className="ui main container">
            <div className="ui stackable two column grid">
                <div className="column">
                    <UndrawDesignerLife primaryColor='#12283a' height='200px' />
                </div>
                <div className="column">
                <h1 className="ui header">About Me</h1>
                    <p>A young developer looking to expand my horizons.</p>
                    <div className="ui list">
                        <div className="item">
                            <i className="users icon"></i>
                            <div className="content">
                            David Izosimov
                            </div>
                        </div>
                        <div className="item">
                            <i className="marker icon"></i>
                            <div className="content">
                            Stockholm, Sweden
                            </div>
                        </div>
                        <div className="item">
                            <i className="mail icon"></i>
                            <div className="content">
                            <a href="mailto:David.Izosimov@gmail.com">David.Izosimov@gmail.com</a>
                            </div>
                        </div>
                        <div className="item">
                            <i className="linkify icon"></i>
                            <div className="content">
                            <a href="https://www.linkedin.com/in/david-izosimov-380293183/">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About