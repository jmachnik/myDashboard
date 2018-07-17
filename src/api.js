import axios from "axios/index";

export const dashboardApi = axios.create({
    baseURL: 'http://dashboardjmachnik.getsandbox.com/',
    timeout: 5000,
});