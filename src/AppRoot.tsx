import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

type IAppRoot = {}

class AppRoot extends Component<IAppRoot, {}> {
  constructor(props: IAppRoot) {
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
