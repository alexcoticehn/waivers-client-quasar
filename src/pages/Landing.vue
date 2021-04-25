<template>
  <q-page>
    <div class="row justify-center">
      <sign-in-form />
    </div>
  </q-page>
</template>

<script>
import SignInForm from 'components/forms/SignInForm.vue'
import { Loading } from 'quasar'

export default {
  components: {
    SignInForm
  },
  preFetch({ store }) {
    Loading.show();
    store.dispatch('session/verifyToken');
  }
}
</script>
