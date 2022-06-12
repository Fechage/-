import axios from 'axios'

class Request {
  constructor(config) {
    this.config = config
    this.instance = axios.create(config)
  }
  // request 方法重写
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((rej) => {
          reject(rej)
        })
    })
  }
  get(config) {
    return this.request({ ...config, methods: 'GET' })
  }
  post(config) {
    return this.request({ ...config, methods: 'POST' })
  }
  delete(config) {
    return this.request({ ...config, methods: 'DELETE' })
  }
  patch(config) {
    return this.request({ ...config, methods: 'PATCH' })
  }
}

export default Request
