import React from "react"
import ReactDOM from "react-dom"
import Hello from "./data/Hello"
import Header from "./data/Header"
import Footer from "./data/Footer"
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Projects from "./data/Projects"
import About from "./data/About"
import Cv from "./data/Cv"

const App = () => {
    return (
    <>
        <Header />
        <Switch>
            <Route exact path='/' component={Hello}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/projects' component={Projects}></Route>
            <Route exact path='/cv' component={Cv}></Route>
        </Switch>
        <Footer />
    </>
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById("app"));