import axios from 'axios'
// import { Message } from 'element-ui'
import Message from 'element-ui/packages/message'
import { getToken } from '@/utils/auth.js'
import store from '@/store/index.js'

// create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:6001/api', // url = base url + request url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

let isRefreshing = false
let requests = []

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code === 1200) { // 未登录
        store.dispatch('user/resetToken').then(() => {
          setTimeout(() => location.reload(), 1500)
        })
      } else if (res.code === 1102) { // jwt 过时
        const config = response.config
        if (!isRefreshing) {
          isRefreshing = true
          store.dispatch('user/refreshToken').then(res => {
            config.headers['Authorization'] = res.jwt
            config.baseURL = ''
            requests.forEach(cd => cd(res.jwt))
            requests = []
            service(response.config)
          }).catch(() => {
            Message({
              message: '刷新认证信息失败，请重新登录',
              type: 'warning',
              duration: 2 * 1000
            })
            store.dispatch('user/resetToken').then(() => {
              setTimeout(() => location.reload(), 1500)
            })
          }).finally(() => {
            isRefreshing = false
          })
        } else {
        // 正在刷新token，将返回一个未执行resolve的promise
          return new Promise((resolve) => {
          // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
            requests.push(() => {
              config.baseURL = ''
              config.headers['Authorization'] = store.getters.token
              resolve(service(config))
            })
          })
        }
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
