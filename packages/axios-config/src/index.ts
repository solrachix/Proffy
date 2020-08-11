import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.227.2:3333/v1'
})

export default api
