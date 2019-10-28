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
