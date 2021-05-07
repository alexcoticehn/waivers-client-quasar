<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary">
      <q-btn 
        icon="menu" 
        flat 
        dense
        aria-label="menu"
        @click="toggleLeftDrawer"
      />
      <q-toolbar-title class="text-center">
        Sailor Jerry's Fantasy Hockey League
      </q-toolbar-title>
    </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class='text-grey-8'
        >
          Main Menu
        </q-item-label>
        <menu-link 
          v-for='link in menuLinks'
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksList = [
  {
    title: "Sailor Jerry's Discord",
    caption: 'Discord',
    icon: 'chat',
    link: 'https://discord.com/channels/782649936264036383/'
  }
];

import { defineComponent, ref } from 'vue'
import MenuLink from '../components/buttons/drawerMenu/MenuLink'

export default defineComponent({
  name: 'MainLayout',
  components: {
    MenuLink
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      menuLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
