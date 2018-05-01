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
              :event="event" />
            <event-pagination :meta="eventsMeta" for="category"></event-pagination>
          </div>
          <div class="column is-2">
            <event-create-button />
            <event-filter-menu>
              <li>
                <router-link :to="{ name: 'event-index', query: { paginated: 1 } }">
                  <b-icon
                    pack="mdi"
                    icon="chart-bubble"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  All Events
                </router-link>
              </li>
              <li v-if="authenticated">
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
              <li v-if="authenticated">
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
import eventCreateButton from '../components/EventCreateButton'

export default {
  name: 'event-category',

  components: {
    eventItem,
    eventNavigation,
    eventFilterMenu,
    eventCategoryMenu,
    eventPagination,
    eventCreateButton
  },

  mounted () {
    this.getCategoryEvents({
      category: this.$route.params.category
    })

    this.$eventBus.$on('pagination:switched:category', this.updateCategoryEvents)
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
      eventsMeta: 'event/eventsMeta',
      authenticated: 'auth/authenticated',
      confirmed: 'auth/confirmed',
      user: 'auth/user'
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
