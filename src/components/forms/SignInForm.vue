<template>
  <q-form
    class="form-card"
    @submit="signIn"
    data-cy="login-form"
  >
    <q-card
      bordered
      class="q-mx-auto"
    >
      <username-input
        v-model="username"
      />
      <password-input
        v-model="password"
      />
    </q-card>
    <submit-button
      :loading="showLoadingButton"
    />
    <forgot-password-link />
  </q-form>
</template>

<script>
import { ref } from 'vue';
import { api } from 'boot/axios';
import { Router } from '../../router/index';
import { useQuasar } from 'quasar';
import { useStore } from 'vuex'
import PasswordInput from '../inputs/text/PasswordInput.vue';
import UsernameInput from '../inputs/text/UsernameInput.vue';
import SubmitButton from '../buttons/SubmitButton';
import ForgotPasswordLink from '../buttons/ForgotPasswordLink.vue';

export default {
  name: 'SignInForm',
  components: {
    PasswordInput,
    UsernameInput,
    SubmitButton,
    ForgotPasswordLink
  },
  setup() {
    const $q = useQuasar();
    const $store = useStore();
    let username = ref(null);
    let password = ref(null);
    let showLoadingButton = ref(false);

    async function signIn() {
      showLoadingButton.value = true;
        api.post('users/login', {user: {
          username: username.value,
          password: password.value
        }})
        .then((res) => {
            $store.commit('session/setIsAuthenticated', true);
            $store.commit('session/setIsAdmin', res.data.admin);
            Router.push({name: 'MyRoster'});
        })
        .catch((response) => {
            $store.commit('session/setIsAuthenticated', false);
            showLoadingButton.value = false;
            $q.notify({
              type: 'negative',
              message: response.response.data.message,
              caption: "If the error persists, please contact your site administrator"
            })
        });
    }

    return {
      username,
      password,
      showLoadingButton,
      signIn
    }
  }
}
</script>