import React from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import Button from "react-bootstrap/es/Button";
import {Redirect} from "react-router-dom";

let LoginForm = ({error, login}) => {
    let name;
    let password;
    let loggedIn = false;
    if (loggedIn) {
        return <Redirect to="/login"/>
    } else {

        return (<div className={"login"}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    login(name.value, password.value)
                }}>
                    <FormGroup
                        controlId="formBasicText"
                    >
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            type="text"
                            inputRef={ref => {
                                name = ref;
                            }}
                        />
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="text"
                            inputRef={ref => {
                                password = ref;
                            }}
                        />
                        <Button type="submit" bsStyle="primary">Login</Button>
                    </FormGroup>
                    <span>{error ? "ERROR" : null}</span>


                </form>
            </div>

        )
    }
}


export default LoginForm
