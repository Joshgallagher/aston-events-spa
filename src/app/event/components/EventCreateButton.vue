<template>
  <router-link :to="{ name: 'event-create-start' }" id="create-event-btn" class="button is-primary is-fullwidth" v-if="authenticated">
    Create Event
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'event-create-button',

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated'
    })
  }
}
</script>
