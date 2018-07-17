import axios from 'axios'
import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux'
import {loginError, loginUser} from "../actions";
/*
Container wrapper for LoginForm screen
 */

const instance = axios.create({
    baseURL: 'http://dashboardjmachnik.getsandbox.com/',
    timeout: 1000,
});


const mapStateToProps = state => ({
    error: state.authorization.error,
})


const mapDispatchToProps = dispatch => ({
    login: (username, password) => {
        instance.get("jakubmachnik/dashboard/1.0.0/login",
            {
                params: {
                    username: username, password: password
                }
            })
            .then(() => {
                dispatch(loginUser(username, password));
            })
            .catch(() => {
                dispatch(loginError());
            });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)