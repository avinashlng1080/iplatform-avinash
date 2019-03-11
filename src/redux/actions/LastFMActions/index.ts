import _ from 'lodash'

import { getSimilarArtistURL } from "../../../api/network";
import { GET_LASTFM_ARTIST_SUCCESS, GET_LASTFM_ARTIST_FAILURE } from "../../Types";

const getSimilarArtistSuccess = (artists: ILastFMArtist[]) => {
  return {
    type: GET_LASTFM_ARTIST_SUCCESS,
    payload: {
      artists: artists
    }
  }
}

const getSimilarArtistFailure = (error: ILastFMError) => {
  return {
    type: GET_LASTFM_ARTIST_FAILURE,
    payload: {
      error
    }
  }
}

export const getSimilarArtist = (artistName: string) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(getSimilarArtistURL(artistName))
      const parsedResponse = await response.json()
      if (_.has(parsedResponse, 'error')) {
        const { error, message } = parsedResponse
        dispatch(getSimilarArtistFailure({ error, message }))
      }
      else {
        const { similarartists: { artist } } = parsedResponse
        dispatch(getSimilarArtistSuccess(artist))
      }
    } catch (error) {
      dispatch(getSimilarArtistFailure({ error: 500, message: 'getSimilarArtist failed' }))
    }
  }
}