<template>
  <div>
    <input id="trix" type="hidden">
    <trix-editor ref="trix" input="trix" @input="updateWysiwyg()"></trix-editor>
  </div>
</template>

<script>
// eslint-disable-next-line
import Trix from 'trix'
import 'trix/dist/trix.css'

export default {
  name: 'event-wysiwyg',

  methods: {
    updateWysiwyg () {
      this.$emit('input', this.$refs.trix.value)
    }
  }
}
</script>
