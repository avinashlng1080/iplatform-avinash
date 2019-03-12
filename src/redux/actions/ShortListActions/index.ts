import { GET_SHORT_LIST, ADD_TO_SHORT_LIST } from '../../Types'

export const getShortList = () => {
    return {
        type: GET_SHORT_LIST
    }
}

export const addToShortList = (artist: ILastFMArtist) => {
    return {
        type: ADD_TO_SHORT_LIST,
        payload: artist
    }
}