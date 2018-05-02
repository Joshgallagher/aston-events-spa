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
            <event-search-box></event-search-box>
            <template v-if="eventsData.length">
              <event-item v-for="event in eventsData"
                :key="event.id"
                :event="event" />
              <event-pagination :meta="eventsMeta" for="event"></event-pagination>
            </template>
            <template v-else>
              <p class="no-events has-text-centered has-text-weight-bold">No Events Found.</p>
            </template>
          </div>
          <div class="column is-2">
            <event-create-button />
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
import eventCreateButton from '../components/EventCreateButton'
import eventSearchBox from '../components/EventSearchBox'

export default {
  name: 'event-index',

  components: {
    eventItem,
    eventNavigation,
    eventFilterMenu,
    eventCategoryMenu,
    eventPagination,
    eventCreateButton,
    eventSearchBox
  },

  mounted () {
    this.getEvents()
  },

  watch: {
    '$route.query': {
      handler (query) {
        this.getEvents({
          ...query,
          page: 1
        })
      },
      deep: true
    }
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

    getEvents (filter = this.$route.query || {}, page = this.$route.query.page || 1) {
      this.getEventsData({
        filter,
        page
      })
    }
  }
}
</script>

<style lang="sass">
.no-events
  margin-top: 40px
</style>
