import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Styles.css'

class ArtistFinder extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // to protect against ESLINT complaints -> remove if not necessary
  }

  render() {
    return (
      <div className="ArtistFinder">ArtistFinder</div>
    )
  }
}

ArtistFinder.propTypes = {}

ArtistFinder.defaultProps = {}

export default ArtistFinder
