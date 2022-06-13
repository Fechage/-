import Request from './request/index'
import cache from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './request/config'

const myRequest = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      console.log(111111)
      const token = cache.getCache('token')
      if (token) {
        config.headers['Authorization'] = token
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    }
  }
})
export default myRequest
