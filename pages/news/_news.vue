<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <div class="font-bold text-4xl">{{ news.title }}</div>
      <img class="w-full px-40 mt-10" :src="news.thumbnail" :alt="news.title" />
      <div class="pt-10 px-10">
        {{ news.description }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      news: {}
    }
  },

  async fetch() {
    const id = this.$route.params.news
    await axios
      .get(
        'https://news-app-nuxt-80b8e-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' +
          id +
          '.json'
      )
      .then(response => {
        this.news = response.data
      })
      .catch(e => console.log(e))
  }
}
</script>

<style lang="scss" scoped></style>
