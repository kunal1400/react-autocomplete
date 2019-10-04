import React, { Component } from "react"
import "./App.css"
import { Router, Route, Redirect } from "react-router-dom"
import createHistory from "history/createBrowserHistory"

import Home from "../Web/Home/container"

const history = createHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path={"/home"} component={Home} />
        </div>
      </Router>
    )
  }
}

export default App
