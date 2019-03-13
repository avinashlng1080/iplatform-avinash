import _ from 'lodash'
import { GET_SHORT_LIST, ADD_TO_SHORT_LIST, ShortListType, MusicFavoriteType } from '../../Types'

type ShortListState = {
    shortListItems: ILastFMArtist[],
    shortListRelease: IMBZRelease[]
}

const INITIAL_STATE: ShortListState = {
    shortListItems: [],
    shortListRelease: []
}

const processFavoriteMusic = (music: MusicFavoriteType, state: ShortListState) => {
    if (_.has(music, 'title')) {
        return _.uniqBy([...state.shortListRelease, music], 'title')
    }
    return _.uniqBy([...state.shortListItems, music], 'name')
}


export default (state = INITIAL_STATE, action: ShortListType) => {
    switch (action.type) {
        case GET_SHORT_LIST:
            return state
        case ADD_TO_SHORT_LIST:
            const updateFavItems = processFavoriteMusic(action.payload, state)
            return { ...state, ...updateFavItems }
        default:
            return state
    }
}