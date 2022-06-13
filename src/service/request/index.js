import axios from 'axios'
//测试

// axios.interceptors.request.use(
//   function (config) {
//     // 在发送请求之前做些什么
//     console.log('我是测试')
//     return config
//   },
//   function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error)
//   }
// )

// const data = axios({
//   url: `http://152.136.185.210:5000/users/1`,
//   method: 'get',
//   headers: {
//     Authorization:
//       'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE2NTUxMDYyNjUsImV4cCI6MTY1NzY5ODI2NX0.c_5SMS61c8Zb7QOhkHPfLYSXxgFkYLFlXqMFKmVP6DhK5PjkwCRrgu-Z5D5CXRyjVnfvGt8vVkwokpOG5__VhldsnSzfhe0YNmA616Pfaz3h0KaGuEawgS2VqVS9K29cVYN8N7H-s5kythFppRiJUePpPSoCAFX4TyWbMnotwyw'
//   }
// })
// console.log('我是测试返回:', data)

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
