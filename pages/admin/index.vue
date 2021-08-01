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
  data() {
    return {
      news: {}
    }
  },
  methods: {
    submitPost(postData) {
      console.log(postData, 'parent')
      axios
        .post(
          'https://news-app-nuxt-80b8e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
          postData
        )
        .then(this.$router.push('/'))
        .catch(error => console.log(error))
    }
  },
  created() {
    console.log(this.$route.query.id)
  }
}
</script>

<style
  lang="scss
AdminMain"
  scoped
></style>
