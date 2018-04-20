<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'auth-confirm-email',

  mounted () {
    let token = this.$route.query.token

    this.confirm({ token })
      .then(() => {
        this.$router.replace({ name: 'auth-login' })
      })
      .catch(() => {
        this.$router.replace({ name: 'auth-login' })
      })
  },

  methods: {
    ...mapActions({
      confirm: 'auth/confirmEmail'
    })
  }
}
</script>

<style></style>
