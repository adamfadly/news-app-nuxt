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
import { topHeadlines } from '../services/news.services'

export default {
  components: { Card },
  data() {
    return {
      articles: []
    }
  },
  // async fetch() {
  //   return await topHeadlines()
  // }
  async mounted() {
    this.articles = await topHeadlines()
  }
  // created() {
  //   topHeadlines()
  // }
}
</script>
