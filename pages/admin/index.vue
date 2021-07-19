<template>
  <div>
    <admin-main @submit="submitPost"> </admin-main>
  </div>
</template>

<script>
import AdminMain from '../../components/views/admin/AdminMain.vue'
import axios from 'axios'

export default {
  components: {
    AdminMain
  },
  methods: {
    // ...mapAction("store", []),
    submitPost(postData) {
      console.log(postData, 'parent')
      axios
        .post(
          'https://news-app-nuxt-80b8e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
          postData
        )
        .then(result => console.log(result))
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
