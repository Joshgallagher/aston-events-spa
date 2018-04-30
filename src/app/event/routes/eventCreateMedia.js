import EventCreateMedia from '../pages/EventCreateMedia'

export default [
  {
    name: 'event-create-media',
    path: '/event/create/:event/media',
    component: EventCreateMedia,
    meta: {
      guest: false,
      authenticated: true,
      confirmed: true
    }
  }
]
