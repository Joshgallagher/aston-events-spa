<template>
  <aside class="menu">
    <p class="menu-label">
      Or Pick a Category
    </p>
    <ul class="menu-list">
      <li v-for="category in categories"
        :key="category.id"
      >
        <a>
          <b-icon
            pack="mdi"
            icon="tag"
            size="is-small"
            type="is-primary">
          </b-icon>
          {{ category.name }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'global-menu',

  mounted () {
    this.getCategories()
  },

  computed: {
    ...mapGetters({
      categories: 'categories',
      authenticated: 'auth/authenticated'
    })
  },

  methods: {
    ...mapActions({
      getCategories: 'getCategories'
    })
  }
}
</script>

<style lang="sass">
</style>
