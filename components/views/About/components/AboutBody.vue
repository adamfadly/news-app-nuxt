<template>
  <div class="flex flex-wrap">
    <card v-for="(article, index) in news" :key="index" :news="article"></card>
  </div>
</template>

<script>
import Card from '~/components/News/Card.vue'
export default {
  components: { Card },
  props: {
    news: {
      type: Array,
      default: () => []
    }
  }
}
</script>
