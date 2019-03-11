import { GetLastFMArtistType, GET_LASTFM_ARTIST_SUCCESS, GET_LASTFM_ARTIST_FAILURE } from "../../Types";

type GetLastFMArtistState = {
    artists: ILastFMArtist[],
    noArtistMatches: boolean
}

const INITIAL_STATE: GetLastFMArtistState = {
    artists: [],
    noArtistMatches: false
}

// Deliberately mutating array as we keep overidding the artist search result
export default (state = INITIAL_STATE, action: GetLastFMArtistType) => {
    switch (action.type) {
        case GET_LASTFM_ARTIST_SUCCESS:
            return { ...state, noArtistMatches: false, artists: action.payload.artists }
        case GET_LASTFM_ARTIST_FAILURE:
            return { ...state, noArtistMatches: true, artists: [] }
        default:
            return { ...state }
    }
}