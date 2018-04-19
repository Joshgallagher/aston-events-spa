<template>
  <div>
    <auth-navigation />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-one-third is-offset-one-third">
            <h1 class="title">Welcome Back.</h1>
            <b-field label="Email Address">
              <b-input type="email"></b-input>
            </b-field>
            <b-field label="Password">
              <b-input type="password" password-reveal></b-input>
            </b-field>
            <a class="button is-primary is-medium is-fullwidth">Log in</a>
            <p class="has-account has-text-centered">Need an account? <router-link :to="{ name: 'auth-signup' }" class="has-text-link">Sign up</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authNavigation from '../components/AuthNavigation'

export default {
  name: 'auth-login',

  components: {
    authNavigation
  }
}
</script>

<style lang="sass">
.has-account
  margin: 20px 0
</style>
