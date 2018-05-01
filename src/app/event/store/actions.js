import Vue from 'vue'
import * as mutationTypes from './mutationTypes'

export const getEvent = ({ dispatch, commit }, event) => {
  return Vue.axios.get(`http://aston-events-api.test/api/v1/events/${event}`)
    .then((res) => {
      commit(mutationTypes.SET_EVENT, res.data.data)
    })
}

export const createEvent = ({ dispatch, commit }, payload) => {
  return Vue.axios.post('http://aston-events-api.test/api/v1/events', payload)
}

export const deleteEvent = ({ dispatch, commit }, slug) => {
  return Vue.axios.delete(`http://aston-events-api.test/api/v1/events/${slug}`)
    .then(() => {
      commit(mutationTypes.DELETE_EVENT, slug)
    })
}

export const getEvents = ({ dispatch, commit }, { filter = {}, page = 1 }) => {
  return Vue.axios.get('http://aston-events-api.test/api/v1/events', {
    params: {
      ...filter,
      page
    }
  }).then((res) => {
    commit(mutationTypes.SET_EVENTS_DATA, res.data.data)
    commit(mutationTypes.SET_EVENTS_LINKS, res.data.links)
    commit(mutationTypes.SET_EVENTS_META, res.data.meta)
  })
}

export const getCategoryEvents = ({ dispatch, commit }, { category, page = 1 }) => {
  return Vue.axios.get(`http://aston-events-api.test/api/v1/categories/${category}`, {
    params: {
      page
    }
  }).then((res) => {
    commit(mutationTypes.SET_EVENTS_DATA, res.data.data)
    commit(mutationTypes.SET_EVENTS_LINKS, res.data.links)
    commit(mutationTypes.SET_EVENTS_META, res.data.meta)
  })
}
