import {combineReducers} from 'redux'
import authorization from './authorization'
import posts from "./posts";

export default combineReducers({
    authorization,
    posts
});