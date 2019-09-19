import React from "react"
import ReactDOM from "react-dom"
import Hello from "./data/Components/Hello"
import Header from "./data/Components/Header"
import Footer from "./data/Components/Footer"
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Projects from "./data/Components/Projects"
import About from "./data/Components/About"
import Cv from "./Components/Cv"

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