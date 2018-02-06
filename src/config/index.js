import axios from 'axios'
import Cookies from 'js-cookie'
// 请求数据正常状态
export const ERR_OK = 8200
// 页面渲染延时
export const TIME_QUERY = 500

export const imageCDN = process.env.IMAGE_CDN
export const baseUrl = ''
export const baseImgUrl = process.env.BASE_URL

// 请求超时时间
axios.defaults.timeout = 5000

// respone拦截器
axios.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    let {data} = response
    console.log(data.message)
    if (data.message === 'token failure!') {
      localStorage.removeItem('token')
      localStorage.removeItem('UserName')
      localStorage.removeItem('Password')
      localStorage.removeItem('token')
      window.location.href = '#/'
    } else {
      return Promise.resolve(response)
    }
    // 50014:Token 过期了 50012:其他客户端登录了 50008:非法的token
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export function fetch(requestUrl, params = '') {
  // const token = Cookies.get('token') === undefined ? '11111' : Cookies.get('token')
  const token = localStorage.getItem('token') === null ? '' : localStorage.getItem('token')
  return axios({
    url: requestUrl,
    method: 'post',
    data: {
      'body': params
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': token
    }
  })
}

export function fetchapi(requestUrl, params = '') {
  // const token = Cookies.get('token') === undefined ? '11111' : Cookies.get('token')
  const token = localStorage.getItem('token') === null ? '' : localStorage.getItem('token')
  return axios({
    url: `${baseUrl}api/standardCheck`,
    method: 'post',
    data: {
      'requestId': 'xxxxxx-xxxxxx-xxxxx-xxxxx',
      'apiKey': 'highstore',
      'uri': requestUrl,
      'lang': 'zh-cn',
      'timeZone': '+8:00',
      'sign': ' xxxxxxxxxxxxxxxxxxxxxx',
      'body': params
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': token
    }
  })
}


export function getCookies(params) {
  return Cookies.get(params) || ''
}

export function setCookies(memberNo, openid, token) {
  Cookies.set('memberNo', memberNo)
  Cookies.set('openid', openid)
  Cookies.set('token', token)
}

