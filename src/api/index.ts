// import { Message } from 'element-ui';
import { message } from 'ant-design-vue'
import { v4 as uuidv4 } from 'uuid'
import Http from '../utils/httpCore/utils/http'
import { router } from '../router'
import { decryptsm4, encryptsm3, encryptsm4 } from '~/utils'
// import { envConfig } from '@/dev'

// const isDev = process.env.NODE_ENV === 'development'
// 是否使用本地接口调试
const LocalInterfaceDebugging = true

const baseURL = 'http://10.144.28.156:17025'
// baseURL = process.env.VUE_APP_BASE_API
// if (LocalInterfaceDebugging) {
//   // 静春
//   baseURL = 'http://192.168.199.243:7039'
//   // 安成
//   // baseURL = "http://192.168.199.24:7039";
// }
// else {
//   if (isDev)
//     // baseURL = envConfig()
//   else
//     baseURL = process.env.VUE_APP_BASE_API
// }

// 接口白名单
const whiteList = [
  '/ygt-user/tbFilePath/uploadFiles',
  '/ygt-user/user/login',
  '/ygt-api/general/getToken',
  '/ygt-user/user/logout',
  '/ips/admin/web/getCurrentUser',
  '/ygt-referral/tbRStatisticsAna/exportExcel',
  '/ygt-user/tbMhLoginMenu/getLoginMenuById',
  '/ygt-user/role3/getLoginOrgRoles',
  '/ygt-activity/tbAProductRecords/exportProductCouponInfo',
  '/ygt-api/general/uploadFile',
  '/ygt-api/general/uploadPic',
]

const options = {
  axiosOptions: {
    baseURL,
    retry: 0,
    timeout: 20000,
  },
  // 请求拦截器
  requestInterceptorSuccessCb: (config) => {
    // 黑龙江单点的登录请求的ip更改
    if (
      config.url === '/ips/admin/web/getCurrentUser'
      || config.url === '/ips/admin/web/beforeFact'
    ) {
      const configs = {
        ...config,
        baseURL: window.g.APP_SINGEL_BASE_URL || '',
      }
      return configs
    }

    if (LocalInterfaceDebugging) {
      config.url = config.url.replace(
        /(\/ygt-richdiseases|\/ygt-registry-manage|\/ygt-health-archive)/g,
        '',
      )
      return config
    }
    else {
      return encryption(config)
    }
  },
  // 响应拦截器
  responseInterceptorSuccessCb: (res) => {
    if (LocalInterfaceDebugging) {
      consoleRes(res)
      return res.data
    }
    if (!whiteList.includes(res.config.url))
      res.data = JSON.parse(decryptsm4(res.data))

    if (
      res.data.code === 0
      && res.config.url !== '/ygt-referral/tbRStatisticsAna/exportExcel'
      && res.config.url !== '/ygt-activity/tbAProductRecords/exportProductCouponInfo'
    ) {
      consoleRes(res)
      return res.data
    }
    else if (
      res.config.url === '/ygt-referral/tbRStatisticsAna/exportExcel'
      || res.config.url === '/ygt-activity/tbAProductRecords/exportProductCouponInfo'
    ) {
      return res
    }
    else if (res.config.url === '/ygt-user/role/getLoginMenus') {
      return res.data
    }
    else {
      consoleErr(res)
      throw res.data
    }
  },
  // 错误拦截器
  responseInterceptorErrorCb: (error, code, msg) => {
    if (code === 401) {
      console.log('11111111', 11111111)
      message.error(error?.response.status + error?.response?.data?.desc || '操作失败!')
      sessionStorage.clear()
      consoleErr(error)
      router.push('/login')
      // window?.location?.reload?.()
      return
    }
    if (
      error.code === 'ECONNABORTED'
      || error.message === 'Network Error'
      || error.message.includes('timeout')
    )
      message.error(`请求错误，请稍后重试,错误代码：${error.code}`)

    consoleErr(error, msg)
    return error.response ? error.response : msg
  },
}

const encryption = (config) => {
  if (!whiteList.includes(config.url)) {
    // 将appkey、token、timestamp、nonce、signature放入请求头中
    const appkey = sessionStorage.getItem('secretKey')
    const token = sessionStorage.getItem('token')
    const timestamp = new Date().getTime()
    // const timestamp = dayjs().unix()
    const nonce = uuidv4()
    config.headers.appkey = appkey
    config.headers.token = token
    config.headers.timestamp = timestamp
    config.headers.nonce = nonce
    let p = ''
    if (config.data) {
      p = encryptsm4(config.data)
    }
    else if (config.params) {
      // console.log("config.params :>> ", config.params);
      // if (config.params.pageNum) {
      //   config.params.pageNum = JSON.stringify(config.params.pageNum)
      // }
      // if (config.params.pageSize) {
      //   config.params.pageSize = JSON.stringify(config.params.pageSize)
      // }
      for (const i in config.params)
        config.params[i] = `${config.params[i]}`

      // console.log('params1 -> ', config.params)
      p = encryptsm4(config.params)
      // console.log('params2 -> ', p)
    }
    const signature = encryptsm3(
      (
        `${config.url
        }appkey=${
        appkey
        }token=${
        token
        }timestamp=${
        timestamp
        }nonce=${
        nonce
        }${p}`
      ).toLowerCase(),
    ).toUpperCase()
    config.headers.signature = signature
  }
  // console.log('config===========', config)
  return config
}
const consoleRes = (res) => {
  // setTimeout(() => {
  console.log(
    `%c${`/${res.config.url.split('/')[res.config.url.split('/').length - 1]}`}`,
    'font-weight:bold',
    JSON.parse(JSON.stringify(res.data)),
  )
  // }, 0)
}
const consoleErr = (error, msg) => {
  // console.log('error', error)
  // console.log('error', error.status)
  if (error.status) {
    message.error(`状态码: ${error.status}，${error?.data?.desc || '服务器错误，操作失败!'}`)
    console.error('__http__error', error.data)
  }
  else if (error.response === undefined) {
    console.error('__http__error', error.response ? error.response : msg)
  }
  else {
    message.error(
      `状态码: ${
        error.response.status
        }，${
        error?.response?.data?.desc || '服务器错误，操作失败!'}`,
    )
    console.error('__http__error', error.response)
  }
}
// 实例化http
const http = new Http(options)

export default http
