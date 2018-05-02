<template>
  <div>
    <event-navigation />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-6 is-offset-2">
            <div class="box">
              <h2 class="is-size-4 has-text-weight-semibold">Create Event: Step 2</h2>
              <p class="create-info-p is-size-6">
                Here you can add any number of images to your Event. <strong>You are not required to add images</strong>.
              </p>
              <vue-dropzone ref="myVueDropzone"
                id="dropzone"
                :destroyDropzone="false"
                :options="dropzoneOptions"
                @vdropzone-success="dropSuccess"
                @vdropzone-removed-file="dropRemoveFile"
              >
              </vue-dropzone>
              <b-field>
                  <p class="control">
                      <router-link :to="{ name: 'event-show', params: { event } }"
                        class="button is-primary"
                        @click.prevent="create">
                        Create
                      </router-link>
                  </p>
              </b-field>
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
import { mapGetters } from 'vuex'

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'

import eventNavigation from '../components/EventNavigation'
import eventFilterMenu from '../components/EventFilterMenu'
import eventCategoryMenu from '../components/EventCategoryMenu'

export default {
  name: 'event-create-media',

  components: {
    eventNavigation,
    eventFilterMenu,
    eventCategoryMenu,
    vueDropzone: vue2Dropzone
  },

  data () {
    return {
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
      authenticated: 'auth/authenticated'
    })
  },

  methods: {
    dropSuccess (file, res) {
      file.id = res.data.id
    },
    dropRemoveFile (file, err, xhr) {
      return Vue.axios.delete(`http://aston-events-api.test/api/v1/events/media/${file.id}`)
    }
  }
}
</script>

<style lang="sass">
#dropzone
  margin: 20px 0
</style>
