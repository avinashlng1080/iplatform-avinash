import { GET_SHORT_LIST } from '../Types'

export const getShortList = () => { 
    return { 
        type: GET_SHORT_LIST
    }
}

export const addToShortList = (artist: IArtist) => { 
    return { 
        type: GET_SHORT_LIST,
        payload: artist
    }
}