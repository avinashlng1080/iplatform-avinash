import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

class AppRoot extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // to protect against ESLINT complaints -> remove if not necessary
  }

  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}


export default AppRoot
