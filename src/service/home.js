import axios from "./config";

// 设置在/tabcar路由中获取数据的方法
export const getTabCar = () => {
    return axios.get('/tabcar')
}
