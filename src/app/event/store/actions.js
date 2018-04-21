import Vue from 'vue'
import * as mutationTypes from './mutationTypes'

export const getEvents = ({ dispatch, commit }, page = 1) => {
  return Vue.axios.get('http://aston-events-api.test/api/v1/events', {
    params: {
      page
    }
  }).then((res) => {
    commit(mutationTypes.SET_EVENTS_DATA, res.data.data)
    commit(mutationTypes.SET_EVENTS_LINKS, res.data.links)
    commit(mutationTypes.SET_EVENTS_META, res.data.meta)
  })
}