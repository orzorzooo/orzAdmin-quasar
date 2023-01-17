<template>
  <q-header class="bg-white text-purple-600">
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
      <slot></slot>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
