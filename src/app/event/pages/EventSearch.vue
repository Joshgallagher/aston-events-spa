<template>
  <div>
    <event-navigation />
    <ais-index
      app-id="U3HD10822Y"
      api-key="93947891248ff9b0c47cf4d4170fb3ac"
      index-name="events"
      :query="this.q"
    >
      <div class="section">
        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-6 is-offset-2">
              <ais-search-box>
                <ais-input placeholder="Search for events..." class="input"></ais-input>
              </ais-search-box>
              <ais-results :results-per-page="10">
                <template slot-scope="{ result }">
                  <div class="box">
                    <div class="columns">
                      <div class="column is-10">
                        <router-link :to="{ name: 'event-show', params: { event: result.slug }}"
                          class="title is-5">
                          <ais-highlight :result="result" attribute-name="name"></ais-highlight>
                        </router-link>
                      </div>
                      <div class="column is-2 has-text-right">
                        <b-icon
                          pack="mdi"
                          icon="heart-outline"
                          size="is-small"
                          type="is-primary">
                        </b-icon>
                        <span v-text="result.favorites_count"></span>
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
                        <router-link :to="{ name: 'event-category', params: { category: result.category_slug } }"
                          v-text="result.category_name"
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
                        <span v-text="result.location"></span>
                        &middot;
                        <b-icon
                          pack="mdi"
                          icon="clock"
                          size="is-small"
                          type="is-primary">
                        </b-icon>
                        <span>{{ formatDate(result.unix_date) }} @ {{ formatTime(result.unix_time) }}</span>
                      </div>
                    </div>
                  </div>
                </template>
              </ais-results>
              <ais-no-results>
                <template slot-scope="facet">
                  No products found for <i>{{ facet.query }}</i>.
                </template>
              </ais-no-results>
            <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
              <ais-pagination>
                <template slot="previous">
                  <a class="pagination-previous">Previous</a>
                </template>
                <template slot="next" scoped-slot="{ page }">
                  <a class="pagination-next">Next</a>
                </template>
              </ais-pagination>
            </nav>
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
              <aside class="menu">
                <p class="menu-label">
                  Or Sort By Category
                </p>
                <ul class="menu-list">
                    <ais-refinement-list attribute-name="category_name" :limit=50>
                      <template slot-scope="{ value, active, count }">
                        <li>
                          <a :class="{ 'is-active' : active }">
                            <b-icon
                              pack="mdi"
                              icon="tag"
                              size="is-small"
                              type="is-primary">
                            </b-icon>
                            {{ value }} ({{ count }})
                          </a>
                        </li>
                      </template>
                    </ais-refinement-list>
                </ul>
              </aside>
              <aside class="menu">
                <p class="menu-label">
                  Or Sort By Date
                </p>
                <ul class="menu-list">
                    <ais-refinement-list attribute-name="unix_date" :limit=50>
                      <template slot-scope="{ value, active, count }">
                        <li>
                          <a :class="{ 'is-active' : active }">
                            <b-icon
                              pack="mdi"
                              icon="tag"
                              size="is-small"
                              type="is-primary">
                            </b-icon>
                            {{ formatDate(value) }} ({{ count }})
                          </a>
                        </li>
                      </template>
                    </ais-refinement-list>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </ais-index>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

import eventNavigation from '../components/EventNavigation'
import eventFilterMenu from '../components/EventFilterMenu'
import eventCategoryMenu from '../components/EventCategoryMenu'
import eventCreateButton from '../components/EventCreateButton'
import eventItem from '../components/EventItem'

export default {
  name: 'event-search',

  components: {
    eventNavigation,
    eventFilterMenu,
    eventCategoryMenu,
    eventCreateButton,
    eventItem
  },

  data () {
    return {
      q: this.$route.query.query
    }
  },

  computed: {
    ...mapGetters({
      event: 'event/event',
      authenticated: 'auth/authenticated',
      confirmed: 'auth/confirmed',
      user: 'auth/user'
    })
  },

  methods: {
    formatDate (date) {
      return moment(parseInt(date * 1000)).format('Do MMMM')
    },
    formatTime (time) {
      return moment(parseInt(time * 1000)).format('h:mm A')
    }
  }
}
</script>

<style lang="sass">
.ais-highlight > em
  background-color: yellow
  font-style: normal

.ais-input
  margin-bottom: 20px

.ais-no-results
  text-align: center

.ais-refinement-list__checkbox
  display: none

.menu-list li a.is-active span i
  color: white

.pagination
  margin-top: 20px
  .ais-pagination
    display: contents
    .ais-pagination__item:not(.ais-pagination__item--next):not(.ais-pagination__item--previous)
      display: none
</style>
