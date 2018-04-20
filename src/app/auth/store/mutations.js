import * as mutationTypes from './mutation-types'
import localforage from 'localforage'
import { isEmpty } from 'lodash'

export default {
  [mutationTypes.SET_TOKEN] (state, token) {
    if (isEmpty(token)) {
      localforage.removeItem('access_token', token)
      return
    }

    localforage.setItem('access_token', token)
  },

  [mutationTypes.SET_AUTHENTICATED] (state, authenticated) {
    state.user.authenticated = authenticated
  },

  [mutationTypes.SET_CONFIRMED] (state, confirmed) {
    state.user.confirmed = confirmed
  },

  [mutationTypes.SET_USER] (state, user) {
    state.user.user = user
  }
}
