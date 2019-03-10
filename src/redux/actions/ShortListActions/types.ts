import { GET_SHORT_LIST, ADD_TO_SHORT_LIST } from '../Types'
 
type GetShortListAction = {
    type: typeof GET_SHORT_LIST
}

type AddToShortListAction = {
    type: typeof ADD_TO_SHORT_LIST,
    payload: IArtist
}

export type ShortListType = GetShortListAction | AddToShortListAction