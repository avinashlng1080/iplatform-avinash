import {
    MBZ_FIND_RELEASE_RESET, MBZ_FIND_RELEASE_SUCCESS,
    MBZ_GET_ARTIST_RESET, MBZ_GET_ARTIST_FAILURE, MBZ_GET_ARTIST_SUCCESS, GetMBZArtistType, MBZ_FIND_RELEASE_FAILURE
} from '../../Types'

type IMBZState = {
    mbzArtists: IMBZArtist[],
    mbzReleases: IMBZRelease[]
    artistReleaseID: string,
    noArtistMatches: boolean
}

const INITIAL_STATE: IMBZState = {
    mbzArtists: [],
    mbzReleases: [],
    artistReleaseID: '',
    noArtistMatches: false,
}

export default (state = INITIAL_STATE, action: GetMBZArtistType) => {
    switch (action.type) {
        case MBZ_GET_ARTIST_RESET:
            return { ...state, mbzArtists: [], noArtistMatches: false }
        case MBZ_GET_ARTIST_SUCCESS:
            return { ...state, mbzArtists: action.payload.artists, noArtistMatches: false }
        case MBZ_GET_ARTIST_FAILURE:
            return { ...state, mbzArtists: [], noArtistMatches: true }
        case MBZ_FIND_RELEASE_RESET:
            return { ...state, mbzReleases: [], artistReleaseID: '' }
        case MBZ_FIND_RELEASE_SUCCESS:
            const { releases, artistReleaseID } = action.payload
            return { ...state, mbzReleases: releases, artistReleaseID: artistReleaseID }
        case MBZ_FIND_RELEASE_FAILURE:
            return { ...state, mbzReleases: [], artistReleaseID: '' }
        default:
            return { ...state }
    }
}