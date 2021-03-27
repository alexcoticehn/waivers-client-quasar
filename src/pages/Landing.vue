<template>
  <q-page>
    <div class="row justify-center">
      <sign-in-form />
    </div>
  </q-page>
</template>

<script>
import SignInForm from 'components/forms/SignInForm.vue'

export default {
  components: {
    SignInForm
  }
}
</script>
