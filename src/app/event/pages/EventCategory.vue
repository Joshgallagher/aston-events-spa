<template>
  <div>
    <event-navigation />
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-6 is-offset-2">
            <h1>ijhuhoijiojio</h1>
          </div>
          <div class="column is-2">
            <event-category-menu />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventItem from '../components/EventItem'
import eventNavigation from '../components/EventNavigation'
import eventCategoryMenu from '../components/EventCategoryMenu'
import eventPagination from '../components/EventPagination'

export default {
  name: 'event-category',

  components: {
    eventItem,
    eventNavigation,
    eventCategoryMenu,
    eventPagination
  }
}
</script>
