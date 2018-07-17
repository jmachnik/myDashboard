import {LOGIN_ERROR, LOGIN_SUCCESS, loginSuccess, REGISTER_USER} from '../actions'
import history from "../history";
import axios from "axios/index";


const instance = axios.create({
    baseURL: 'http://dashboardjmachnik.getsandbox.com/',
    timeout: 1000,
});


const authorization = (state = {token: '', name: '', logged: false, error: false}, action) => {
    switch (action.type) {
        case REGISTER_USER : {
            // loginUser(action.name, action.email, action.password).then(data => state.token = data);
            return Object.assign({}, state, {logged: true, name: action.name, token: state.token});
        }
     
        case LOGIN_USER: {
            instance.get("jakubmachnik/dashboard/1.0.0/login",
                {
                    params: {
                        username: action.username, password: action.password
                    }
                })
                .then(resp => {
                    history.push('/dashboard');
                    return Object.assign({}, state, {token: state.token});
                })
                .catch(error => {
                    return Object.assign({}, state, {error: true});
                })
                .finally(() => {
                    return alert("FINALLY");
                })
        }
        default:
            return state
    }
}

export default authorization;