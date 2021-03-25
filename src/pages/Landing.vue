<template>
  <q-page>
    <sign-in-form />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import SignInForm from 'components/forms/SignInForm.vue'

export default defineComponent({
  name: 'Landing',
  components: {
    SignInForm
  }
})
</script>
