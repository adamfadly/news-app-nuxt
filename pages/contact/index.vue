<template>
  <div>
    <contacts-main :userInput="user"></contacts-main>
  </div>
</template>

<script>
import ContactsMain from '../../components/views/Contact/ContactMain.vue'
export default {
  components: { ContactsMain },
  data() {
    return {
      user: {
        name: 'Adam',
        email: 'adamfaada@galefg.com',
        address: 'jl Saleh  no 14'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
