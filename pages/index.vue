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

export default {
  components: { Card },

  methods: {},
  computed: {
    articles() {
      return this.$store.state.news
    }
  }
}
</script>
