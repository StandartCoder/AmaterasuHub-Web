import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Hub from './views/hub'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Hub} path="/hub" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
