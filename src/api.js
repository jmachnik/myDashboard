import axios from "axios/index";

const tokenKey = "token";
export const saveToken = (state) => {
    localStorage.setItem(tokenKey, JSON.stringify(state.authorization.token))
}

export const dashboardApi = axios.create({
    baseURL: 'http://dashboardjmachnik.getsandbox.com/',
    timeout: 5000,
    headers: {
        "Token": localStorage.get(tokenKey)
    }
});