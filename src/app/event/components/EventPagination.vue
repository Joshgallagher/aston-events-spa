<template>
  <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
    <a class="pagination-previous"
      :disabled="parseInt(meta.current_page) === 1"
      @click.prevent="switched(meta.current_page - 1)">
      Previous
    </a>
    <a class="pagination-next"
      :disabled="parseInt(meta.current_page) === parseInt(meta.last_page)"
      @click.prevent="switched(meta.current_page + 1)">
      Next
    </a>
  </nav>
</template>

<script>
export default {
  name: 'event-pagination',

  props: ['meta'],

  methods: {
    switched (page = this.queryPage) {
      if (page <= 0 || page > this.meta.last_page) return

      this.$eventBus.$emit('pagination:switched', page)

      this.$router.replace({
        query: {
          page
        }
      })
    }
  }
}
</script>
