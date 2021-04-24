<template>
  <q-form
    class="fixed-center form-card"
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
import { Router } from '../../router/index';
import { useQuasar } from 'quasar';

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