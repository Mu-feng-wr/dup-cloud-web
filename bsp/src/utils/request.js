import axios from 'axios'
import { Message } from 'element-ui'
import { getBspToken } from '@/utils/auth'

var baseURL = process.env.VUE_APP_BASE_API
if (process.env.NODE_ENV == 'development' && window.$wujie) {
  baseURL = window.$wujie.props.origin
}

const service = axios.create({
  baseURL: baseURL,
  timeout: 30000 // 设置超时时间
})

service.interceptors.request.use(
  (config) => {
    if (getBspToken()) {
      config.headers['Token'] = getBspToken()
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
