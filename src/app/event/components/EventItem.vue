<template>
  <div class="box">
    <div class="columns">
      <div class="column is-10">
        <router-link :to="{ name: 'event-show', params: { event: slug }}"
          class="title is-5">
          <span class="is-7 has-text-primary has-text-weight-normal">{{ organiserName }} organised</span>
          {{ name }}
        </router-link>
      </div>
      <div class="column is-2 has-text-right">
        <b-icon
          pack="mdi"
          :icon="isFavorited"
          size="is-small"
          type="is-primary">
        </b-icon>
        <span v-text="favoritesCount"></span>
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
        <span v-text="location"></span>
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
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'event-item',

  props: {
    'slug': {
      type: String
    },
    'name': {
      type: String
    },
    'organiserName': {
      type: String
    },
    'favoritesCount': {
      type: Number,
      default: 0
    },
    'favorited': {
      type: Boolean,
      default: false
    },
    'location': {
      type: String
    },
    'date': {
      type: String
    },
    'time': {
      type: String
    },
    'description': {
      type: String
    }
  },

  computed: {
    isFavorited () {
      return this.favorited ? 'heart' : 'heart-outline'
    },

    dateTime () {
      return `${this.date} ${this.time}`
    },

    momentDate () {
      return moment(this.dateTime).format('dddd Do MMMM')
    },

    momentTime () {
      return moment(this.dateTime).format('h:mm A')
    }
  }
}
</script>

<style lang="sass">
</style>
