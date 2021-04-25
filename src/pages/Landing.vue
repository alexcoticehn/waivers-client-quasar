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
  preFetch({ store, redirect}) {
    Loading.show();
    return store.dispatch('session/verifyToken')
    .then(() => {
      store.commit('session/setIsAuthenticated', true);
      Loading.hide();
      redirect({name: 'MyRoster'});
    })
    .catch(() => {
      store.commit('session/setIsAuthenticated', false);
      Loading.hide();
    });
  }
}
</script>
