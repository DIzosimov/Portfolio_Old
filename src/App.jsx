import React from 'react'
import { Route, Router } from 'react-router-dom'
import Projects from "./data/Projects"
import About from "./data/About"
import Cv from "./data/Cv"
import Hello from "./data/Hello"
import Header from "./data/Header"
import Footer from "./data/Footer"
import { createBrowserHistory } from 'history'

const history = createBrowserHistory({})

const App = () => {
  return (
    <Router history={history}>
      <>
        <Header />
          <Route exact path='/' component={Hello}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route exact path='/cv' component={Cv}></Route>
        <Footer />
      </>
    </Router>
  )
}

export default App
