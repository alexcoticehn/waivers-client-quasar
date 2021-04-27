<template>
  <q-page>
    <div class="row justify-center">
      <h4>Hello, {{ firstName }}</h4>
    </div>
    <div class="row justify-center">
      <reset-password-form />
    </div>
  </q-page>
</template>

<script>
import ResetPasswordForm from '../components/forms/ResetPasswordForm'
import { useStore } from 'vuex'

export default {
  components: {
    ResetPasswordForm
  },
  preFetch({ store, currentRoute, redirect }) {
    console.log(currentRoute.params.token);
    return store.dispatch('session/verifyPasswordResetToken', currentRoute.params.token)
    .then((response) => {
      store.commit('session/setFirstName', response.data.firstname);
      store.commit('session/setPasswordResetToken', response.data.token);
      store.commit('session/setUserId', response.data.id);
    })
    .catch(() => {
      store.commit('session/setIsAuthenticated', false);
      redirect({name: 'Landing'});
    })
  },
  setup() {
    const $store = useStore();

    const firstName = $store.state.session.firstName;

    return {
      firstName
    }
  }
}
</script>