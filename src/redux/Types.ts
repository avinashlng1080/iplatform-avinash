// SHORT LIST REDUX SECTION
export const GET_SHORT_LIST = "GET_SHORT_LIST"
export const ADD_TO_SHORT_LIST = "ADD_TO_SHORT_LIST"
 
type GetShortListAction = {
    type: typeof GET_SHORT_LIST
}

type AddToShortListAction = {
    type: typeof ADD_TO_SHORT_LIST,
    payload: ILastFMArtist
}

export type ShortListType = GetShortListAction | AddToShortListAction


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