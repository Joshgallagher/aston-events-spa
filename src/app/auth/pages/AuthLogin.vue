<template>
  <div>
    <auth-navigation />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <form class="column is-one-third is-offset-one-third"
            @submit.prevent="submit">
            <h1 class="title">Welcome Back.</h1>
            <b-notification type="is-danger"
              :active="errorNotification">
              Whooops! We could not sign you in with those details.
            </b-notification>
            <b-field label="Email Address"
              :type=emailHasErrors
              :message=errors.email>
              <b-input v-model="email" type="email"></b-input>
            </b-field>
            <b-field label="Password"
              :type=passwordHasErrors
              :message=errors.password>
              <b-input v-model="password" type="password" password-reveal></b-input>
            </b-field>
            <button type="submit" class="button is-primary is-medium is-fullwidth">Log in</button>
            <p class="has-account has-text-centered">Need an account? <router-link :to="{ name: 'auth-signup' }" class="has-text-link">Sign up</router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'

import authNavigation from '../components/AuthNavigation'

export default {
  name: 'auth-login',

  components: {
    authNavigation
  },

  data () {
    return {
      email: null,
      password: null,
      errors: []
    }
  },

  computed: {
    emailHasErrors () {
      if (this.errors.email) return 'is-danger'
    },

    passwordHasErrors () {
      if (this.errors.password) return 'is-danger'
    },

    errorNotification () {
      return !isEmpty(this.errors.message)
    }
  },

  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    submit () {
      this.errors = []

      this.login({
        payload: {
          email: this.email,
          password: this.password
        },
        context: this
      }).then(() => {
        this.$router.replace({ name: 'event-index' })
      })
    }
  }
}
</script>

<style lang="sass">
.has-account
  margin: 20px 0
</style>
