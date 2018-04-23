<template>
  <div>
    <event-navigation />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-6 is-offset-2">
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
            <event-filter-menu>
              <li>
                <router-link :to="{ name: 'event-index', query: { all: 1 } }">
                  <b-icon
                    pack="mdi"
                    icon="chart-bubble"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  All Events
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'event-index', query: { my: 1 } }">
                  <b-icon
                    pack="mdi"
                    icon="calendar"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  My Events
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'event-index', query: { favorited: 1 } }">
                  <b-icon
                    pack="mdi"
                    icon="heart"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  My Favorites
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'event-index', query: { popular: 1 } }">
                  <b-icon
                    pack="mdi"
                    icon="fire"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  Popular
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'event-index', query: { today: 1 } }">
                  <b-icon
                    pack="mdi"
                    icon="chart-bubble"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  Today
                </router-link>
              </li>
            </event-filter-menu>
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
  name: 'event-category',

  components: {
    eventItem,
    eventNavigation,
    eventFilterMenu,
    eventCategoryMenu,
    eventPagination
  },

  mounted () {
    this.getCategoryEvents({
      category: this.$route.params.category
    })

    this.$eventBus.$on('pagination:switched', this.updateCategoryEvents)
  },

  watch: {
    '$route.params.category': {
      handler (category) {
        this.getCategoryEvents({
          category,
          page: 1
        })
      }
    }
  },

  computed: {
    ...mapGetters({
      eventsData: 'event/eventsData',
      eventsMeta: 'event/eventsMeta'
    })
  },

  methods: {
    ...mapActions({
      getCategoryEvents: 'event/getCategoryEvents'
    }),

    updateCategoryEvents (page) {
      this.getCategoryEvents({
        category: this.$route.params.category,
        page
      })
    }
  }
}
</script>
