import React from 'react'
import {connect} from 'react-redux'

let Summary = (props) => {
    return (

        <div>SUMMARY</div>


    )
}

const mapStateToProps = state => {
    return {
        username: state.authorization.name
    };
};
Summary = connect(mapStateToProps)(Summary)
export default Summary
