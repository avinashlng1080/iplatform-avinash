import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap';

import './Styles.css'
import { SearchBar, MBZSearchResults } from '../../components';
import Actions from '../../redux/actions'

type DispatchProps = {
  getMBZArtist: (artistName: string) => void,
}

type MusicReleasesState = {}

type OwnProps = {}

type MusicReleasesProps = DispatchProps & OwnProps

class MusicReleases extends Component<MusicReleasesProps, MusicReleasesState> {

  handleArtistSearch = (event: any) => {
    event.preventDefault();
    if (event.target[0] && event.target[0].localName === 'input') {
      const artistNameLookup = event.target[0].value
      const { getMBZArtist } = this.props
      getMBZArtist(artistNameLookup)
    }
  }

  render() {
    return (
      <Container>
        <SearchBar searchBarTitle="Search MusicBrainz" formPlaceHolder="" onSubmit={this.handleArtistSearch} />
        <MBZSearchResults/>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    getMBZArtist: (artistName: string) => dispatch(Actions.MBZActions.getMBZArtist(artistName))
  }
}

const MusicReleasesContainer: Component<MusicReleasesProps, MusicReleasesState> =  connect(null, mapDispatchToProps)(MusicReleases)

export default MusicReleasesContainer
