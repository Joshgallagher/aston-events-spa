<template>
  <div>
    <event-navigation />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-6 is-offset-2">
            <div class="box">
              <h2 class="is-size-4 has-text-weight-semibold">Update Event</h2>

              <vue-dropzone ref="myVueDropzone"
                id="dropzone"
                :destroyDropzone="false"
                :options="dropzoneOptions"
                @vdropzone-success="dropSuccess"
                @vdropzone-removed-file="dropRemoveFile"
                @vdropzone-mounted="dropPopulateDropzone"
              >
              </vue-dropzone>

              <b-field label="Name"
                :type="nameHasErrors"
                :message="errors.name">
                <b-input placeholder="Your event name..." v-model="name"></b-input>
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
                  <option :value="null">No related event</option>
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

              <b-field label="Description"
                :type="descriptionHasErrors"
                :message="errors.description">
                <event-wysiwyg v-model="description"></event-wysiwyg>
              </b-field>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link" @click.prevent="update">Update</button>
                </div>
                <div class="control">
                  <router-link class="button is-text" :to="{ name: 'event-index' }">Cancel</router-link>
                </div>
              </div>

            </div>
          </div>
          <div class="column is-2">
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
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import store from '@/store'
import moment from 'moment'
import { isEmpty } from 'lodash'

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'

import eventNavigation from '../components/EventNavigation'
import eventFilterMenu from '../components/EventFilterMenu'
import eventCategoryMenu from '../components/EventCategoryMenu'
import eventWysiwyg from '../components/EventWysiwyg'

export default {
  name: 'event-update',

  components: {
    eventNavigation,
    eventFilterMenu,
    eventCategoryMenu,
    eventWysiwyg,
    vueDropzone: vue2Dropzone
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

  mounted () {
    this.getEventsWithoutPagination()
  },

  data () {
    let hasRelatedEvent = this.$store.getters['event/event'].related_event
      ? this.$store.getters['event/event'].related_event.id
      : null

    return {
      name: this.$store.getters['event/event'].name || '',
      related_event_id: hasRelatedEvent,
      location: this.$store.getters['event/event'].location || '',
      description: this.$store.getters['event/event'].description || '',
      date: new Date(this.$store.getters['event/event'].date) || new Date(),
      time: new Date(`${this.$store.getters['event/event'].date} ${this.$store.getters['event/event'].time}`) || new Date(),
      errors: [],
      event: this.$route.params.event,
      dropzoneOptions: {
        url: `http://aston-events-api.test/api/v1/events/${this.$route.params.event}/media`,
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        paramName: 'image',
        addRemoveLinks: true,
        acceptedFiles: 'image/png,image/jpeg,image/bmp',
        headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${this.$store.getters['auth/accessToken']}` }
      }
    }
  },

  computed: {
    ...mapGetters({
      eventData: 'event/event',
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
    },
    descriptionHasErrors () {
      if (this.errors.description) return 'is-danger'
    }
  },

  methods: {
    ...mapActions({
      getEventsWithoutPagination: 'getEvents',
      updateEvent: 'event/updateEvent'
    }),
    update () {
      this.updateEvent({
        slug: this.eventData.slug,
        payload: {
          name: this.name,
          related_event_id: this.related_event_id,
          location: this.location,
          description: this.description,
          time: this.formattedTime,
          date: this.formattedDate
        }
      }).then(res => {
        this.$router.replace({ name: 'event-show', params: { event: this.eventData.slug } })
      }).catch((err) => (this.errors = err.response.data.errors))
    },
    dropSuccess (file, res) {
      file.id = res.data.id
    },
    dropRemoveFile (file, err, xhr) {
      return Vue.axios.delete(`http://aston-events-api.test/api/v1/events/media/${file.id}`)
    },
    dropPopulateDropzone () {
      let files = this.eventData.media

      if (!isEmpty(files)) {
        files.forEach(file => {
          this.$refs.myVueDropzone.manuallyAddFile({
            id: file.id,
            size: file.size,
            type: file.mime_type
          }, file.media_url)
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#dropzone
  margin: 20px 0
</style>
