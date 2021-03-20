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
        class="q-pa-sm"
        dense
      />
      <q-input
        label="Password"
        v-model="password"
        class="q-pa-sm"
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
import { defineComponent } from 'vue'
import { api } from 'boot/axios'
import { ref } from 'vue'

export default defineComponent({
  name: 'SignInCard',
  props: {
    loading: Boolean
  },
  data: function() {
    return {
      showLoadingButton: false
    }
  },
  setup() {
    const username = ref(null);
    const password = ref(null);

    return {
      username,
      password,

      async signIn() {
        console.log(api);
        const response = await api.post('users/login', {user: {
          username: username.value,
          password: password.value
        }});
        if (response.status == 200) {
          this.$router.push({name: 'MyRoster'})
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
    #sign-in {
        width: 300px;
    }
</style>