import * as mutationTypes from './mutationTypes'

export default {
  [mutationTypes.SET_EVENTS_DATA] (state, events) {
    state.events.data = events
  },
  [mutationTypes.SET_EVENTS_LINKS] (state, links) {
    state.events.links = links
  },
  [mutationTypes.SET_EVENTS_META] (state, meta) {
    state.events.meta = meta
  }
}
