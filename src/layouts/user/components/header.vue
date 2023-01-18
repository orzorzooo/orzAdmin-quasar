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
      <q-btn
        icon="arrow_back"
        round
        @click="router.back()"
        v-if="route.meta.backIcon"
      ></q-btn>
      <q-icon name="view_stream" size="3em" v-else></q-icon>

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
import { useRoute, useRouter } from "vue-router";
import { globalStore } from "@/stores/global";
const route = useRoute();
const router = useRouter();
const global = globalStore();
</script>
