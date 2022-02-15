<template>
  <q-input
    label="Username"
    :rules="[val => !!val || 'Username is required']"
    class="q-px-sm q-pb-lg q-pt-sm"
    dense
    data-cy="username-input"
  />
</template>

<script>
export default {
  name: 'UsernameInput'
}
</script>