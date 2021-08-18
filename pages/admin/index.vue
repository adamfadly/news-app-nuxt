<template>
  <div>
    <admin-main :articleData="news" @submit="submitPost"> </admin-main>
  </div>
</template>

<script>
import AdminMain from '../../components/views/admin/AdminMain.vue'
import axios from 'axios'

export default {
  components: {
    AdminMain
  },
  middleware: 'device',
  data() {
    return {
      news: {}
    }
  },
  methods: {
    submitPost(postData) {
      axios
        .post(
          'https://news-app-nuxt-80b8e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
          postData
        )
        .then(this.$router.push('/'))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style
  lang="scss
AdminMain"
  scoped
></style>
