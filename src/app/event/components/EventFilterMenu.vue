<template>
  <aside class="menu">
    <p class="menu-label">
      Choose a Filter
    </p>
    <ul class="menu-list">
      <li>
        <a>
          <b-icon
            pack="mdi"
            icon="chart-bubble"
            size="is-small"
            type="is-primary">
          </b-icon>
          All Events
        </a>
      </li>
      <li v-if="authenticated">
        <a>
          <b-icon
            pack="mdi"
            icon="calendar"
            size="is-small"
            type="is-primary">
          </b-icon>
          My Events
        </a>
      </li>
      <li v-if="authenticated">
        <a>
          <b-icon
            pack="mdi"
            icon="heart"
            size="is-small"
            type="is-primary">
          </b-icon>
          My Favorites
        </a>
      </li>
      <li>
        <a>
          <b-icon
            pack="mdi"
            icon="fire"
            size="is-small"
            type="is-primary">
          </b-icon>
          Popular
        </a>
      </li>
      <li>
        <a>
          <b-icon
            pack="mdi"
            icon="calendar-check"
            size="is-small"
            type="is-primary">
          </b-icon>
          Today
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'global-menu',

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated'
    })
  }
}
</script>

<style lang="sass">
.menu
  padding-bottom: 12px
</style>
