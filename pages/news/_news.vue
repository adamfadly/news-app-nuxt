<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      {{ news.publishAt }}
      <div class="font-bold text-4xl">{{ news.title }}</div>
      <img class="w-full px-40 mt-10" :src="news.thumbnail" :alt="news.title" />
      <div class="pt-10 px-10">
        {{ news.description }}
      </div>
      <button
        @click="onEditArticle"
        class="bg-indigo-800 text-white p-4 rounded mt-5"
      >
        Edit This Article
      </button>
    </div>
    <div></div>
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
  methods: {
    onEditArticle() {
      const id = this.$route.params.news
      this.$router.push('/admin/edit/' + id)
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
