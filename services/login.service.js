import axios from 'axios'
import { API } from '../config'

export function login(username, password) {
  return axios({
    method: 'GET',
    url: `${ API }/login`,
    params: { username, password }
  }).then(({ data: { user, token } }) => {
    localStorage.user  = JSON.stringify(user)
    localStorage.token = token
  }).then(() => {
    axios.interceptors.request.use((config) => {
      console.log(config)
      return config
    })
  })
}

export function reset(email) {
  return axios({
    method: 'PUT',
    url: `${ API }/reset`,
    data: { email }
  }).then(({ data }) => data)
}
