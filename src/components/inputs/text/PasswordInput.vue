<template>
  <q-input
    label="Password"
    type="password"
    :rules="[val => !!val || 'Password is required']"
    class="q-px-sm q-pb-lg"
    dense
    data-cy="password-input"
  />
</template>

<script>
export default {
  name: 'PasswordInput'
}
</script>