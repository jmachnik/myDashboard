import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT} from '../actions'
import history from "../history";


let initialState = {token: '', name: '', logged: false, error: false};
const authorization = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            history.push('/dashboard');
            return Object.assign({}, state, {logged: true, token: action.token, name: action.username, error: false});
        }
        case LOGIN_ERROR :
            return Object.assign({}, state, {error: true});
        case LOGOUT:
            return Object.assign({}, state, initialState)
        default:
            return state
    }
}

export default authorization;