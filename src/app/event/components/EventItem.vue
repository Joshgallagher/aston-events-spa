<template>
  <div class="box">
    <div class="columns">
      <div class="column is-10">
        <router-link :to="{ name: 'event-show', params: { event: event.slug }}"
          class="title is-5">
          <span class="is-7 has-text-primary has-text-weight-normal">{{ event.organiser.name }} organised</span>
          {{ event.name }}
        </router-link>
      </div>
      <div class="column is-2 has-text-right">
        <b-icon
          pack="mdi"
          :icon="isFavorited"
          size="is-small"
          type="is-primary">
        </b-icon>
        <span v-text="event.favorites_count"></span>
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
    <div class="columns" v-if="authenticated && confirmed && owns">
      <div class="column">
        <router-link class="button is-primary"
          :to="{ name: 'event-update', params: { event: event.slug } }"
        >
        Edit
      </router-link>
        <button class="button is-danger" @click.prevent="destroyEvent">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'event-item',

  props: ['event'],

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      confirmed: 'auth/confirmed',
      user: 'auth/user'
    }),
    owns () {
      return this.user.id === this.event.organiser.id
    },
    isFavorited () {
      return this.event.favorited ? 'heart' : 'heart-outline'
    },

    dateTime () {
      return `${this.event.date} ${this.event.time}`
    },

    momentDate () {
      return moment(this.dateTime).format('dddd Do MMMM')
    },

    momentTime () {
      return moment(this.dateTime).format('h:mm A')
    }
  },

  methods: {
    ...mapActions({
      deleteEvent: 'event/deleteEvent'
    }),
    destroyEvent () {
      if (confirm(`Are you sure you want to delete ${this.event.name}`)) {
        this.deleteEvent(this.event.slug)
      }
    }
  }
}
</script>

<style lang="sass">
</style>
