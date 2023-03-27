import axios from './config.js'

export const getUser = () => {
    return axios.get('/user')
}