import { getRouters, login, refreshToken } from '@/api/user'
import { resetRouter } from '@/router/index'
import { setToken, removeToken, setRefreshToken, removeRefreshToken, getRefreshToken } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    selfRouters: [],
    token: '',
    refreshToken: ''
  },
  mutations: {
    setSelfRouters: (state, routers) => {
      state.selfRouters = routers
    },
    setToken: (state, token) => {
      state.token = token
    },
    setRefreshToken: (state, refreshToken) => {
      state.refreshToken = refreshToken
    }
  },
  actions: {
    getRouters ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getRouters().then(res => {
          commit('setSelfRouters', res.response)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    login ({ commit }, formValus) {
      return new Promise((resolve, reject) => {
        login({ username: formValus.username, password: formValus.password }).then(res => {
          const { response } = res
          commit('setToken', response.jwt)
          commit('setRefreshToken', response.refresh_jwt)
          setToken(response.jwt)
          setRefreshToken(response.refresh_jwt)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve) => {
        commit('setSelfRouters', [])
        commit('setToken', '')
        commit('setRefreshToken', '')
        removeToken()
        removeRefreshToken()
        resetRouter()
        resolve()
      })
    },
    resetToken ({ commit }) {
      return new Promise((resolve) => {
        commit('setSelfRouters', [])
        commit('setToken', '')
        commit('setRefreshToken', '')
        removeToken()
        removeRefreshToken()
        resetRouter()
        resolve()
      })
    },
    refreshToken ({ commit }) {
      return new Promise((resolve, reject) => {
        refreshToken({ refresh_jwt: getRefreshToken() }).then(res => {
          const { response } = res
          commit('setToken', response.jwt)
          commit('setRefreshToken', response.refresh_jwt)
          setToken(response.jwt)
          setRefreshToken(response.refresh_jwt)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
