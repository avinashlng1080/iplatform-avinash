import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Styles.css'
import { SearchBar } from '../../components'

class ArtistFinder extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleArtistSearch = (event) => {
    event.preventDefault();
    console.log('here in  handleArtistSearch')
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    return (
      <div className="ArtistFinder">
        <div className="SearchBarContainer">
          <SearchBar
            searchBarTitle="Search Last.fm"
            formPlaceHolder="...for example try 'jackson five'"
            onSubmit={this.handleArtistSearch}
          />
        </div>
      </div>
    )
  }
}

ArtistFinder.propTypes = {}

ArtistFinder.defaultProps = {}

export default ArtistFinder
