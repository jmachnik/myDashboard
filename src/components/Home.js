import React from 'react'
import {connect} from 'react-redux'

let Home = (props) => {
    return (<h1>Welcome {props.username}</h1>)
}

const mapStateToProps = state => {
    return {
        username: state.authorization.name
    };
};
Home = connect(mapStateToProps)(Home)
export default Home
