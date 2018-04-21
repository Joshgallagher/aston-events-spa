import store from '@/store'

const canNavigateMiddleware = (to, from, next) => {
  store.dispatch('auth/checkTokenExists')
    .then(() => {
      if (to.meta.guest) {
        next({ name: 'event-index' })
      }

      next()
    })
    .catch(() => {
      if (to.meta.authenticated) {
        next({ name: 'auth-login' })
      }

      next()
    })
}

export default canNavigateMiddleware
