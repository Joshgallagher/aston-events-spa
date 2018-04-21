<template>
  <div class="navbar is-primary">
    <div class="navbar-container container is-flex">
      <div class="navbar-start">
        <div class="navbar-brand">
          <router-link :to="{ name: 'event-index' }"
            class="navbar-item has-text-weight-bold"
            >Aston<span class="has-text-weight-normal">Events</span>
          </router-link>
        </div>
      </div>
      <div class="navbar-end-container navbar-end is-flex">
        <a class="navbar-item"
          v-if="authenticated"
          @click.prevent="signout">
          Log Out
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'event-navigation',

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated'
    })
  },

  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),

    signout () {
      this.logout()
        .then(() => this.$router.replace({ name: 'auth-login' }))
    }
  }
}
</script>

<style lang="sass">
</style>
