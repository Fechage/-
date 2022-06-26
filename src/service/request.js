// 用函数封装一个
import axios from 'axios'
import cache from '@/utils/cache'
import { BASE_URL } from '@/service/request/config'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})
// 携带token拦截器
function requestInterceptor(config) {
  const token = cache.getCache('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}
// 加载拦截器
axiosInstance.interceptors.request.use(requestInterceptor)
// request 方法重写
const zgRequest = {
  // request 方法重写
  request(config) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((rej) => {
          reject(rej)
        })
    })
  },
  get(config) {
    return this.request({ ...config, method: 'GET' })
  },
  post(config) {
    return this.request({ ...config, method: 'POST' })
  },
  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  },
  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}
export default zgRequest
