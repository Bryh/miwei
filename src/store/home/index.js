import defaultState from "./defaultState"
import { GET_CONTENT_LIST } from  "../actionTypes"


const reducer = (
    previous_state = defaultState,
    action

) => {
    let new_state = Object.assign({}, previous_state)

    switch ( action.type ) {
        case GET_CONTENT_LIST:
        new_state.contentlist = action.contentlist;
        break;
        default: return previous_state;
    }
    return new_state
}
  

export default reducer