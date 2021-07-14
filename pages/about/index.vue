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
  props: {
    news: {
      type: Array,
      default: () => []
    }
  },
  // data() {
  //   return {
  //     articles: []
  //   }
  // },
  async asyncData() {
    return { articles: await topHeadlines() }
  }
  // async fetch() {
  //   return (this.articles = await topHeadlines())
  // }
}
</script>

<style lang="scss" scoped></style>
