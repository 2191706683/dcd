import Mock from 'mockjs'
import tabcar from "./data/tabcar"
import detail from './data/detail'

// 设置请求数据时间
Mock.setup({
    timeout: '50-1000'
})

// 设置数据的路径
Mock.mock(/\/tabcar/, 'get' , () => {
    return {
        code: 0,
        data: tabcar
    }
})

Mock.mock(/\/detail/, 'get', () => {
    return {
        code: 0,
        data: detail
    }
})