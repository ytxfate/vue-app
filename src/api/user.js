import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getRouters (data) {
  return request({
    url: '/user/get_routers',
    method: 'post',
    data
  })
}

export function refreshToken (data) {
  return request({
    url: '/user/refresh_login_status',
    method: 'post',
    data
  })
}
