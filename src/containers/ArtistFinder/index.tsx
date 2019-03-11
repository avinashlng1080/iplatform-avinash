import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Styles.css'
import { SearchBar, SearchResult, ShortList } from '../../components'
import { mockArtistResult } from '../../utils/MockData'
import { AppState } from '../../redux/reducers'
import { ShortListType } from '../../redux/Types'
import Actions from '../../redux/actions'

type IArtistFinder = {
  shortListItems: ShortListType[],
  searchResultsArtists: ILastFMArtist[],
  getSimilarArtist: (artistName: string) => void,
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

  handleArtistSearch = (event: any) => {
    event.preventDefault();
    if(event.target[0] && event.target[0].localName === 'input' ) { 
      const artistNameLookup = event.target[0].value
      const { getSimilarArtist } = this.props
      getSimilarArtist(artistNameLookup)
    }
  }

  closeShortList = () => this.setState((prevState => ({ showShortList: !prevState.showShortList })))

  render() {
    const { showShortList } = this.state
    const { shortListItems, searchResultsArtists } = this.props
    return (
      <div className="ArtistFinder">
        <SearchBar
          searchBarTitle="Search Last.fm"
          formPlaceHolder="  enter artist name"
          onSubmit={this.handleArtistSearch}
        />
        {/* TODO
          1. check if there is any search result first
          2. show spinner if currently fetching data
          3. then if there is a result, display it
        */}
        <SearchResult
          searchResultsHeadings={['', 'Artist', '']}
          searchResults={searchResultsArtists}
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
    shortListItems: state.shortList.shortListItems,
    searchResultsArtists: state.lastFM.artists,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSimilarArtist: (artistName: string) => dispatch(Actions.LastFMActions.getSimilarArtist(artistName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistFinder)
