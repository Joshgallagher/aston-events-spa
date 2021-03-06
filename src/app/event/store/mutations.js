import * as mutationTypes from './mutationTypes'

export default {
  [mutationTypes.SET_EVENT] (state, event) {
    state.event = event
  },
  [mutationTypes.SET_EVENTS_DATA] (state, events) {
    state.events.data = events
  },
  [mutationTypes.SET_EVENTS_LINKS] (state, links) {
    state.events.links = links
  },
  [mutationTypes.SET_EVENTS_META] (state, meta) {
    state.events.meta = meta
  },
  [mutationTypes.DELETE_EVENT] (state, slug) {
    state.events.data = state.events.data.filter(event => event.slug !== slug)
  }
}
