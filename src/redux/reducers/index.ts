import { combineReducers } from 'redux'

import ShortListReducer from './ShortListReducer'



export const rootReducer =  combineReducers({
    shortList: ShortListReducer
})

export type AppState = ReturnType<typeof rootReducer>