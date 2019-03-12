import { MBZ_GET_ARTIST_RESET, MBZ_GET_ARTIST_FAILURE, MBZ_GET_ARTIST_SUCCESS, GetMBZArtistType } from '../../Types'

type IMBZState = {
    mbzArtists: IMBZArtist[]
}

const INITIAL_STATE: IMBZState = {
    mbzArtists: []
}

export default (state = INITIAL_STATE, action: GetMBZArtistType) => {
    switch (action.type) {
        case MBZ_GET_ARTIST_RESET:
            return { ...state, mbzArtists: [] }
        case MBZ_GET_ARTIST_SUCCESS:
            return { ...state, mbzArtists: action.payload.artists }
        case MBZ_GET_ARTIST_FAILURE:
            return { ...state, mbzArtists: [] }
        default:
            return { ...state }
    }
}