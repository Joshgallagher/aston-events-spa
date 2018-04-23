<template>
  <aside class="menu">
    <p class="menu-label">
      Or Pick a Category
    </p>
    <ul class="menu-list">
      <li v-for="category in categories"
        :key="category.id"
      >
        <router-link :to="{ name: 'event-category', params: { category: category.slug } }"
          :class="{ 'is-active': selectedCategory === category.slug }"
        >
          <b-icon
            pack="mdi"
            icon="tag"
            size="is-small"
            type="is-primary">
          </b-icon>
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'event-category-menu',

  mounted () {
    this.getCategories()

    this.selectedCategory = this.$route.params.category
  },

  data () {
    return {
      selectedCategory: null
    }
  },

  watch: {
    '$route.params.category': {
      handler (category) {
        this.selectedCategory = category
      }
    }
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
