<template>
  <q-form
    class="fixed-center"
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
    />
  </q-form>
</template>

<script>
import { useQuasar } from 'quasar';
import SubmitButton from '../buttons/SubmitButton';
import EmailInput from '../inputs/EmailInput';
import { ref } from 'vue';

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
    }
  }
}
</script>