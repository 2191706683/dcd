import Mock from 'mockjs'
import tabcar from "./data/tabcar"
import detail from './data/detail'
import user from './data/user'

// 设置请求数据时时间，模拟后端接口请求
Mock.setup({
    timeout: '50-1000'
})

// 设置首页数据的路径
Mock.mock(/\/tabcar/, 'get' , () => {
    return {
        code: 0, // 返回状态码
        data: tabcar  // 返回数据
    }
})

// 设置详情页数据的路径
Mock.mock(/\/detail/, 'get', () => {
    return {
        code: 0,  // 返回状态码
        data: detail  // 返回数据
    }
})

// 设置用户图标数据的路径
// Mock.mock(/\/user/, 'get', () => {
//     return {
//         code: 0,  // 返回状态码
//         data: user  // 返回数据
//     }
// })