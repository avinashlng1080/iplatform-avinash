import { combineReducers } from 'redux'

import ShortListReducer from './ShortListReducer'
import LastFMReducer from './LastFMReducer'
import MBZReducer from './MBZReducer'


export const rootReducer = combineReducers({
    shortList: ShortListReducer,
    lastFM: LastFMReducer,
    musicBrainz: MBZReducer
})

export type AppState = ReturnType<typeof rootReducer>