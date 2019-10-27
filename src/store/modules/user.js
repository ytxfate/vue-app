import { getRouters } from '../../api/user'
import { resetRouter } from '../../router/index'

export default {
  namespaced: true,
  state: {
    selfRouters: []
  },
  mutations: {
    setSelfRouters: (state, routers) => {
      state.selfRouters = routers
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
    logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('setSelfRouters', [])
        resetRouter()
        resolve()
      })
    }
  }
}
