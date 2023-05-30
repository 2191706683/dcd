import axios from './config.js'

// 对本地/detail路由发送get请求，获取详情页面数据
export const getDetail = () => {
    return axios.get('/detail')
}