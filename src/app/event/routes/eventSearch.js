import EventSearch from '../pages/EventSearch'

export default [
  {
    name: 'event-search',
    path: '/event/search',
    component: EventSearch,
    meta: {
      guest: false,
      authenticated: false,
      confirmed: false
    }
  }
]
