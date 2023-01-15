<template>
  <q-layout view="lHh LpR fFf">
    <q-header class="bg-purple-500 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <!-- <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" /> -->
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="bg-gray-100">
      <!-- drawer content -->
      <sidebar></sidebar>
    </q-drawer>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import sidebar from "./components/sidebar.vue";
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
// export default {
//   setup() {
//     const leftDrawerOpen = ref(false);

//     return {
//       leftDrawerOpen,
//       toggleLeftDrawer() {
//         leftDrawerOpen.value = !leftDrawerOpen.value;
//       },
//     };
//   },
// };
</script>
