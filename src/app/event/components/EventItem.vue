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
          type="is-danger">
        </b-icon>
        {{ favoriteCount }}
      </div>
    </div>
    <div class="columns">
      <div class="date-column column">
        <b-icon
          pack="mdi"
          icon="map-marker-outline"
          size="is-small">
        </b-icon>
        <span v-text="location"></span>
        &middot;
        <b-icon
          pack="mdi"
          icon="clock"
          size="is-small">
        </b-icon>
        <span>{{ date }} @ {{ time }}</span>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="content" v-text="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
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
    'favoriteCount': {
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
    }
  }
}
</script>

<style lang="sass">
</style>
