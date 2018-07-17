import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux'
import {login} from "../actions";
/*
Container wrapper for LoginForm screen
 */


const mapStateToProps = state => ({
    error: state.authorization.error,
})


const mapDispatchToProps = dispatch => ({
    login: (username, password) => {
        dispatch(login(username, password))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)