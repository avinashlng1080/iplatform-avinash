import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Styles.css'
import { SearchBar, SearchResult, ShortList } from '../../components'
import { mockArtistResult } from '../../utils/MockData'
import { AppState } from '../../redux/reducers';
import { ShortListType } from '../../redux/actions/ShortListActions/types';

type IArtistFinder = {
  shortListItems: ShortListType[]
}
type ArtistFinderState = {
  showShortList: boolean
}

class ArtistFinder extends Component<IArtistFinder, ArtistFinderState> {
  constructor(props: IArtistFinder) {
    super(props)
    this.state = {
      showShortList: props.shortListItems && props.shortListItems.length > 0
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
    const { shortListItems } = this.props
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
          favoriteList={shortListItems}
          onCloseShortList={this.closeShortList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    shortListItems: state.shortList.shortListItems
  }
}

export default connect(mapStateToProps, null)(ArtistFinder)
