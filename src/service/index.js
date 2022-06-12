import Request from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default request
