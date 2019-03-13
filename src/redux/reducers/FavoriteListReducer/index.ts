import _ from 'lodash'
import {
    GET_FAVORITE_LIST, ADD_ARTIST_TO_FAVORITE_LIST, REMOVE_ARTIST_FROM_FAVORITE_LIST, ADD_RELEASE_TO_FAVORITE_LIST,
    REMOVE_RELEASE_FROM_FAVORITE_LIST, FavoriteListType
} from '../../Types'

type FavoriteState = {
    favoriteArtists: ILastFMArtist[],
    favoriteReleases: IMBZRelease[]
}

const INITIAL_STATE: FavoriteState = {
    favoriteArtists: [],
    favoriteReleases: []
}

export default (state = INITIAL_STATE, action: FavoriteListType) => {
    switch (action.type) {
        case GET_FAVORITE_LIST:
            return { ...state }
        case ADD_ARTIST_TO_FAVORITE_LIST: {
            const newArtists = _.uniqBy([...state.favoriteArtists, action.payload], 'name')
            return { ...state, favoriteArtists: newArtists }
        }
        case REMOVE_ARTIST_FROM_FAVORITE_LIST: {
            const favArtists = [...state.favoriteArtists]
            const removeArtistID = action.payload.mbid
            const newFavArtists = _.remove(favArtists, (artist) => {
                return artist.mbid !== removeArtistID
            })
            return { ...state, favoriteArtists: newFavArtists }
        }
        case ADD_RELEASE_TO_FAVORITE_LIST: {
            const newReleases = _.uniqBy([...state.favoriteReleases, action.payload], 'title')
            return { ...state, favoriteReleases: newReleases }
        }
        case REMOVE_RELEASE_FROM_FAVORITE_LIST: {
            const favReleases = [...state.favoriteReleases]
            const removeArtistID = action.payload.title
            const newFavRelease = _.remove(favReleases, (release) => {
                return release.title !== removeArtistID
            })
            return { ...state, favoriteReleases: newFavRelease }
        }
        default:
            return { ...state }
    }
}