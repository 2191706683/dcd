import axios from "axios";

// 设置默认域名
// axios.defaults.baseURL = '//backend-api-01.newbee.ltd/api/v1'
axios.defaults.baseURL = 'http://localhost:3000'
// 请求头 带上 Content-Type
axios.defaults.headers['Authorization'] = localStorage.getItem('token') || ''

axios.defaults.headers.post['Content-Type'] = 'application/json'

// 响应拦截器,拦截后端传来的数据
axios.interceptors.response.use((res) => {
    return res.data
})

export default axios