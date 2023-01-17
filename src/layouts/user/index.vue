<template>
  <q-layout view="lHh LpR fFf">
    <!-- <q-header class="bg-white text-purple-600">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" v-if="$q.screen.lt.md" />

        <q-toolbar-title>
          <div class="q-pa-md">
            <div class="text-gray-500 text-xs uppercase">{{ route.name }}</div>
            <div>
              {{ route.meta.label }}
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      class="bg-gray-100"
      :mini="mini"
      @click.capture="drawerClick"
    >
      <!-- drawer content -->
      <div class="q-mini-drawer-hide absolute top-1/2 -right-4">
        <q-btn
          dense
          round
          unelevated
          icon="chevron_left"
          @click="mini = true"
          style="background: white; color: purple; border: solid purple 0.5px"
        />
      </div>
      <sidebar></sidebar>
    </q-drawer>

    <q-page-container>
      <div class="p-5">
        <RouterView />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute } from "vue-router";
import sidebar from "./components/sidebar.vue";
const leftDrawerOpen = ref(false);
const mini = ref(false);
const $q = useQuasar();
const route = useRoute();
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
function drawerClick(e) {
  mini.value = false;
  // e.stopPropagation();
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
