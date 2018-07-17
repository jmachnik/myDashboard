import axios from 'axios'
import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux'
import {loginError} from "../actions";


const instance = axios.create({
    baseURL: 'http://dashboardjmachnik.getsandbox.com/',
    timeout: 1000,
});

const loginUser = (username, password) => {

}

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