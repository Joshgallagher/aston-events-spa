import EventCategory from '../pages/EventCategory'

export default [
  {
    name: 'event-category',
    path: '/category/:category',
    component: EventCategory,
    meta: {
      guest: false,
      authenticated: false
    }
  }
]
