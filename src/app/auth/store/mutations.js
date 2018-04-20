import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = (state, token) => {
  if (isEmpty(token)) {
    localforage.removeItem('access_token', token)
    return
  }

  localforage.setItem('access_token', token)
}

export const setAuthenticated = (state, authenticated) => {
  state.user.authenticated = authenticated
}

export const setConfirmed = (state, confirmed) => {
  state.user.confirmed = confirmed
}

export const setUser = (state, user) => {
  state.user.user = user
}
