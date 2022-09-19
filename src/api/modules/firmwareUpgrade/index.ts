import http from '../../index'

// 统计数据
export const getStatisticData = params =>
  http.get({
    url: '/tbClientInfo/latest/version',
    params,
  })
