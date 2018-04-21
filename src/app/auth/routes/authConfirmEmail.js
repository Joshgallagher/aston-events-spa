import AuthConfirmEmail from '../pages/AuthConfirmEmail'

export default [
  {
    name: 'auth-confirm-email',
    path: '/confirm',
    component: AuthConfirmEmail,
    meta: {
      guest: false,
      authenticated: false
    }
  }
]
