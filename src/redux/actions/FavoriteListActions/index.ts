import { GET_FAVORITE_LIST, ADD_ARTIST_TO_FAVORITE_LIST, REMOVE_ARTIST_FROM_FAVORITE_LIST, ADD_RELEASE_TO_FAVORITE_LIST,
    REMOVE_RELEASE_FROM_FAVORITE_LIST} from '../../Types'

export const getFavoriteList = () => {
    return {
        type: GET_FAVORITE_LIST
    }
}

export const addArtistToFavoriteList = (artist: ILastFMArtist) => {
    return {
        type: ADD_ARTIST_TO_FAVORITE_LIST,
        payload: artist
    }
}

export const removeArtistFromFavoriteList = (artist: ILastFMArtist) => {
    return {
        type: REMOVE_ARTIST_FROM_FAVORITE_LIST,
        payload: artist
    }
}

export const addReleaseToFavoriteList = (release: IMBZRelease) => {
    return {
        type: ADD_RELEASE_TO_FAVORITE_LIST,
        payload: release
    }
}

export const removeReleaseFromFavoriteList = (release: IMBZRelease) => {
    return {
        type: REMOVE_RELEASE_FROM_FAVORITE_LIST,
        payload: release
    }
}