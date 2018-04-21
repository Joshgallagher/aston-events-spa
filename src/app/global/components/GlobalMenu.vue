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
      <li>
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
      <li>
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
export default {
  name: 'global-menu'
}
</script>

<style lang="sass">
</style>
