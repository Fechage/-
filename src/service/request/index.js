import axios from 'axios'

class Request {
  constructor(config) {
    this.instance = axios.create(config)
    // 拦截器
    this.interceptors = config.interceptors
    // 调用拦截器
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptors,
      this.interceptors.requestInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
  }

  // request 方法重写
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((rej) => {
          reject(rej)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default Request
