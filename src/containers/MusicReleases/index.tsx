import React, { Component } from 'react'

import './Styles.css'

type IMusicReleases = {}
type MusicReleasesState = {}

class MusicReleases extends Component<IMusicReleases, MusicReleasesState> {
  constructor(props: IMusicReleases) {
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

export default MusicReleases
