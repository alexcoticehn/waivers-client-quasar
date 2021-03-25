<template>
  <q-input
    label="Email"
    type="email"
    :rules="[val => !!val || 'Email is required']"
    class="q-px-sm q-pb-lg"
    dense
  />
</template>

<script>
export default {
  name: 'EmailInput'
}
</script>