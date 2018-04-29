import EventCreateStart from '../pages/EventCreateStart'

export default [
  {
    name: 'event-create-start',
    path: '/event/create/start',
    component: EventCreateStart,
    meta: {
      guest: false,
      authenticated: true,
      confirmed: true
    }
  }
]
