import axios from 'axios'
import { ElMessage } from 'element-plus'

// 配置实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})
// 配置请求拦截器
request.interceptors.request.use((config) => {
  console.log(config)
  return config
})
// 配置响应拦截器
request.interceptors.response.use(
  (resp) => {
    return resp.data
  },
  (err) => {
    let msg = ''
    const status = err.response.status
    switch (status) {
      case 401:
        msg = 'TOKEN过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器错误'
        break
      default:
        msg = '网络异常'
    }
    ElMessage({ type: 'error', message: msg })
    return Promise.reject(err)
  }
)
// 导出
export default request
