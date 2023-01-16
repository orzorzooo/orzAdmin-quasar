<template>
  <q-btn label="Submit" @click="user.counter++">++</q-btn>
  {{ user.counter }}
</template>
<script setup>
import { userStore } from "@/stores/user";
const user = userStore();
</script>
