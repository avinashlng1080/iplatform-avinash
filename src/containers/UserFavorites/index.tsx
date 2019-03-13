import React, { FunctionComponent } from 'react'
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import _ from 'lodash'

import './Styles.css'
import { AppState } from '../../redux/reducers'
import Actions from '../../redux/actions'
import { MBZReleaseResults } from '../../components'
import { getKey } from '../../utils/Functions'
import { iconDelete } from '../../assets/images'
import { removeArtistFromFavoriteList } from '../../redux/actions/FavoriteListActions';

type OwnProps = {}
type StateProps = {
  favoriteReleases: IMBZRelease[],
  favoriteArtists: ILastFMArtist[],
}
type DispatchProps = {
  findMBZReleases: (artistID: string) => void,
  removeArtistFromFavorites: (artist: ILastFMArtist) => void,
  removeReleaseFromFavorites: (release: IMBZRelease) => void,
}
type UserFavoritesProps = OwnProps & StateProps & DispatchProps

const UserFavorites: FunctionComponent<UserFavoritesProps> = ({ favoriteReleases, favoriteArtists, removeArtistFromFavorites,  removeReleaseFromFavorites}) => {
  const favoritesArtistHeadings = ['', 'Artist Name', '']
  const favoritesReleaseHeadings = ['', 'Release Name', '']
  return (
    <Container>
      <h2 className="PageTitle">Favorites</h2>
      <hr />
      {!_.isEmpty(favoriteArtists) && (
        <div className="FavoriteSection">
          <strong>Artist Section</strong>
          <Table responsive hover>
            <thead>
              <tr>{favoritesArtistHeadings.map(heading => (<th key={getKey()}>{heading}</th>))}</tr>
            </thead>
            <tbody>
              {
                favoriteArtists.map((artist) => {
                  const { name } = artist
                  return (
                    <tr style={{ cursor: 'pointer' }} key={getKey()} onClick={() => removeArtistFromFavorites(artist)}>
                      <td><img src={iconDelete} alt='delete favorite artist' /></td>
                      <td>{name}</td>
                      <td />
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
      )}
      {!_.isEmpty(favoriteReleases) && (
        <div className="FavoriteSection">
          <strong>Release Section</strong>
          <Table responsive hover>
            <thead>
              <tr>{favoritesReleaseHeadings.map(heading => (<th key={getKey()}>{heading}</th>))}</tr>
            </thead>
            <tbody>
              {
                favoriteReleases.map((release) => {
                  const { title } = release
                  return (
                    <tr style={{ cursor: 'pointer' }} key={getKey()}>
                      <td><img src={iconDelete} alt='delete favorite artist' /></td>
                      <td>{title}</td>
                      <td />
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
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
    findMBZReleases: (artistID: string) => dispatch(Actions.MBZActions.findMBZReleases(artistID)),
    removeArtistFromFavorites: (artist: ILastFMArtist) => dispatch(Actions.FavoriteListActions.removeArtistFromFavoriteList(artist)),
    removeReleaseFromFavorites: (release: IMBZRelease) => dispatch(Actions.FavoriteListActions.removeReleaseFromFavoriteList(release))
  }
}

const UserFavoritesComponent: FunctionComponent<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(UserFavorites)

export default UserFavoritesComponent
