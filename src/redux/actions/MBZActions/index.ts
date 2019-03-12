import _ from 'lodash'

import { getMBZArtistURL, getMBZReleaseURL } from "../../../api/network";
import { MBZ_GET_ARTIST_SUCCESS, MBZ_GET_ARTIST_FAILURE, MBZ_GET_ARTIST_RESET } from '../../Types';

export const getMBZArtistSuccess = (artists: IMBZArtist[]) => {
    return {
        type: MBZ_GET_ARTIST_SUCCESS,
        payload: {
            artists: artists
        }
    }
}

export const getMBZArtistFailure = () => {
    return {
        type: MBZ_GET_ARTIST_FAILURE,
        payload: {
            artists: []
        }
    }
}

const getMBZArtistReset = () => {
    return {
        type: MBZ_GET_ARTIST_RESET,
    }
}

export const getMBZArtist = (artistName: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(getMBZArtistReset())
            const response = await fetch(getMBZArtistURL(artistName))
            const parsedResponse = await response.json()
            if (parsedResponse && _.isEmpty(parsedResponse['artists'])) {
                dispatch(getMBZArtistFailure())
            }
            else {
                dispatch(getMBZArtistSuccess(parsedResponse['artists'].map((artist: any) => _.pick(artist, ['id', 'name']))))
            }
        } catch (error) {
            console.error(error)
            dispatch(getMBZArtistFailure())
        }
    }
}


export const findMBZReleases = (artistID: string) => {
    return async (dispatch: any) => {
        try {
            // dispatch(getMBZArtistReset())
            const response = await fetch(getMBZReleaseURL(artistID))
            const parsedResponse = await response.json()
            const trimedResponse = parsedResponse['releases'].map((release: any) => _.pick(release, ['date', 'title', 'label-info', 'track-count', 'artist-credit']))   
            const releases = _.map(trimedResponse, (item) => {
                const labelInfo = !_.isEmpty(item["label-info"]) ? item["label-info"][0].label : {}
                const artistCredit = !_.isEmpty(item["artist-credit"]) ? item["artist-credit"][0].artist.id : ''
                return {
                    year: item.date,
                    title: item.title,
                    releaseLabel: !_.isEmpty(labelInfo) ? labelInfo.name : '',
                    numberOfTracks: item["track-count"],
                    artistCredit
                }
            })
            
            if(releases && _.isEmpty(releases)){
                dispatch(getMBZArtistFailure())
            }
            else{
                dispatch(getMBZArtistSuccess())
            }
        } catch (error) {
            console.error(error)
            // dispatch(getMBZArtistFailure())
        }
    }
}