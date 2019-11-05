import Cookies from 'js-cookie'

const tokenKeyName = 'vue-app-token'

export function getToken () {
  return Cookies.get(tokenKeyName)
}

export function setToken (token) {
  return Cookies.set(tokenKeyName, token)
}

export function removeToken () {
  return Cookies.remove(tokenKeyName)
}

const refreshTokenKeyName = 'vue-app-refresh-token'

export function getRefreshToken () {
  return Cookies.get(refreshTokenKeyName)
}

export function setRefreshToken (refreshToken) {
  return Cookies.set(refreshTokenKeyName, refreshToken)
}

export function removeRefreshToken () {
  return Cookies.remove(refreshTokenKeyName)
}
