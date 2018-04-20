<template>
  <div>
    <auth-navigation :showLoginBtn=true />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <form class="column is-one-third is-offset-one-third"
            @submit.prevent="submit">
            <h1 class="title">Join Aston Events Today.</h1>
            <b-field label="Full Name"
              :type=nameHasErrors
              :message=errors.name>
              <b-input v-model="fullName" type="text"></b-input>
            </b-field>
            <b-field label="Email Address"
              :type=emailHasErrors
              :message=errors.email>
              <b-input v-model="email" type="email"></b-input>
            </b-field>
            <b-field label="Contact Number"
              :type=contactNumberHasErrors
              :message=errors.contact_number>
              <b-input v-model="contactNumber" type="tel"></b-input>
            </b-field>
            <b-field label="Password"
              :type=passwordHasErrors
              :message=errors.password>
              <b-input v-model="password" type="password" password-reveal></b-input>
            </b-field>
            <button type="submit" class="button is-primary is-medium is-fullwidth">Sign up</button>
            <p class="has-account has-text-centered">Have an account? <router-link :to="{ name: 'auth-login' }" class="has-text-link">Login</router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import authNavigation from '../components/AuthNavigation'

export default {
  name: 'auth-signup',

  components: {
    authNavigation
  },

  data () {
    return {
      fullName: null,
      email: null,
      contactNumber: null,
      password: null,
      errors: []
    }
  },

  computed: {
    nameHasErrors () {
      if (this.errors.name) return 'is-danger'
    },

    emailHasErrors () {
      if (this.errors.email) return 'is-danger'
    },

    contactNumberHasErrors () {
      if (this.errors.contact_number) return 'is-danger'
    },

    passwordHasErrors () {
      if (this.errors.password) return 'is-danger'
    }
  },

  methods: {
    ...mapActions({
      signup: 'auth/signup'
    }),

    submit () {
      this.signup({
        payload: {
          name: this.fullName,
          email: this.email,
          contact_number: this.contactNumber,
          password: this.password
        },
        context: this
      })
    }
  }
}
</script>

<style lang="sass">
.has-account
  margin: 20px 0
</style>
