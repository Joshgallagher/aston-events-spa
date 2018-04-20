<template>
  <div>
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-8">
            <b-notification type="is-warning" v-if="user" v-show="!confirmed">
              Hey <strong>{{ user.name }}</strong>! You still need to confirm your email address before you can organise events on AstonEvents!
            </b-notification>
            <div class="columns">
              <div class="column is-half">
                <event-item></event-item>
                <event-item></event-item>
                <event-item></event-item>
                <event-item></event-item>
              </div>
              <div class="column is-half">
                <event-item></event-item>
                <event-item></event-item>
                <event-item></event-item>
                <event-item></event-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import eventItem from '../components/EventItem'

export default {
  name: 'event-index',

  components: {
    eventItem
  },

  computed: {
    ...mapGetters({
      confirmed: 'auth/confirmed',
      user: 'auth/user'
    })
  }
}
</script>

<style lang="sass">
.date-column
  padding-top: 0
</style>
