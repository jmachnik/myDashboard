import {LOGIN_ERROR, LOGIN_USER, REGISTER_USER} from '../actions'
import history from "../history";


const authorization = (state = {token: '', name: '', logged: false, error: false}, action) => {
    switch (action.type) {
        case REGISTER_USER :
            // loginUser(action.name, action.email, action.password).then(data => state.token = data);
            return Object.assign({}, state, {logged: true, name: action.name, token: state.token});
        case LOGIN_USER: {
            history.push('/dashboard');
            return Object.assign({}, state, {token: state.token});
        }
        case LOGIN_ERROR :
            return Object.assign({}, state, {error: true});
        default:
            return state
    }
}

export default authorization;