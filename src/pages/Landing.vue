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
  beforeRouteEnter(to, from, next) {
    Loading.show();
    next((app) => {
      app.$api.get('auth/token/verify', {})
        .then(() => {
          Loading.hide();
          app.$store.commit('session/setIsAuthenticated', true);
          app.$router.replace({name: 'MyRoster'});
        })
        .catch(() => {
          Loading.hide();
          app.$store.commit('session/setIsAuthenticated', false);
        })
      })
  }
}
</script>
