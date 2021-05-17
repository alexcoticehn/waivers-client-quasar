<template>
  <q-btn
    type="a"
    :to="{name: 'ForgotPassword'}"
    label="Forgot your password?"
    class="q-mt-sm full-width"
    no-caps
    size="md"
    data-cy='forgot-password-link'
  />
</template>

<script>
export default {
  name: 'ForgotPasswordLink'
}
</script>