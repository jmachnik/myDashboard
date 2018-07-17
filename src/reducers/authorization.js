import {LOGIN_ERROR, LOGIN_SUCCESS} from '../actions'
import history from "../history";


const authorization = (state = {token: '', name: '', logged: false, error: false}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            history.push('/dashboard');
            return Object.assign({}, state, {logged: true, token: action.token, name: action.username, error: false});
        }
        case LOGIN_ERROR :
            return Object.assign({}, state, {error: true});
        default:
            return state
    }
}

export default authorization;