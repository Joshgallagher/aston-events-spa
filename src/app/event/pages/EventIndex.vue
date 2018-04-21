<template>
  <div>
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
          <a class="navbar-item">Log Out</a>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-6 is-offset-2">
            <b-notification type="is-warning" v-if="user" v-show="!confirmed">
              Hey <strong>{{ user.name }}</strong>! You still need to confirm your email address before you can organise events on AstonEvents!
            </b-notification>
            <event-item v-for="event in eventsData"
              :key="event.id"
              :name="event.name"
              :organiserName="event.organiser.name"
              :favoritesCount="event.favorites_count"
              :favorited="event.favorited"
              :location="event.location"
              :date="event.date"
              :time="event.time"
              :description="event.description"
              >
              </event-item>
          </div>
          <div class="column is-2">
            <global-menu></global-menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import globalMenu from '../../global/components/GlobalMenu'
import eventItem from '../components/EventItem'

export default {
  name: 'event-index',

  components: {
    globalMenu,
    eventItem
  },

  mounted () {
    this.getEvents()
  },

  computed: {
    ...mapGetters({
      eventsData: 'event/eventsData',
      confirmed: 'auth/confirmed',
      user: 'auth/user'
    })
  },

  methods: {
    ...mapActions({
      getEvents: 'event/getEvents'
    })
  }
}
</script>

<style lang="sass">
.date-column
  padding-top: 0
</style>
