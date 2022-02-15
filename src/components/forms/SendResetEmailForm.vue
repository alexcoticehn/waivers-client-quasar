<template>
  <q-form
    class="form-card"
    id="send-email"
    @submit="sendEmail"
  >
    <q-card
      bordered
      class="q-mx-auto"
    >
      <email-input 
        v-model="email"
      />
    </q-card>
    <submit-button
      :loading="showLoadingButton"
      label="Reset Password"
    />
  </q-form>
</template>

<script>
import { useQuasar } from 'quasar';
import SubmitButton from '../buttons/SubmitButton';
import EmailInput from '../inputs/text/EmailInput';
import { ref } from 'vue';
import { api } from 'boot/axios';

export default {
  name: 'SendResetEmailForm',
  components: {
    SubmitButton,
    EmailInput
  },
  setup() {
    const $q = useQuasar();
    let showLoadingButton = ref(false);
    let email = ref(null);

    async function sendEmail() {
      showLoadingButton.value = true;
      const response = api.put('users/reset/send', {user: {
          email: email.value
        }})
        .then((response) => {
            showLoadingButton.value = false;
            $q.notify({
              type: 'positive',
              message: response.data.message,
              caption: "Please follow the link sent to your email to reset your password"
            })
        })
        .catch((response) => {
            showLoadingButton.value = false;
            $q.notify({
              type: 'negative',
              message: response.response.data.errors.message,
              caption: "If the error persists, please contact your site administrator"
            })
        });
    }

    return {
      showLoadingButton,
      email,
      sendEmail
    }
  }
}
</script>