import React from "react"
import { UndrawDesignerLife } from 'react-undraw-illustrations';

const About = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawDesignerLife primaryColor='#12283a' height='200px' />
                </div>
                <div class="column">
                <h1 className="ui header">About Me</h1>
                    <p>A young developer looking to expand my horizons.</p>
                    <div class="ui list">
                        <div class="item">
                            <i class="users icon"></i>
                            <div class="content">
                            David Izosimov
                            </div>
                        </div>
                        <div class="item">
                            <i class="marker icon"></i>
                            <div class="content">
                            Stockholm, Sweden
                            </div>
                        </div>
                        <div class="item">
                            <i class="mail icon"></i>
                            <div class="content">
                            <a href="mailto:David.Izosimov@gmail.com">David.Izosimov@gmail.com</a>
                            </div>
                        </div>
                        <div class="item">
                            <i class="linkify icon"></i>
                            <div class="content">
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