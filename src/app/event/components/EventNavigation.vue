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
        <template v-if="!authenticated">
          <div class="navbar-item">
            <router-link :to="{ name: 'event-index' }"
              class="button is-link is-inverted is-outlined"
            >
              Events
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link :to="{ name: 'auth-login' }"
              class="button is-link"
              >Log in
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link :to="{ name: 'auth-signup' }"
              class="button is-link"
              >Sign up
            </router-link>
          </div>
        </template>
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
    }
  }
}
</script>

<style lang="sass">
.navbar-container
  flex-direction: row
  justify-content: space-between

.navbar-end-container
  align-items: center
</style>
