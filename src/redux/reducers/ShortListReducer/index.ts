import _ from 'lodash'

import { GET_SHORT_LIST, ADD_TO_SHORT_LIST } from '../../actions/Types'
import { ShortListType } from '../../actions/ShortListActions/types'

type ShortListState = {
    shortListItems: IArtist[]
}

const INITIAL_STATE: ShortListState = {
    shortListItems: []
}

export default (state = INITIAL_STATE, action: ShortListType) => {
    switch (action.type) {
        case GET_SHORT_LIST:
            return state
        case ADD_TO_SHORT_LIST:
            const updateFavItems = _.uniqBy([...state.shortListItems, action.payload], 'artistName')
            return { ...state, shortListItems: updateFavItems }
        default:
            return state
    }
}