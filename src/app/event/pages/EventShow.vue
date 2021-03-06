<template>
  <div>
    <event-navigation />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-6 is-offset-2">
            <div class="box">
              <global-carousel v-if="event.media.length">
                <img v-for="media in event.media" :key="media.id" :data-flickity-lazyload="media.media_url">
              </global-carousel>
              <div class="columns">
                <div class="column is-9">
                  <h1 class="title is-4" v-text="event.name"></h1>
                  <p class="has-text-grey has-text-weight-normal">Organised by <a :href="mailTo">{{ event.organiser.name }}</a></p>
                </div>
                <div class="column is-3 has-text-right">
                  <event-favorite-button :event="event"></event-favorite-button>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-icon
                    pack="mdi"
                    icon="tag"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  Posted in
                  <router-link :to="{ name: 'event-category', params: { category: event.category.slug } }"
                    v-text="event.category.name"
                  >
                  </router-link>
                </div>
              </div>
              <div class="columns" v-if="event.related_event">
                <div class="column">
                  <b-icon
                    pack="mdi"
                    icon="link-variant"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  Related to
                  <router-link :to="{ name: 'event-show', params: { event: event.related_event.slug } }"
                    v-text="event.related_event.name"
                  >
                  </router-link>
                </div>
              </div>
              <div class="columns">
                <div class="date-column column">
                  <b-icon
                    pack="mdi"
                    icon="map-marker-outline"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  <span v-text="event.location"></span>
                  &middot;
                  <b-icon
                    pack="mdi"
                    icon="clock"
                    size="is-small"
                    type="is-primary">
                  </b-icon>
                  <span>{{ momentDate }} @ {{ momentTime }}</span>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="content" v-html="event.description"></div>
                </div>
              </div>
            </div>
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
import store from '@/store'
import moment from 'moment'

import eventNavigation from '../components/EventNavigation'
import eventFilterMenu from '../components/EventFilterMenu'
import eventCategoryMenu from '../components/EventCategoryMenu'
import globalCarousel from '../../global/components/GlobalCarousel'
import eventFavoriteButton from '../components/EventFavoriteButton'
import eventCreateButton from '../components/EventCreateButton'

export default {
  name: 'event-show',

  components: {
    eventNavigation,
    eventFilterMenu,
    eventCategoryMenu,
    globalCarousel,
    eventFavoriteButton,
    eventCreateButton
  },

  beforeRouteEnter (to, from, next) {
    store.dispatch('auth/setToken')
      .then(() => {
        store.dispatch('event/getEvent', to.params.event)
          .then(() => next())
      })
      .catch(() => {
        store.dispatch('event/getEvent', to.params.event)
          .then(() => next())
      })
  },

  beforeRouteUpdate (to, from, next) {
    store.dispatch('auth/setToken')
      .then(() => {
        store.dispatch('event/getEvent', to.params.event)
          .then(() => next())
      })
      .catch(() => {
        store.dispatch('event/getEvent', to.params.event)
          .then(() => next())
      })
  },

  computed: {
    ...mapGetters({
      event: 'event/event',
      authenticated: 'auth/authenticated',
      confirmed: 'auth/confirmed',
      user: 'auth/user'
    }),

    dateTime () {
      return `${this.event.date} ${this.event.time}`
    },

    momentDate () {
      return moment(this.dateTime).format('dddd Do MMMM')
    },

    momentTime () {
      return moment(this.dateTime).format('h:mm A')
    },

    mailTo () {
      return `mailto:${this.event.organiser.email}`
    }
  },

  methods: {
    ...mapActions({
      getEvent: 'event/getEvent'
    })
  }
}
</script>
