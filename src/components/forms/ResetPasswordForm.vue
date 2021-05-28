<template>
  <q-form
    class="form-card"
    id="reset-password"
    @submit="resetPassword"
    data-cy="reset-password-form"
  >
    <q-card
      bordered
      class="q-mx-auto"
    >
      <password-input
        v-model="password"
      />
      <password-input
        v-model="passwordConfirm"
      />
    </q-card>
    <submit-button
      :loading="showLoadingButton"
      label="Reset Password"
    />
  </q-form>
</template>

<script>
import PasswordInput from '../inputs/PasswordInput';
import SubmitButton from '../buttons/SubmitButton';
import { Router } from '../../router/index';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useStore } from 'vuex'

export default {
  name: 'ResetPasswordForm',
  components: {
    PasswordInput,
    SubmitButton
  },
  setup() {
    const $q = useQuasar();
    const $store = useStore();
    let showLoadingButton = ref(false);
    let password = ref(null);
    let passwordConfirm = ref(null);

    async function resetPassword() {
      showLoadingButton.value = true;
      if (password.value != passwordConfirm.value) {
        showLoadingButton.value = false;
        password.value = '';
        passwordConfirm.value = '';
        $q.notify({
          type: 'negative',
          message: "Passwords do not match",
          caption: "Please re-enter your new password and try again"
        })
      } else {
        return $store.dispatch('session/resetPassword', passwordConfirm.value)
        .then(() => {
          $store.commit('session/setIsAuthenticated', true);
          $store.commit('session/setPasswordResetToken', '');
          Router.push({name: 'MyRoster'});
        })
        .catch((response) => {
          $q.notify({
            type: 'negative',
            message: response.date.errors.message,
            caption: "If the error persists, please contact your site administrator"
          })
          $store.commit('session/setIsAuthenticated', false);
        })
      }
    }

    return {
      showLoadingButton,
      password,
      passwordConfirm,
      resetPassword
    }
  }
}
</script>