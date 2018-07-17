import React from 'react'
import {connect} from 'react-redux'

let Users = (props) => {
    return (

        <div>Users</div>


    )
}

const mapStateToProps = state => {
    return {
        username: state.authorization.name
    };
};
Users = connect(mapStateToProps)(Users)
export default Users
