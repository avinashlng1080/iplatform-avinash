import { combineReducers } from 'redux'

import ShortListReducer from './ShortListReducer'
import LastFMReducer from './LastFMReducer'


export const rootReducer =  combineReducers({
    shortList: ShortListReducer,
    lastFM: LastFMReducer
})

export type AppState = ReturnType<typeof rootReducer>