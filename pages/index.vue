<template>
  <div class="flex flex-wrap">
    <card
      v-for="(article, index) in articles"
      :key="index"
      :news="article"
    ></card>
  </div>
</template>

<script>
import Card from '../components/News/Card.vue'

export default {
  components: { Card },
  computed: {
    articles() {
      return this.$store.state.news
    }
  },

  created() {
    console.log(process.env.BASE_URL)
  }
}
</script>
