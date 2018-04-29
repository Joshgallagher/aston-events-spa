<template>
  <router-link :to="{ name: 'event-create-start' }" id="create-event-btn" class="button is-primary is-fullwidth">
    Create Event
  </router-link>
</template>

<script>
export default {
  name: 'event-create-button'
}
</script>
