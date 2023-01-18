<template>
  <q-layout view="lHh LpR fFf">
    <orzHeader></orzHeader>

    <q-drawer
      show-if-above
      v-model="global.sidebar.drawer"
      side="left"
      class="bg-gray-100"
      :mini="global.sidebar.mini"
      @click.capture="drawerClick"
    >
      <!-- drawer content -->
      <div class="q-mini-drawer-hide absolute top-1/2 -right-4">
        <q-btn
          dense
          round
          unelevated
          icon="chevron_left"
          @click="global.sidebar.mini = true"
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

import { globalStore } from "@/stores/global";
import orzHeader from "@/layouts/user/components/header.vue";
import sidebar from "./components/sidebar.vue";
const global = globalStore();
const mini = ref(false);
function drawerClick(e) {
  mini.value = false;
  global.sidebar.mini = false;
  // e.stopPropagation();
}
</script>
