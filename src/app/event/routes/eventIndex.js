import EventIndex from '../pages/EventIndex'

export default [
  {
    name: 'event-index',
    path: '/',
    component: EventIndex,
    meta: {
      guest: false,
      authenticated: false
    }
  }
]
