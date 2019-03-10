import React, { Component } from 'react'

import './Styles.css'
import { SearchBar, SearchResult, ShortList } from '../../components'
import { mockArtistResult } from '../../utils/MockData'

type IArtistFinder = {}
type ArtistFinderState = {
  showShortList: boolean
}

class ArtistFinder extends Component<IArtistFinder, ArtistFinderState> {
  constructor(props: IArtistFinder) {
    super(props)
    this.state = {
      showShortList: false // TODO: change it when linked to redux
    }
  }

  handleArtistSearch = () => {
    // event.preventDefault();
    console.log('here in  handleArtistSearch')
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
  }

  closeShortList = () => this.setState((prevState => ({ showShortList: !prevState.showShortList })))

  render() {
    const { showShortList } = this.state
    return (
      <div className="ArtistFinder">
        <SearchBar
          searchBarTitle="Search Last.fm"
          formPlaceHolder="  enter artist name"
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
          onClickShowList={this.closeShortList}
        />
        <ShortList
          showShortList={showShortList}
          favoriteList={mockArtistResult}
          onCloseShortList={this.closeShortList}
        />
      </div>
    )
  }
}

export default ArtistFinder
