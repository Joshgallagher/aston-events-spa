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
          <div class="navbar-item">
            <router-link :to="{ name: 'event-index' }" class="button is-link is-inverted is-outlined">Explore</router-link>
          </div>
          <div class="navbar-item" v-if="showLoginBtn">
            <router-link :to="{ name: 'auth-login' }"
              class="button is-link"
              >Login
            </router-link>
          </div>
          <div class="navbar-item" v-else>
            <router-link :to="{ name: 'auth-signup' }"
              class="button is-link"
              >Sign up
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'auth-navigation',

  props: {
    'showLoginBtn': {
      type: Boolean,
      default: false
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
