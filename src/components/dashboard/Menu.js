import React from 'react'
import {connect} from 'react-redux'
import {Nav, NavItem} from "react-bootstrap";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faChartLine} from "@fortawesome/free-solid-svg-icons/faChartLine";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faStickyNote} from "@fortawesome/free-solid-svg-icons/faStickyNote";

let Menu = (props) => {
    return (
        <Nav className="menu bg-dark" bsStyle="pills" stacked>
            <NavItem eventKey={1} href="/dashboard/">
                <FontAwesomeIcon icon={faHome}/> Home
            </NavItem>
            <NavItem eventKey={2} href="/dashboard/users">
                <FontAwesomeIcon icon={faUsers}/> Users
            </NavItem>

            <NavItem eventKey={3} href="/dashboard/summary">
                <FontAwesomeIcon icon={faChartLine}/> Summary
            </NavItem>
            <NavItem eventKey={4} href="/dashboard/posts">
                <FontAwesomeIcon icon={faStickyNote}/> Posts
            </NavItem>
        </Nav>
    )
}

const mapStateToProps = state => {
    return {
        username: state.authorization.name
    };
};
Menu = connect(mapStateToProps)(Menu)
export default Menu
