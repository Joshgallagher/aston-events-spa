import EventCreateFinish from '../pages/EventCreateFinish'

export default [
  {
    name: 'event-create-finish',
    path: '/event/create/finish',
    component: EventCreateFinish,
    meta: {
      guest: false,
      authenticated: true,
      confirmed: true
    }
  }
]
