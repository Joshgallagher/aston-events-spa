<template>
  <aside class="menu">
    <p class="menu-label">
      Choose a Filter
    </p>
    <ul class="menu-list">
      <li>
        <a :class="{ 'is-active': selectedFilter.all }" @click.prevent="applyFilter('all', 1)">
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
        <a :class="{ 'is-active': selectedFilter.my }" @click.prevent="applyFilter('my', 1)">
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
        <a :class="{ 'is-active': selectedFilter.favorited }" @click.prevent="applyFilter('favorited', 1)">
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
        <a :class="{ 'is-active': selectedFilter.popular }" @click.prevent="applyFilter('popular', 1)">
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
        <a :class="{ 'is-active': selectedFilter.today }"
          @click.prevent="applyFilter('today', 1)"
        >
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
import { isEmpty, omit } from 'lodash'

export default {
  name: 'global-menu',

  data () {
    return {
      selectedFilter: omit(this.$route.query, ['page'])
    }
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated'
    })
  },

  methods: {
    applyFilter (key = null, value = null) {
      this.selectedFilter = Object.assign({}, {}, { [key]: value })

      this.$router.replace({
        query: {
          ...this.selectedFilter,
          page: 1
        }
      })
    }
  }
}
</script>

<style lang="sass">
.menu
  padding-bottom: 12px

.menu-list > li > a.is-active > span > i
  color: white
</style>
