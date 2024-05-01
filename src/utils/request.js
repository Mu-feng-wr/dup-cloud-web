import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getDupToken } from '@/utils/auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 30000 // request timeout
})

service.interceptors.request.use(
  (config) => {
    if (getDupToken()) {
      config.headers['Token'] = getDupToken()
    }
    delete config.headers.Cookie
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data

    if (res.code !== 0) {
      if (res.code === 401) {
        store.dispatch('system/logOut')
        return Promise.reject(res)
      }

      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(res)
    } else {
      return Promise.resolve(res)
    }
  },
  (error) => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
