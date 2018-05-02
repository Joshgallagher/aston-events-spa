<template>
  <b-field grouped>
    <b-input ref="search"
      placeholder="Search for events..."
      v-model="query"
      @keyup.native.enter="search"
      expanded
    >
    </b-input>
    <p class="control">
      <button class="button is-primary"
        @click.prevent="search"
      >
        Search
      </button>
    </p>
    <p class="control">
      <router-link class="button"
        :to="{ name: 'event-search' }"
      >
        Advanced Search
      </router-link>
    </p>
  </b-field>
</template>

<script>
export default {
  name: 'event-search-box',

  data () {
    return {
      query: ''
    }
  },

  methods: {
    search (e) {
      this.$router.replace({ name: 'event-search', query: { query: this.query } })
    }
  }
}
</script>
