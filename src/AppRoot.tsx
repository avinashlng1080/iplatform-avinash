import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './redux/store'

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
      <Provider store={store}>
         <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }
}


export default AppRoot
