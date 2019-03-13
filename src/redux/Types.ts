// SHORT LIST REDUX SECTION
export const GET_FAVORITE_LIST                  = "GET_FAVORITE_LIST"
export const ADD_ARTIST_TO_FAVORITE_LIST        = "ADD_ARTIST_TO_FAVORITE_LIST"
export const REMOVE_ARTIST_FROM_FAVORITE_LIST   = "REMOVE_ARTIST_FROM_FAVORITE_LIST"
export const ADD_RELEASE_TO_FAVORITE_LIST       = "ADD_RELEASE_TO_FAVORITE_LIST"
export const REMOVE_RELEASE_FROM_FAVORITE_LIST  = "REMOVE_RELEASE_FROM_FAVORITE_LIST"

type GetFavoriteListAction = {
    type: typeof GET_FAVORITE_LIST
}

type AddArtistToFavoriteListAction = {
    type: typeof ADD_ARTIST_TO_FAVORITE_LIST,
    payload: ILastFMArtist
}

type RemoveArtistToFavoriteListAction = {
    type: typeof REMOVE_ARTIST_FROM_FAVORITE_LIST,
    payload: ILastFMArtist
}

type AddReleaseToFavoriteListAction = {
    type: typeof ADD_RELEASE_TO_FAVORITE_LIST,
    payload: IMBZRelease
}

type RemoveReleaseToFavoriteListAction = {
    type: typeof REMOVE_RELEASE_FROM_FAVORITE_LIST,
    payload: IMBZRelease
}

export type FavoristeListType = GetFavoriteListAction | AddArtistToFavoriteListAction | RemoveArtistToFavoriteListAction | AddReleaseToFavoriteListAction | RemoveReleaseToFavoriteListAction


// LAST FM REDUX SECTION
export const GET_LASTFM_ARTIST_SUCCESS = "GET_LASTFM_ARTIST_SUCCESS"
export const GET_LASTFM_ARTIST_FAILURE = "GET_LASTFM_ARTIST_FAILURE"
export const GET_LASTFM_ARTIST_RESETTER = "GET_LASTFM_ARTIST_RESETTER"

type GetLastFMArtistSuccess = {
    type: typeof GET_LASTFM_ARTIST_SUCCESS,
    payload: {
        artists: ILastFMArtist[]
    }
}

type GetLastFMArtistFailure = {
    type: typeof GET_LASTFM_ARTIST_FAILURE,
    payload: {
        error: ILastFMError
    }
}

type GetLastFMArtistResetter = {
    type: typeof GET_LASTFM_ARTIST_RESETTER,
}

export type GetLastFMArtistType = GetLastFMArtistSuccess | GetLastFMArtistFailure | GetLastFMArtistResetter

// MusicBrainz Redux 
export const MBZ_GET_ARTIST_RESET = "MBZ_GET_ARTIST_RESET"
export const MBZ_GET_ARTIST_SUCCESS = "MBZ_GET_ARTIST_SUCCESS"
export const MBZ_GET_ARTIST_FAILURE = "MBZ_GET_ARTIST_FAILURE"
export const MBZ_FIND_RELEASE_RESET = "MBZ_FIND_RELEASE_RESET"
export const MBZ_FIND_RELEASE_SUCCESS = "MBZ_FIND_RELEASE_SUCCESS"
export const MBZ_FIND_RELEASE_FAILURE = "MBZ_FIND_RELEASE_FAILURE"

type FindMBZReleaseReset = {
    type: typeof MBZ_FIND_RELEASE_RESET,
}

type FindMBZReleaseSuccess = {
    type: typeof MBZ_FIND_RELEASE_SUCCESS,
    payload: {
        releases: IMBZRelease[]
        artistReleaseID: string
    }
}

type FindMBZReleaseFailure = {
    type: typeof MBZ_FIND_RELEASE_FAILURE,
}

// ******************************************

type GetMBZArtistSuccess = {
    type: typeof MBZ_GET_ARTIST_SUCCESS,
    payload: {
        artists: IMBZArtist[]
    }
}

type GetMBZArtistFailure = {
    type: typeof MBZ_GET_ARTIST_FAILURE,
}

type GetMBZArtistResetter = {
    type: typeof MBZ_GET_ARTIST_RESET,
}

export type GetMBZArtistType = GetMBZArtistSuccess | GetMBZArtistFailure | GetMBZArtistResetter | FindMBZReleaseReset | FindMBZReleaseSuccess | FindMBZReleaseFailure
