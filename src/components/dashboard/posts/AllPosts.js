import React from "react";
import {getPosts} from "../../../actions";
import Posts from "./Posts";
import {connect} from 'react-redux';

class AllPosts extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (<Posts posts={this.props.posts}/>)
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.list
    };
};

const mapDispatchToProps = dispatch => ({
    getPosts: () => {
        dispatch(getPosts())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);