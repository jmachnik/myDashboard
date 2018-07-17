import React from 'react'
import {connect} from 'react-redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons/faUserCircle";
import './header.css'

let Header = (props) => {
    return (<div class="header bg-dark">
        <span class="app-name">App's dashboard</span>
        <span class="user">        <FontAwesomeIcon icon={faUserCircle}/> Welcome {props.username} </span>
    </div>)
}

const mapStateToProps = state => {
    return {
        username: state.authorization.name
    };
};
Header = connect(mapStateToProps)(Header)
export default Header
