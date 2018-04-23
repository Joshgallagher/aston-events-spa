import EventShow from '../pages/EventShow'

export default [
  {
    name: 'event-show',
    path: '/event/:event',
    component: EventShow,
    meta: {
      guest: false,
      authenticated: false
    }
  }
]
