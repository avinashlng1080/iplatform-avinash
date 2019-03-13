import { combineReducers } from 'redux'

import ShortListReducer from './FavoriteListReducer'
import LastFMReducer from './LastFMReducer'
import MBZReducer from './MBZReducer'


export const rootReducer = combineReducers({
    favoriteList: ShortListReducer,
    lastFM: LastFMReducer,
    musicBrainz: MBZReducer
})

export type AppState = ReturnType<typeof rootReducer>