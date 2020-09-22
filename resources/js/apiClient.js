import axios from 'axios'
import store from './store'

const apiClient = axios.create({
    withCredentials: false, // This is the default
    headers: {
        Accept         : 'application/json',
        'Content-Type' : 'application/json'
    }
});

apiClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    let authKey = localStorage.blog_token;
    config.headers["Authorization"] = "Bearer " + authKey;
    return config;
});

export default apiClient;
