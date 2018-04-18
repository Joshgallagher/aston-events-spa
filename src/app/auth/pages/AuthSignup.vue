<template>
  <div class="section">
    <div class="container is-fluid"></div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">Join Today.</h1>
        <p class="subtitle">Create, favorite and follow events happening at Aston!</p>
        <b-field label="Full Name">
          <b-input type="text"></b-input>
        </b-field>
        <b-field label="Email Address">
          <b-input type="email"></b-input>
        </b-field>
        <b-field label="Contact Number">
          <b-input type="tel" maxlength="11"></b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password"></b-input>
        </b-field>
        <a class="button is-primary is-medium is-fullwidth">Create Account</a>
        <p class="has-account has-text-centered">Have an account? <a href="#" class="has-text-link">Login</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'auth-signup'
}
</script>

<style lang="sass">
.has-account
  margin: 20px 0
</style>
