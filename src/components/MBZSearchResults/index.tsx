import React, { FunctionComponent } from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'

import './Styles.css'
import { getKey } from '../../utils/Functions'
import Actions from '../../redux/actions'
import { AppState } from '../../redux/reducers';

type MBZSearchResults = {
  artists: any[],
  findMBZReleases: (artistName: string) => void,
  mbzArtists: IMBZArtist[]
}

const MBZSearchResults: FunctionComponent<MBZSearchResults> = ({ artists, findMBZReleases, mbzArtists }) => {
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
                    <div className="StickToRight" onClick={() => findMBZReleases(artist.name)}>
                      <span style={{ color: '#6699c3', cursor: 'pointer' }}>Show releases</span>
                    </div>
                  </div>
                  <div className="AccordionHolder">lala</div>
                </div>
              </ListGroup.Item>
            )
          })
        }
      </ListGroup>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    mbzArtists : state.musicBrainz.mbzArtists
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    findMBZReleases : (artistName: string) => dispatch(Actions.MBZActions.getMBZArtist(artistName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MBZSearchResults)


/**
 *     <Table responsive hover>
        <thead>
          <tr>
            {
              artistHeadings.map(heading => (<th key={getKey()}>{heading}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {
            artists.map((artist) => {
              const { name } = artist
              return (
                <tr
                  key={getKey()}
                >
                  <td>{name}</td>
                  <td onClick={() => { console.log('clicked on ');console.log(artist)}}>
                   <span style={{ color: '#6699c3', cursor: 'pointer' }}>Show releases</span>
                 </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
 */