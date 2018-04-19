<template>
  <div>
    <auth-navigation :showLoginBtn=true />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-one-third is-offset-one-third">
            <h1 class="title">Join Aston Events Today.</h1>
            <b-field label="Full Name">
              <b-input type="text"></b-input>
            </b-field>
            <b-field label="Email Address">
              <b-input type="email"></b-input>
            </b-field>
            <b-field label="Contact Number">
              <b-input type="tel"></b-input>
            </b-field>
            <b-field label="Password">
              <b-input type="password" password-reveal></b-input>
            </b-field>
            <a class="button is-primary is-medium is-fullwidth">Sign up</a>
            <p class="has-account has-text-centered">Have an account? <router-link :to="{ name: 'auth-login' }" class="has-text-link">Login</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authNavigation from '../components/AuthNavigation'

export default {
  name: 'auth-signup',

  components: {
    authNavigation
  }
}
</script>

<style lang="sass">
.has-account
  margin: 20px 0
</style>
