<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-btn flat label="Logo" />
        <q-space />

        <q-btn label="Log in" no-caps push to="/login" class="q-mx-xs" />
        <q-btn color="primary" label="Try Lytch" no-caps push to="/signup" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useCounterStore } from '../stores/example-store.js'
export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)
    const store = useCounterStore()
    return {
      leftDrawerOpen,
      store,
      tab: ref(''),
    }
  },
})
</script>
