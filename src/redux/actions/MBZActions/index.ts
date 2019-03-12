import _ from 'lodash'

import { getMBZArtistURL } from "../../../api/network";
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

const getMBZArtistReset= () => {
    return { 
        type: MBZ_GET_ARTIST_RESET,
    }
}

export const getMBZArtist = (artistName: string) => {
    return async(dispatch: any) => {
        try {
            dispatch(getMBZArtistReset())
            const response = await fetch(getMBZArtistURL(artistName))
            const parsedResponse  = await response.json()
            if(parsedResponse && _.isEmpty(parsedResponse['artists'])){
                dispatch(getMBZArtistFailure())
            }
            else{
                dispatch(getMBZArtistSuccess(parsedResponse['artists'].map((artist: any) => _.pick(artist, ['id', 'name']))))
            }
        } catch (error) {
            console.error(error)
            dispatch(getMBZArtistFailure())
        }
    }    
}