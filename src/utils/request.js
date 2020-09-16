/**
 *  使用 axios 做请求接口
 */
import axios from "axios";

const BASEURL = process.env.NODE_ENV == "production" ? "" : "/devApi"

const server = axios.create({
    baseURL: BASEURL,
    timeout: 1000,
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
});

// 添加请求拦截器
server.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
server.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default server;