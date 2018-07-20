import {GET_POST_ASYNC} from "../actions";


const posts = (state = {list: []}, action) => {
    switch (action.type) {
        case GET_POST_ASYNC: {
            return Object.assign({}, state, {list: action.posts});
        }
        // case CREATE_RESOURCE :
        //     return Object.assign({}, state, {error: true});
        default:
            return Object.assign({}, state, {})
    }
}

export default posts;