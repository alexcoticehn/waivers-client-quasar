<template>
  <q-page>
    <sign-in-form />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import SignInForm from 'components/SignInForm.vue'

export default defineComponent({
  name: 'Landing',
  components: {
    SignInForm
  }
})
</script>
