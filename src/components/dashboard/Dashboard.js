import React from 'react'
import Header from "./Header";
import {connect} from 'react-redux'
import Menu from "./Menu";
import './dashboard.css'
import {Panel} from "react-bootstrap";
import Users from "./Users";
import Summary from "./Summary";
import {Route, Switch} from "react-router-dom";

let Dashboard = (props) => {
    return (
        <div className="dashboard bg-dark">
            <Header></Header>
            <Menu></Menu>
            <Panel className="content">
                <Switch className="container">
                    <Route path={'/dashboard/summary'} exact component={Summary}/>
                    <Route path={'/dashboard/users'} exact component={Users}/>
                    <Route path="" exact render={() => <div>Content</div>}/>
                </Switch>
            </Panel>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.authorization.name,
        isLogged: state.authorization.logged
    };
};
Dashboard = connect(mapStateToProps)(Dashboard)
export default Dashboard
