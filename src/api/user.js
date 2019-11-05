import request from '@/utils/request'

export function login (data) { // 用户登录
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 登录接口返回示例
// {
//   "code": 200,
//   "isSuccess": true,
//   "msg": "请求成功",
//   "response": {
//     "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzI5MjYyNzguMCwiaWF0IjoxNTcyOTI0NDc4LjAsImlzcyI6ImhzZCIsImRhdGEiOnsidXNlcm5hbWUiOiJhZG1pbiJ9fQ.Vc6QbCQNLYtVLQ6JMdIKxlnqELc2ZOFVZV_rTP4NJIw",
//     "refresh_jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzI5MjgwNzguMCwiaWF0IjoxNTcyOTI0NDc4LjAsImlzcyI6ImhzZCIsImRhdGEiOnt9fQ.GDC3JLuuBf26A_RkpxChrpKIF-7xKqmUyw761l-tz3c"
//   }
// }

export function getRouters (data) { // 获取用户 routers
  return request({
    url: '/user/get_routers',
    method: 'post',
    data
  })
}

export function refreshToken (data) { // 刷新 jwt 信息
  return request({
    url: '/user/refresh_login_status',
    method: 'post',
    data
  })
}
// Token 刷新接口返回示例
// {
//   "code": 200,
//   "isSuccess": true,
//   "msg": "请求成功",
//   "response": {
//     "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzI5MjYyNzguMCwiaWF0IjoxNTcyOTI0NDc4LjAsImlzcyI6ImhzZCIsImRhdGEiOnsidXNlcm5hbWUiOiJhZG1pbiJ9fQ.Vc6QbCQNLYtVLQ6JMdIKxlnqELc2ZOFVZV_rTP4NJIw",
//     "refresh_jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzI5MjgwNzguMCwiaWF0IjoxNTcyOTI0NDc4LjAsImlzcyI6ImhzZCIsImRhdGEiOnt9fQ.GDC3JLuuBf26A_RkpxChrpKIF-7xKqmUyw761l-tz3c"
//   }
// }
