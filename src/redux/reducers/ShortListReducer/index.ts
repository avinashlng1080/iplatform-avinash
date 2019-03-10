import { GET_SHORT_LIST } from '../../actions/Types'

const INITIAL_STATE = {
    shortListItems: []
}

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_SHORT_LIST:
            return state
        default:
            return state
    }
}