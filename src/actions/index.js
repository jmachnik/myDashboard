/*
 * action types
 */

import {dashboardApi} from "../api";

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

/*
 * Authentications
 */
export function login(username, password) {
    return dispatch => {
        dashboardApi.get("jakubmachnik/dashboard/1.0.0/login",
            {
                params: {
                    username: username, password: password
                }
            })
            .then((resp) => {
                dispatch(loginSuccess(username, resp.data.token));
            })
            .catch(() => {
                dispatch(loginError());
            });
    }
}

export function registerUser(name, password) {
    return {type: REGISTER_USER, name, password}
}

export function loginUser(username, password) {
    return {type: LOGIN_USER, username, password}
}

export function loginSuccess(username, token) {
    return {type: LOGIN_SUCCESS, username, token}
}

export function loginError() {
    return {type: LOGIN_ERROR}
}
export function logout() {
    return {type: LOGOUT}
}


/*
 * Posts
 */

export const GET_POST_ASYNC = 'GET_POST';
export const CREATE_POST = 'CREATE_POST';


export function getPostAsync(posts) {
    return {type: GET_POST_ASYNC, posts}
}

export function getPosts() {
    return dispatch => {
        dashboardApi.get("jakubmachnik/dashboard/1.0.0/post")
            .then(resp => dispatch(getPostAsync(resp.data)))
    }
}