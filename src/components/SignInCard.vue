<template>
  <q-form
    class="fixed-center" 
    id="sign-in"
    @submit="signIn"
  >
    <q-card
      bordered
      class="q-mx-auto"
    >
      <q-input
        label="Username"
        v-model="username"
        :rules="[val => !!val || 'Username is required']"
        class="q-px-sm q-pb-lg q-pt-sm"
        dense
      />
      <q-input
        label="Password"
        type="password"
        v-model="password"
        :rules="[val => !!val || 'Password is required']"
        class="q-px-sm q-pb-lg"
        dense
      />
    </q-card>
    <q-btn
      label="Sign In"
      type="submit"
      color="primary"
      class="q-mt-sm full-width"
      :loading="showLoadingButton"
    />
  </q-form>
</template>

<script>
import { ref } from 'vue';
import { api } from 'boot/axios';
import { Router } from '../router/index';
import { useQuasar } from 'quasar';

export default {
  name: 'SignInCard',
  setup() {
    const $q = useQuasar();
    let username = ref(null);
    let password = ref(null);
    let showLoadingButton = ref(false);

    async function signIn() {
      showLoadingButton.value = true;
        const response = api.post('users/login', {user: {
          username: username.value,
          password: password.value
        }})
        .then(() => {
            Router.push({name: 'MyRoster'});
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
      username,
      password,
      showLoadingButton,
      signIn
    }
  }
}
</script>

<style lang="scss" scoped>
    #sign-in {
        width: 300px;
    }
</style>