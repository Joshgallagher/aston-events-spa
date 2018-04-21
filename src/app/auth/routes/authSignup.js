import AuthSignup from '../pages/AuthSignup'

export default [
  {
    name: 'auth-signup',
    path: '/signup',
    component: AuthSignup,
    meta: {
      guest: true,
      authenticated: false
    }
  }
]
