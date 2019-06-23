import axios from 'axios'
import iView from 'iview'
const service = axios.create({
  baseURL: $conf.baseUrl,
  timeout: 1800000,
  withCredentials: true
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    iView.LoadingBar.start()
    if (config.method === 'get') {
      config.url = encodeURI(config.url)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
service.interceptors.response.use(
  response => {
    iView.LoadingBar.finish()
    return response
  },
  error => {
    iView.LoadingBar.error()
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log('未登录！')
          break
        case 500:
          console.log('服务器端错误！')
          break
        default:
          console.log('状态码：' + error.response.status)
      }
    }
    console.log(error.response, '请求错误')
    return Promise.reject(error)
  }
)

/**
 * 请求统一处理
 * @param {method} 请求的方式
 * @param {url} 请求的url
 * @param {paramObj} 请求需要的参数
 * @param {loadingStr} 控制loading的变量的字符串形式，支持 obj.str 形式
 * @return {promise}
 */
function ajax (method, url, paramObj, loadingStr) {
  // 参数处理
  if (typeof paramObj === 'string') {
    // 没有传paramObj
    loadingStr = paramObj
    paramObj = {}
  }

  let loadingFn = t => {
    // eslint-disable-next-line no-unused-expressions
    loadingStr
      ? loadingStr.split('.').length > 1
        ? (this[loadingStr.split('.')[0]][loadingStr.split('.')[1]] = t)
        : (this[loadingStr] = t)
      : ''
  }

  loadingFn(true)

  this.$Loading.start()

  let _opts = { method, url }

  if (method.toLowerCase() === 'post') {
    _opts.data = paramObj
  } else {
    _opts.params = paramObj
  }
  return new Promise((resolve, reject) => {
    switch (method) {
      case 'get':
      case 'post':
      case 'patch':
      case 'put':
        service(_opts).then(
          response => {
            loadingFn(false)

            this.$Loading.finish()

            let data = response.data

            if (data.code === $conf.RETCODE_OK) {
              resolve(response.data)
            } else {
              console.log(data.message, '返回值错误', 'api地址：' + url)
              this.$Message.error(data.message)
              reject(data)
            }
          },
          err => {
            loadingFn(false)

            this.$Loading.error()

            reject(err)
          }
        )
        break
      default:
        reject(new Error('参数方法名错误！'))
    }
  })
}

export { ajax, service }
