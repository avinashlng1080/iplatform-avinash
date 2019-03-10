import { combineReducers } from 'redux'

import ShortListReducer from './ShortListReducer'

export default combineReducers({
    shortList: ShortListReducer
})