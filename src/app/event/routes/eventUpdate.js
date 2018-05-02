import EventUpdate from '../pages/EventUpdate'

export default [
  {
    name: 'event-update',
    path: '/event/update/:event',
    component: EventUpdate,
    meta: {
      guest: false,
      authenticated: true,
      confirmed: true
    }
  }
]
