<template>
  <div>
    <div>
      <app-control-input v-model="news.title">Title</app-control-input>
      <app-control-input v-model="news.author">Author</app-control-input>
      <app-control-input v-model="news.thumbnail">Thumbnail</app-control-input>
      <app-control-input v-model="news.description" control-type="textarea">
        Description
      </app-control-input>

      <app-button @click="onSubmit" btn-Style="bg-green-300">{{
        articleData.author ? 'edit' : 'save'
      }}</app-button>

      <app-button @click="onCancel" btn-style="cancel">cancel</app-button>
    </div>
  </div>
</template>

<script>
// import AppControlInput from '../../Forms/AppControlInput.vue'
// import AppButton from '../../UI/AppButton/AppButton.vue'

export default {
  // components: { AppControlInput, AppButton },
  props: {
    articleData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      news: {
        title: '',
        author: '',
        thumbnail: '',
        description: ''
      }
    }
  },
  watch: {
    articleData(val) {
      this.news = val
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.news)
    },
    onCancel() {
      this.news = { title: '', author: '', thumbnail: '', description: '' }
    }
  }
}
</script>

<style lang="scss" scoped></style>
