<template>
  <div class="flex flex-col items-center align-center">
    <about-header></about-header>
    <about-body :news="news"></about-body>
    <about-footer></about-footer>
  </div>
</template>

<script>
import AboutBody from './components/AboutBody.vue'
import AboutFooter from './components/AboutFooter.vue'
import AboutHeader from './components/AboutHeader.vue'

export default {
  components: { AboutBody, AboutHeader, AboutFooter },
  props: {
    news: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped></style>
