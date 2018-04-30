import EventCreate from '../pages/EventCreate'

export default [
  {
    name: 'event-create',
    path: '/event/create',
    component: EventCreate,
    meta: {
      guest: false,
      authenticated: true,
      confirmed: true
    }
  }
]
