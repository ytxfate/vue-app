import { getRouters, login } from '@/api/user'
import { resetRouter } from '@/router/index'
import { setToken, removeToken } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    selfRouters: [],
    token: ''
  },
  mutations: {
    setSelfRouters: (state, routers) => {
      state.selfRouters = routers
    },
    setToken: (state, token) => {
      state.token = token
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
          setToken(response.jwt)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('setSelfRouters', [])
        commit('setToken', '')
        removeToken()
        resetRouter()
        resolve()
      })
    }
  }
}
