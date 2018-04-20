import Vue from 'vue'
import { setHttpToken } from '../helpers'

export const signup = ({ dispatch }, { payload, context }) => {
  return Vue.axios.post('http://aston-events-api.test/api/v1/register', payload)
    .then((res) => {
      let token = res.data.meta.access_token

      dispatch('setToken', token)
        .then(() => {
          dispatch('fetchUser')
        })
    })
    .catch((err) => {
      context.errors = err.response.data.errors
    })
}

export const login = ({ dispatch }, { payload, context }) => {
  return Vue.axios.post('http://aston-events-api.test/api/v1/auth/token', payload)
    .then((res) => {
      let token = res.data.meta.access_token

      dispatch('setToken', token)
        .then(() => {
          dispatch('fetchUser')
        })
    })
    .catch((err) => {
      context.errors = err.response.data.errors
    })
}

export const fetchUser = ({ commit }) => {
  return Vue.axios.get('http://aston-events-api.test/api/v1/user')
    .then(res => {
      commit('setAuthenticated', true)
      commit('setConfirmed', res.data.data.confirmed)
      commit('setUser', res.data.data)
    })
}

export const setToken = ({ dispatch, commit }, token) => {
  commit('setToken', token)
  setHttpToken(token)
}
