import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Styles.css'
import { SearchBar, SearchResult, ShortList } from '../../components'
import { mockArtistResult } from '../../utils/MockData'

class ArtistFinder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showShortList: true // TODO: change it when linked to redux
    }
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
    const { showShortList } = this.state
    return (
      <div className="ArtistFinder">
        <SearchBar
          searchBarTitle="Search Last.fm"
          formPlaceHolder="...for example try 'jackson five'"
          onSubmit={this.handleArtistSearch}
        />
        {/*
          1. check if there is any search result first
          2. show spinner if currently fetching data
          3. then if there is a result, display it
        */}
        <SearchResult
          searchResultsHeadings={['', 'Artist', '']}
          searchResults={mockArtistResult}
        />
        <ShortList
          showShortList={showShortList}
          favoriteList={mockArtistResult}
        />
      </div>
    )
  }
}

ArtistFinder.propTypes = {}

ArtistFinder.defaultProps = {}

export default ArtistFinder
