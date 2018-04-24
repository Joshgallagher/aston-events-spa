<template>
  <div class="carousel" id="global-carousel">
    <slot></slot>
  </div>
</template>

<script>
import Flickity from 'flickity'

import 'flickity/dist/flickity.min.css'

export default {
  name: 'global-carousel',

  data () {
    return {
      flickity: {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        pageDots: false,
        autoPlay: true,
        imagesLoaded: true,
        setGallerySize: false
      }
    }
  },

  mounted () {
    // eslint-disable-next-line
    new Flickity(this.$el, this.flickity)
  }
}
</script>

<style lang="sass">
.carousel
  height: 350px
  margin-bottom: 20px
.carousel img
  height: 350px !important
</style>
