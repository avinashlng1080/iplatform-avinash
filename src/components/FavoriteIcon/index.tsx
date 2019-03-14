import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { iconUnFavorite, iconStar, iconAdd, iconUnAdd } from '../../assets/images'
import { AppState } from '../../redux/reducers';

type flowTypes = "mbz" | "lastFM"
type favType = "artist" | "release"

type OwnProps = {
  favType: favType,
  favoriteItem: ILastFMArtist | IMBZRelease,
  flow: flowTypes
}

type StateProps = {
  releases: IMBZRelease[],
  artists: ILastFMArtist[]
}

type FavoriteIconProps = OwnProps & StateProps

const FavoriteIcon: FunctionComponent<FavoriteIconProps> = ({ releases, artists, favType, favoriteItem, flow }) => {
  let isItemAFavorite = false

  const icons: any = {
    mbz: {
      iconActive: iconStar,
      iconInActive: iconUnFavorite
    },
    lastFM: {
      iconActive: iconAdd,
      iconInActive: iconUnAdd
    }
  }

  switch (favType) {
    case "artist":
      isItemAFavorite = !_.find(artists, favoriteItem)
      break;
    default:
      isItemAFavorite = !_.find(releases, favoriteItem)
      break;
  }

  return (
    <img src={isItemAFavorite ? icons[flow].iconInActive : icons[flow].iconActive} alt={`Favorite ${favType}`} />
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    releases: state.favoriteList.favoriteReleases,
    artists: state.favoriteList.favoriteArtists
  }
}

const FavoriteIconComponent: FunctionComponent<OwnProps> = connect(mapStateToProps, null)(FavoriteIcon)

export default FavoriteIconComponent