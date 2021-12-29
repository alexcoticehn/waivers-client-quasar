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
        data-cy="menu-toggle"
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
        <internal-menu-link
          v-for='link in internalLinks'
          :key="link.title"
          v-bind="link"
          :data-cy="link.dataCy"
        />
        <external-menu-link 
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
    icon: 'forum',
    link: 'https://discord.com/channels/782649936264036383/'
  }
];

const internalLinksList = [
  /*{
    title: "Sailor Jerry's Lottery Simulator",
    caption: "Simulate the upcoming draft lottery",
    icon: 's_casino',
    routeName: 'LotterySimulator'
  }*/
  {
    title: "Standings History",
    icon: 's_list_alt',
    routeName: 'Standings',
    dataCy: 'standings-menu-link'
  }
]

import { defineComponent, ref } from 'vue'
import InternalMenuLink from '../components/buttons/drawerMenu/InternalMenuLink.vue';
import ExternalMenuLink from '../components/buttons/drawerMenu/ExternalMenuLink'

export default defineComponent({
  name: 'MainLayout',
  components: {
    ExternalMenuLink,
    InternalMenuLink
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      menuLinks: linksList,
      internalLinks: internalLinksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
