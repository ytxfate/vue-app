import request from '../utils/request'

export function getRouters (data) {
  return request({
    url: '/user/get_routers',
    method: 'post',
    data
  })
}
