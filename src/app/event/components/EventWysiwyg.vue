<template>
  <div>
    <input id="trix" type="hidden" :value="value">
    <trix-editor ref="trix" input="trix"></trix-editor>
  </div>
</template>

<script>
// eslint-disable-next-line
import Trix from 'trix'
import 'trix/dist/trix.css'

export default {
  name: 'event-wysiwyg',

  props: {
    'value': {
      default: ''
    }
  },

  mounted () {
    this.$refs.trix.addEventListener('trix-change', event => {
      this.$emit('input', event.target.innerHTML)
    })
  }
}
</script>

<style lang="sass">
trix-editor
  min-height: 200px

.trix-button--icon-strike
  display: none

.trix-button--icon-code
  display: none
</style>
