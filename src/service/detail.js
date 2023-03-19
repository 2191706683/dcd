import axios from './config.js'

export const getDetail = () => {
    return axios.get('/detail')
}