import authLogin from './routes/authLogin'
import authSignup from './routes/authSignup'
import authConfirmEmail from './routes/authConfirmEmail'

export default [
  ...authConfirmEmail,
  ...authLogin,
  ...authSignup
]
