import React from 'react'
import './header.css'
import {ButtonToolbar, DropdownButton, MenuItem} from "react-bootstrap";

let HeaderView = ({username, logout}) => {
    return <div className="header bg-dark">
        <span className="app-name">App's dashboard</span>
        <ButtonToolbar className={'user'}>
            <DropdownButton
                bsStyle={'primary'}
                title={username}
                key={1}
                id={`dropdown-basic-1`}
            >
                <MenuItem eventKey="1" onClick={(e) => {
                    e.preventDefault();
                    logout()
                }}>Logout</MenuItem>
            </DropdownButton>
        </ButtonToolbar>
    </div>
}


export default HeaderView
