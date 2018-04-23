import EventShow from '../pages/EventShow'

export default [
  {
    name: 'event-show',
    path: '/event/:slug',
    component: EventShow,
    meta: {
      guest: false,
      authenticated: true
    }
  }
]
