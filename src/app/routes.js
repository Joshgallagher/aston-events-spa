import auth from './auth/routes'
import event from './event/routes'

export default [
  ...auth,
  ...event
]
