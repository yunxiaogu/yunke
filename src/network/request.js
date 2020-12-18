import axios from 'axios'

// 允许跨域携带cookie信息
axios.defaults.widthCredentials = true

export function request(config) {
  // 1 创建axios实例
  const instance = axios.create({
    baseUrl: "http://www.yunke.com/api",
    timeout: 5000
  })

  // 为了解决跨域问题，联合vue.config.js中的devServer配置
  instance.defaults.baseURL = '/api'
  instance.defaults.headers.post['Content-Type'] = 'application/json';

  // 请求拦截
  instance.interceptors.request.use((config) => {
    return config
  }, (err) => {
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use((res) => {
    return res
  }, (err) => {
    console.log(err);
  })

  // 2 发送网络请求，instance(config)本身返回的就是Promise
  return instance(config)
}
