<template>
  <q-header class="bg-white text-purple-600">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="global.sidebar.drawer = !global.sidebar.drawer"
        v-if="$q.screen.lt.md"
      />

      <q-toolbar-title>
        <div class="q-pa-md">
          <div class="text-gray-500 text-xs uppercase">{{ route.name }}</div>
          <div>
            {{ route.meta.label }}
          </div>
        </div>
      </q-toolbar-title>
      <slot></slot>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { useRoute } from "vue-router";
import { globalStore } from "@/stores/global";
import { ref } from "vue";
const route = useRoute();
const leftDrawerOpen = ref(false);
const mini = ref(false);
const global = globalStore();
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
function drawerClick(e) {
  mini.value = false;
  // e.stopPropagation();
}
</script>
