<template>
  <a :class="classes"
    @click.prevent="toggle"
    v-if="authenticated"
  >
    <b-icon
      pack="mdi"
      icon="heart"
      size="is-small"
      type="is-primary">
    </b-icon>
    <span v-text="favoritesCount"></span>
  </a>
  <span v-else>
    <b-icon
      pack="mdi"
      icon="heart-outline"
      size="is-small"
      type="is-primary">
    </b-icon>
    <span v-text="favoritesCount"></span>
  </span>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

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
    ...mapGetters({
      authenticated: 'auth/authenticated'
    }),
    classes () {
      return ['button', 'is-primary', 'is-outlined', this.isFavorited ? 'is-active' : '']
    }
  },

  methods: {
    toggle () {
      if (this.authenticated) {
        if (this.isFavorited) {
          return Vue.axios.delete(`${process.env.API_URL}/events/${this.event.slug}/favorites`)
            .then(() => {
              this.isFavorited = false
              this.favoritesCount--
            })
        } else {
          return Vue.axios.post(`${process.env.API_URL}/events/${this.event.slug}/favorites`)
            .then(() => {
              this.isFavorited = true
              this.favoritesCount++
            })
        }
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
