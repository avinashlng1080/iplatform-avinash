import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Styles.css'

class MusicReleases extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // to protect against ESLINT complaints -> remove if not necessary
  }

  render() {
    return (
      <div className="MusicReleases">MusicReleases</div>
    )
  }
}

MusicReleases.propTypes = {}

MusicReleases.defaultProps = {}

export default MusicReleases
