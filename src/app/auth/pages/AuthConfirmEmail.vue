<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'auth-confirm-email',

  mounted () {
    let token =  this.$route.query.token

    this.confirm(token)
      .then(() => console.log('good'))
      .catch(() => console.log('bad'))
  },

  methods: {
    ...mapActions({
      confirm: 'auth/confirmEmail'
    })
  }
}
</script>

<style></style>
