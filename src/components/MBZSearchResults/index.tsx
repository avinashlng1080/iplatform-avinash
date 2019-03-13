import React, { FunctionComponent } from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'

import './Styles.css'
import { getKey } from '../../utils/Functions'
import Actions from '../../redux/actions'
import { AppState } from '../../redux/reducers';
import { MBZReleaseResults } from '..'

type StateProps = {
  mbzArtists: IMBZArtist[],
  releaseArtistID: string
}

type DispatchProps = {
  findMBZReleases: (artistID: string) => void,
}

type OwnProps = {}

type MBZSearchResultsProps = StateProps & DispatchProps

const MBZSearchResults: FunctionComponent<MBZSearchResultsProps> = ({ findMBZReleases, mbzArtists, releaseArtistID }) => {
  return (
    <div className="MBZSearchResults">
      <h4>Search Results:</h4>
      <hr />
      <ListGroup as='div'>
        <strong>Artist Name</strong>
        {
          mbzArtists.map((artist) => {
            return (
              <ListGroup.Item as='div' key={getKey()}>
                <div className="MBZArtistRowContainer">
                  <div className="MBZArtistRow">
                    <div>{artist.name}</div>
                    <div className="StickToRight" onClick={() => findMBZReleases(artist.id)}>
                      <span style={{ color: '#6699c3', cursor: 'pointer' }}>Show releases</span>
                    </div>
                  </div>
                  {(releaseArtistID === artist.id) && (
                    <div className="AccordionHolder">
                      <MBZReleaseResults releaseTableHeadings={['', 'Year', 'Title', 'Release Label', 'Number Of tracks']} />
                    </div>
                  )}
                </div>
              </ListGroup.Item>
            )
          })
        }
      </ListGroup>
    </div>
  )
}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  return {
    mbzArtists: state.musicBrainz.mbzArtists,
    releaseArtistID: state.musicBrainz.artistReleaseID
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    findMBZReleases: (artistID: string) => dispatch(Actions.MBZActions.findMBZReleases(artistID))
  }
}

const MBZSearchResultComponent: React.FunctionComponent<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(MBZSearchResults)

export default MBZSearchResultComponent