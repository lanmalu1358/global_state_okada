import axios from 'axios'

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fetchGetData = async () => {
    return await API.get('/users')
}