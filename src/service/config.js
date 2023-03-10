import axios from "axios";

// 响应拦截器
axios.interceptors.response.use((res) => {
    return res.data
})

export default axios