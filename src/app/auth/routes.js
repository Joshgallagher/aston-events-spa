import authLogin from './routes/authLogin'
import authSignup from './routes/authSignup'

export default [
  ...authLogin,
  ...authSignup
]
