/*
 * action types
 */

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

/*
 * action creators
 */

export function registerUser(name, password) {
    return {type: REGISTER_USER, name, password}
}

export function loginUser(username, password) {
    return {type: LOGIN_USER, username, password}
}

export function loginSuccess(token) {
    return {type: LOGIN_SUCCESS, token}
}
export function loginError() {
    return {type: LOGIN_SUCCESS}
}