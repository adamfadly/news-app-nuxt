<template>
  <div>
    <about-main :news="articles"></about-main>
  </div>
</template>

<script>
import AboutMain from '../../components/views/About/AboutMain.vue'
import { topHeadlines } from '~/services/news.services'
export default {
  components: { AboutMain },
  async asyncData() {
    return { articles: await topHeadlines() }
  }
}
</script>
