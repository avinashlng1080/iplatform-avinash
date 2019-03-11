// SHORT LIST REDUX SECTION
export const GET_SHORT_LIST = "GET_SHORT_LIST"
export const ADD_TO_SHORT_LIST = "ADD_TO_SHORT_LIST"
 
type GetShortListAction = {
    type: typeof GET_SHORT_LIST
}

type AddToShortListAction = {
    type: typeof ADD_TO_SHORT_LIST,
    payload: IArtist
}

export type ShortListType = GetShortListAction | AddToShortListAction


// LAST FM REDUX SECTION
export const GET_LASTFM_ARTIST_SUCCESS = "GET_LASTFM_ARTIST_SUCCESS"
export const GET_LASTFM_ARTIST_FAILURE = "GET_LASTFM_ARTIST_FAILURE"

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

export type GetLastFMArtistType = GetLastFMArtistSuccess | GetLastFMArtistFailure