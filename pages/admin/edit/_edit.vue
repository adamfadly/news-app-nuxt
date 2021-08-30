<template>
  <div>
    <edit-article :articleData="news" @submit="onEditPost"> </edit-article>
  </div>
</template>

<script>
import axios from 'axios'
import EditArticle from '../../../components/views/admin/EditArticle/EditArticle.vue'

export default {
  middleware: 'auth',
  components: {
    EditArticle
  },
  data() {
    return {
      news: {}
    }
  },
  methods: {
    onEditPost(editedPost) {
      const id = this.$route.params.edit
      axios
        .patch(
          `https://news-app-nuxt-80b8e-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`,
          editedPost
        )
        .then(this.$router.push('/'))
        .catch(error => console.log(error))
    }
  },

  async fetch() {
    const id = this.$route.params.edit
    if (id) {
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
}
</script>
