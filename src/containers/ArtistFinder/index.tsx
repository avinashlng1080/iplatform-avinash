import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import './Styles.css'
import { SearchBar, SearchResult, ShortList } from '../../components'
import { AppState } from '../../redux/reducers'
import Actions from '../../redux/actions'

type IArtistFinder = {
  shortListItems: ILastFMArtist[],
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
      showShortList: !_.isEmpty(props.shortListItems)
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
