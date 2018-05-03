import Vue from 'vue'
import router from '@/router'
import { setHttpToken } from '../helpers'
import { isEmpty } from 'lodash'
import localforage from 'localforage'
import * as mutationTypes from './mutationTypes'

export const signup = ({ dispatch }, { payload, context }) => {
  return Vue.axios.post(`${process.env.API_URL}/register`, payload)
    .then((res) => {
      let token = res.data.meta.access_token

      dispatch('setToken', token)
        .then(() => {
          dispatch('fetchUser')
        })

      router.replace({ name: 'event-index' })
    })
    .catch((err) => {
      context.errors = err.response.data.errors
    })
}

export const login = ({ dispatch }, { payload, context }) => {
  return Vue.axios.post(`${process.env.API_URL}/auth/token`, payload)
    .then((res) => {
      let token = res.data.meta.access_token

      dispatch('setToken', token)
        .then(() => {
          dispatch('fetchUser')
        })

      router.replace({ name: 'event-index' })
    })
    .catch((err) => {
      context.errors = err.response.data.errors
    })
}

export const confirmEmail = ({ dispatch }, token) => {
  return Vue.axios.post(`${process.env.API_URL}/register/confirm`, token)
}

export const fetchUser = ({ commit }) => {
  return Vue.axios.get(`${process.env.API_URL}/user`)
    .then(res => {
      commit(mutationTypes.SET_AUTHENTICATED, true)
      commit(mutationTypes.SET_CONFIRMED, res.data.data.confirmed)
      commit(mutationTypes.SET_USER, res.data.data)
    })
}

export const setToken = ({ dispatch, commit }, token) => {
  if (isEmpty(token)) {
    return dispatch('checkTokenExists')
      .then(token => setHttpToken(token))
  }

  commit(mutationTypes.SET_TOKEN, token)
  setHttpToken(token)
}

export const checkTokenExists = ({ commit, dispatch }) => {
  return localforage.getItem('access_token')
    .then(token => {
      if (isEmpty(token)) {
        return Promise.reject(new Error('TOKEN_DOES_NOT_EXIST'))
      }

      commit(mutationTypes.SET_TOKEN, token)
      return Promise.resolve(token)
    })
}

export const clearAuth = ({ commit, dispatch }) => {
  commit(mutationTypes.SET_AUTHENTICATED, false)
  commit(mutationTypes.SET_CONFIRMED, false)
  commit(mutationTypes.SET_USER, null)
  commit(mutationTypes.SET_TOKEN, null)
  setHttpToken(null)
}

export const logout = ({ dispatch }) => {
  return Vue.axios.post(`${process.env.API_URL}/auth/token/revoke`)
    .then(() => dispatch('clearAuth'))
}
