<template>
  <q-page>
    <h2 class="text-center fixed-top">
      Sailor Jerry's Fantasy Hockey League
    </h2>
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
