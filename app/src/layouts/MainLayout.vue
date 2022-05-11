<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-btn flat label="Logo" />
        <q-space />

        <q-btn
          label="Log in"
          no-caps
          push
          to="/login"
          class="q-mx-xs"
          v-if="!userSignedIn"
        />
        <q-btn
          color="primary"
          label="Try Lytch"
          no-caps
          push
          to="/signup"
          v-if="!userSignedIn"
        />
        <q-btn
          flat
          label="Dashboard"
          no-caps
          to="/dashboard"
          v-if="userSignedIn"
        />

        <q-separator spaced inset vertical dark no-caps />
        <q-avatar v-if="userSignedIn">
          <img :src="user.photoURL" v-if="userSignedIn && user" />
          <q-menu auto-close>
            <q-list style="min-width: 100px;">
              <q-separator />
              <q-item clickable to="/dashboard" v-close-popup>
                <q-item-section>Dashboard</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup @click="logOut">
                <q-item-section>Logout</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
]

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      tab: ref(''),
    }
  },
})
</script>
