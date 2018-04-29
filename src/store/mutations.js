import * as mutationTypes from './mutationTypes'

export default {
  [mutationTypes.SET_ALL_CATEGORIES] (state, categories) {
    state.categories = categories
  },
  [mutationTypes.SET_ALL_EVENTS] (state, events) {
    state.events = events
  }
}
