import Vue from 'vue'

export const getEvents = ({ dispatch, commit }) => {
  return Vue.axios.get('http://aston-events-api.test/api/v1/events')
    .then((res) => {
      commit('setEventsData', res.data.data)
      commit('setEventsLinks', res.data.links)
      commit('setEventsMeta', res.data.meta)
    })
}
