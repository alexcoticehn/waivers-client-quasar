<template>
  <q-page>
    <h2 class="text-center">
      Sailor Jerry's Fantasy Hockey League
    </h2>
    <sign-in-card />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import SignInCard from 'components/SignInCard.vue'

export default defineComponent({
  name: 'Landing',
  components: {
    SignInCard
  }
})
</script>
