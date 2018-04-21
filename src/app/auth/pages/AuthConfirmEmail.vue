<template>
  <div>
    <b-loading :is-full-page="true"
      :active="true"
      :canCancel="false">
    </b-loading>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  name: 'auth-confirm-email',

  mounted () {
    let token = this.$route.query.token

    if (isEmpty(token)) {
      return this.$router.replace({ name: 'event-index' })
    }

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
