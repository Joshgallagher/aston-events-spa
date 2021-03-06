import Vue from 'vue'
import * as mutationTypes from './mutationTypes'

export const getCategories = ({ dispatch, commit }) => {
  return Vue.axios.get(`${process.env.API_URL}/categories`)
    .then((res) => {
      commit(mutationTypes.SET_ALL_CATEGORIES, res.data.data)
    })
}

export const getEvents = ({ dispatch, commit }) => {
  return Vue.axios.get(`${process.env.API_URL}/events?all=1`)
    .then((res) => {
      commit(mutationTypes.SET_ALL_EVENTS, res.data.data)
    })
}
