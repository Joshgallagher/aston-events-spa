<template>
  <div>
    <event-navigation />
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
              :description="event.description" />
            <event-pagination :meta="eventsMeta"></event-pagination>
          </div>
          <div class="column is-2">
            <event-filter-menu />
            <event-category-menu />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import eventItem from '../components/EventItem'
import eventNavigation from '../components/EventNavigation'
import eventFilterMenu from '../components/EventFilterMenu'
import eventCategoryMenu from '../components/EventCategoryMenu'
import eventPagination from '../components/EventPagination'

export default {
  name: 'event-index',

  components: {
    eventItem,
    eventNavigation,
    eventFilterMenu,
    eventCategoryMenu,
    eventPagination
  },

  mounted () {
    this.getEvents()

    this.$eventBus.$on('pagination:switched', this.getEvents)
  },

  computed: {
    ...mapGetters({
      eventsData: 'event/eventsData',
      eventsMeta: 'event/eventsMeta',
      confirmed: 'auth/confirmed',
      user: 'auth/user'
    })
  },

  methods: {
    ...mapActions({
      getEventsData: 'event/getEvents'
    }),

    getEvents (page = this.$route.query.page) {
      this.getEventsData(page)
    }
  }
}
</script>

<style lang="sass">
</style>
