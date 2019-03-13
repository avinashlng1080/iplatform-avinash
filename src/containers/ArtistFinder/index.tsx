import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import './Styles.css'
import { SearchBar, SearchResult, ShortList } from '../../components'
import { AppState } from '../../redux/reducers'
import Actions from '../../redux/actions'
import { Container } from 'react-bootstrap';



type ArtistFinderState = {
  showShortList: boolean
}

type StateProps = { 
  shortListItems: ILastFMArtist[],
  searchResultsArtists: ILastFMArtist[],
}

type DispatchProps = {
  getSimilarArtist: (artistName: string) => void,
}

type ArtistFinderProps = StateProps & DispatchProps


class ArtistFinder extends Component<ArtistFinderProps, ArtistFinderState> {
  constructor(props: ArtistFinderProps) {
    super(props)
    this.state = {
      showShortList: !_.isEmpty(props.shortListItems)
    }
  }

  handleArtistSearch = (event: any) => {
    event.preventDefault();
    if (event.target[0] && event.target[0].localName === 'input') {
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
        <Container>
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
        </Container>
    )
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  return {
    shortListItems: state.favoriteList.favoriteArtists,
    searchResultsArtists: state.lastFM.artists,
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    getSimilarArtist: (artistName: string) => dispatch(Actions.LastFMActions.getSimilarArtist(artistName))
  }
}

const ArtistFinderContainer : Component<ArtistFinderProps, ArtistFinderState> = connect(mapStateToProps, mapDispatchToProps)(ArtistFinder)

export default ArtistFinderContainer
