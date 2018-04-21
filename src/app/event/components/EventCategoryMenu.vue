<template>
  <aside class="menu">
    <p class="menu-label">
      Or Pick a Category
    </p>
    <ul class="menu-list">
      <li>
        <a>
          <b-icon
            pack="mdi"
            icon="tag"
            size="is-small"
            type="is-primary">
          </b-icon>
          Sport
        </a>
      </li>
      <li>
        <a>
          <b-icon
            pack="mdi"
            icon="tag"
            size="is-small"
            type="is-primary">
          </b-icon>
          Culture
        </a>
      </li>
      <li>
        <a>
          <b-icon
            pack="mdi"
            icon="tag"
            size="is-small"
            type="is-primary">
          </b-icon>
          Other
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
</style>
