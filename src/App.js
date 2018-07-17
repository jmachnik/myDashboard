import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import {Route, Router, Switch} from 'react-router-dom';
import history from './history'
import Dashboard from "./components/dashboard/Dashboard";
import {connect} from "react-redux";
import Authorization from "./services/Authorization";

let App = (props) => {
    console.log(props.isLogged);
    if (props.isLogged !== true) {
        return <Authorization/>
    } else {
        return (<div>
                <Router history={history}>
                    <Switch className="container">
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/dashboard" component={Dashboard}>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.authorization.logged);
    return {
        username: state.authorization.name,
        isLogged: state.authorization.logged
    };
};
App = connect(mapStateToProps)(App)
export default App


