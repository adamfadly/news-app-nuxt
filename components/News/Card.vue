<template>
  <div class="p-10">
    <nuxt-link :to="'/news/' + news.id">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="news.thumbnail" :alt="news.title" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ news.title }}</div>
          <div class="font-bold text-xl mb-2">
            {{ news.publishAt | date }}
          </div>
          <p class="text-gray-700 text-base ">
            {{ news.description }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
