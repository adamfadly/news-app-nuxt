<template>
  <div>
    <div>
      {{ user }}
      <app-control-input v-model="user.name">Name</app-control-input>
      <app-control-input v-model="user.email">Email</app-control-input>
      <app-control-input v-model="user.address" control-type="textarea">
        Address
      </app-control-input>
      <app-button @click="onSave" btn-Style="bg-green-300">save</app-button>
      <app-button @click="onCancel" btn-style="cancel">cancel</app-button>
    </div>
  </div>
</template>

<script>
import AppControlInput from '../../Forms/AppControlInput.vue'
import AppButton from '../../UI/AppButton/AppButton.vue'
export default {
  components: { AppControlInput, AppButton },
  data() {
    return {
      user: {
        name: '',
        email: '',
        address: ''
      }
    }
  },
  methods: {
    onSave() {
      console.log(this.user)
    },
    onCancel() {
      this.$router.push('/about')
    }
  }
}
</script>
