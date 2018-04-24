<template>
  <a :class="classes"
    @click.prevent="toggle"
  >
    <b-icon
      pack="mdi"
      icon="heart"
      size="is-small"
      type="is-primary">
    </b-icon>
    <span v-text="favoritesCount"></span>
  </a>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'event-favorite-button',

  props: [
    'event'
  ],

  data () {
    return {
      favoritesCount: this.event.favorites_count,
      isFavorited: this.event.favorited
    }
  },

  computed: {
    classes () {
      return ['button', 'is-primary', 'is-outlined', this.isFavorited ? 'is-active' : '']
    }
  },

  methods: {
    toggle () {
      if (this.isFavorited) {
        return Vue.axios.delete(`http://aston-events-api.test/api/v1/events/${this.event.slug}/favorites`)
          .then(() => {
            this.isFavorited = false
            this.favoritesCount--
          })
      } else {
        return Vue.axios.post(`http://aston-events-api.test/api/v1/events/${this.event.slug}/favorites`)
          .then(() => {
            this.isFavorited = true
            this.favoritesCount++
          })
      }
    }
  }
}
</script>

<style lang="sass">
.button
  &:hover i
    color: white

.is-active
  background: #7957d5 !important
  border-color: transparent !important
  color: #fff !important
  i
    color: white
</style>
