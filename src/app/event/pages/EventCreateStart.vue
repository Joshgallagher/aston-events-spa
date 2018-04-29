<template>
  <div>
    <event-navigation />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-6 is-offset-2">
            <div class="box">
              <h2 class="is-size-4 has-text-weight-semibold">Create Event: Step 1</h2>
              <p class="create-info-p is-size-6">Here you can add all the general information about your event. <span class="has-text-weight-semibold">Don't worry, you will have a chance to upload pictures next!</span></p>
              <b-field label="Name"
                :type="nameHasErrors"
                :message="errors.name">
                <b-input placeholder="Your event name..." v-model="name"></b-input>
              </b-field>

              <b-field label="Category"
                :type="categoryHasErrors"
                :message="errors.category_id">
                <b-select placeholder="Select a category" v-model="category_id">
                  <option v-for="category in categories" :key="category.id" :value="category.id" v-text="category.name"></option>
                </b-select>
              </b-field>

              <b-field grouped>
                <b-field label="Date"
                  expanded
                  :type="dateHasErrors"
                  :message="errors.date">
                  <b-datepicker
                    v-model="date"
                    placeholder="Click to select a date..."
                    icon="calendar-today">
                  </b-datepicker>
                </b-field>

                <b-field label="Time"
                  expanded
                  :type="timeHasErrors"
                  :message="errors.time">
                  <b-timepicker v-model="time"
                    placeholder="Click to select a time...">

                    <button class="button is-primary"
                      @click="time = new Date()">
                      <b-icon icon="clock"></b-icon>
                      <span>Now</span>
                    </button>

                    <button class="button is-danger"
                      @click="time = null">
                      <b-icon icon="close"></b-icon>
                      <span>Clear</span>
                    </button>
                  </b-timepicker>
                </b-field>
              </b-field>

              <b-field label="Related Event (not required)"
                :type="relatedEventHasErrors"
                :message="errors.related_event_id">
                <b-select placeholder="Select a related event" v-model="related_event_id">
                  <option v-for="event in relatedEvents" :key="event.id" :value="event.id">
                    {{ event.name }} by {{ event.organiser.name }}
                  </option>
                </b-select>
              </b-field>

              <b-field label="Location"
                :type="locationHasErrors"
                :message="errors.location">
                <b-input placeholder="Your event location..." v-model="location"></b-input>
              </b-field>

              <b-field label="Description">
                <div>ijijijij</div>
                <b-input type="textarea" v-model="description"></b-input>
              </b-field>

              <b-field>
                  <p class="control">
                      <button class="button is-primary" @click.prevent="create">
                        Next step
                      </button>
                  </p>
              </b-field>

            </div>
          </div>
          <div class="column is-2">
            <event-filter-menu>
              <li>
                <router-link :to="{ name: 'event-index', query: { all: 0 } }">
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
import moment from 'moment'

import eventItem from '../components/EventItem'
import eventNavigation from '../components/EventNavigation'
import eventFilterMenu from '../components/EventFilterMenu'
import eventCategoryMenu from '../components/EventCategoryMenu'
import eventPagination from '../components/EventPagination'

export default {
  name: 'event-create-start',

  components: {
    eventItem,
    eventNavigation,
    eventFilterMenu,
    eventCategoryMenu,
    eventPagination
  },

  mounted () {
    this.getEventsWithoutPagination()
  },

  data () {
    return {
      name: null,
      category_id: null,
      related_event_id: null,
      location: null,
      description: null,
      date: new Date(),
      time: new Date(),
      errors: []
    }
  },

  computed: {
    ...mapGetters({
      categories: 'categories',
      relatedEvents: 'events',
      authenticated: 'auth/authenticated',
      confirmed: 'auth/confirmed',
      user: 'auth/user'
    }),
    formattedDate () {
      return moment(this.date).format('YYYY-MM-DD')
    },
    formattedTime () {
      return moment(this.date).format('hh:mm:ss')
    },
    nameHasErrors () {
      if (this.errors.name) return 'is-danger'
    },
    categoryHasErrors () {
      if (this.errors.category_id) return 'is-danger'
    },
    dateHasErrors () {
      if (this.errors.date) return 'is-danger'
    },
    timeHasErrors () {
      if (this.errors.time) return 'is-danger'
    },
    relatedEventHasErrors () {
      if (this.errors.related_event_id) return 'is-danger'
    },
    locationHasErrors () {
      if (this.errors.location) return 'is-danger'
    }
  },

  methods: {
    ...mapActions({
      createEvent: 'event/createEvent',
      getCategories: 'getCategories',
      getEventsWithoutPagination: 'getEvents'
    }),
    create () {
      this.createEvent({
        name: this.name,
        category_id: this.category_id,
        related_event_id: this.related_event_id,
        location: this.location,
        description: this.description,
        time: this.formattedTime,
        date: this.formattedDate
      }).then(() => {

      }).catch((err) => (this.errors = err.response.data.errors))
    }
  }
}
</script>

<style lang="sass">
.create-info-p
  margin: 20px 0
</style>
