import * as mutationTypes from './mutationTypes'
import localforage from 'localforage'
import { isEmpty } from 'lodash'

export default {
  [mutationTypes.SET_TOKEN] (state, token) {
    if (isEmpty(token)) {
      state.user.accessToken = null
      localforage.removeItem('access_token', token)
      return
    }

    state.user.accessToken = token
    localforage.setItem('access_token', token)
  },

  [mutationTypes.SET_AUTHENTICATED] (state, authenticated) {
    state.user.authenticated = authenticated
  },

  [mutationTypes.SET_CONFIRMED] (state, confirmed) {
    state.user.confirmed = confirmed
  },

  [mutationTypes.SET_USER] (state, user) {
    state.user.data = user
  }
}
