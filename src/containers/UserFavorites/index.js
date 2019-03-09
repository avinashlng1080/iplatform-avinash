import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Styles.css'

class UserFavorites extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // to protect against ESLINT complaints -> remove if not necessary
  }

  render() {
    return (
      <div className="UserFavorites">UserFavorites</div>
    )
  }
}

UserFavorites.propTypes = {}

UserFavorites.defaultProps = {}

export default UserFavorites
