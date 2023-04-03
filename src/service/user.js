import axios from './config.js'

// 对本地http://127.0.0.1:5173/user发送get请求，获取用户图标数据
export const getUser = () => {
    return axios.get('/user')
}

// 登录
// 对//backend-api-01.newbee.ltd/api/v1/user/login接口发送post请求并传参，返回状态码
export const login = (params) => {
    return axios.post('/user/login', params)
}

// 注册
// 对//backend-api-01.newbee.ltd/api/v1/user/register接口发送post请求并传参，返回状态码
export const register = (params) => {
    return axios.post('/user/register', params)
}