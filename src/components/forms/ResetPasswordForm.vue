<template>
  <q-form
    class="form-card"
    id="reset-password"
    @submit="resetPassword"
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
import { ref } from 'vue';
import { api } from 'boot/axios';
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
        api.patch('/users/reset/confirm', {
          token: $store.state.session.passwordResetToken,
          id: $store.state.session.userId,
          password: passwordConfirm
        })
        .then((response) => {

        })
        .catch((response) => {

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