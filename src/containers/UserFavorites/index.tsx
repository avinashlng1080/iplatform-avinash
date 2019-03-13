import React, { FunctionComponent } from 'react'
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import _ from 'lodash'

import './Styles.css'
import { AppState } from '../../redux/reducers'
import Actions from '../../redux/actions'
import { MBZReleaseResults } from '../../components'
import { getKey } from '../../utils/Functions'

type OwnProps = {}
type StateProps = {
  favoriteReleases: IMBZRelease[],
  favoriteArtists: ILastFMArtist[],
}
type DispatchProps = {
  findMBZReleases: (artistID: string) => void,
}
type UserFavoritesProps = OwnProps & StateProps & DispatchProps

const UserFavorites: FunctionComponent<UserFavoritesProps> = ({ favoriteReleases, favoriteArtists, findMBZReleases }) => {
  const favoritesHeadings = ['', 'Artist Name', '']
  return (
    <Container>
      <h2 className="PageTitle">Favorites</h2>
      <hr />
      {!_.isEmpty(favoriteArtists) && (
        <React.Fragment>
          <strong>Artist Section</strong>
          <Table responsive hover>
            <thead>
              <tr>{favoritesHeadings.map(heading => (<th key={getKey()}>{heading}</th>))}</tr>
            </thead>
            <tbody>
              {
                favoriteArtists.map((artist) => {
                  const { name } = artist
                  return (
                    <tr style={{ cursor: 'pointer' }} key={getKey()}>
                      <td />
                      <td>{name}</td>
                      <td />
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </React.Fragment>
      )}
      {!_.isEmpty(favoriteReleases) && (
        <React.Fragment>
          <strong>Release Section</strong>
          <Table responsive hover>
            <thead>
              <tr>{favoritesHeadings.map(heading => (<th key={getKey()}>{heading}</th>))}</tr>
            </thead>
            <tbody>
              {
                favoriteReleases.map((release) => {
                  const { title } = release
                  return (
                    <tr style={{ cursor: 'pointer' }} key={getKey()}>
                      <td />
                      <td>{title}</td>
                      <td />
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </React.Fragment>
      )}
    </Container>
  )
}

const mapStateToProps = (state: AppState): StateProps => {
  return {
    favoriteReleases: state.favoriteList.favoriteReleases,
    favoriteArtists: state.favoriteList.favoriteArtists
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    findMBZReleases: (artistID: string) => dispatch(Actions.MBZActions.findMBZReleases(artistID))
  }
}

const UserFavoritesComponent: FunctionComponent<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(UserFavorites)

export default UserFavoritesComponent
