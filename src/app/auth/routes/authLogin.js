import AuthLogin from '../pages/AuthLogin'

export default [
  {
    name: 'auth-login',
    path: '/login',
    component: AuthLogin,
    meta: {
      guest: true,
      authenticated: false
    }
  }
]
