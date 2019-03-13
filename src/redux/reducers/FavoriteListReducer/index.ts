import _ from 'lodash'
import {
    GET_FAVORITE_LIST, ADD_ARTIST_TO_FAVORITE_LIST, REMOVE_ARTIST_FROM_FAVORITE_LIST, ADD_RELEASE_TO_FAVORITE_LIST,
    REMOVE_RELEASE_FROM_FAVORITE_LIST, FavoristeListType
} from '../../Types'

type FavoriteState = {
    favoriteArtists: ILastFMArtist[],
    favoriteReleases: IMBZRelease[]
}

const INITIAL_STATE: FavoriteState = {
    favoriteArtists: [],
    favoriteReleases: []
}

export default (state = INITIAL_STATE, action: FavoristeListType) => {
    switch (action.type) {
        case GET_FAVORITE_LIST:
            return { ...state }
        case ADD_ARTIST_TO_FAVORITE_LIST: {
            const newArtists = _.uniqBy([...state.favoriteArtists, action.payload], 'name')
            return { ...state, favoriteArtists: newArtists }
        }
        case REMOVE_ARTIST_FROM_FAVORITE_LIST:
            return { ...state }
        case ADD_RELEASE_TO_FAVORITE_LIST: {
            const newReleases = _.uniqBy([...state.favoriteReleases, action.payload], 'title')
            const newState = { ...state, favoriteReleases: newReleases }
            console.log(newState)
            return { ...state, favoriteReleases: newReleases }
        }
        case REMOVE_RELEASE_FROM_FAVORITE_LIST:
            return { ...state }
        default:
            return { ...state }
    }
}