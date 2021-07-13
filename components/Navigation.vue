<template>
  <div class="bg-indigo-400 flex items-center justify-around px-8">
    <div class="h-46 text-3xl font-semibold text-white">
      <nuxt-link to="/"> Mocha's</nuxt-link>
    </div>
    <div class="flex-1"></div>
    <ul class="text-white font-medium text-base flex">
      <li class="px-2">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li class="px-2">
        <nuxt-link to="/about">
          About
        </nuxt-link>
      </li>
      <li class="px-2">
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
