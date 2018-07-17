import axios from 'axios'
import {LOGIN_USER, loginSuccess, loginUser} from "../actions";
import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux'


// const registerUser = (username, email, password) =>
//     instance.get("jakubmachnik/dashboard/1.0.0/login",
//         {
//             params: {
//                 username: username, email: email, password: password
//             }
//         })
//         .then(resp => resp.data)
//         .then(data => {
//             dispatch(loginSuccess(data.token))
//         }).catch((error) => {
//         dispatch(loginError())
//     })


const mapStateToProps = state => ({
    error: state.authorization.error,
})


const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(loginUser(username,password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)