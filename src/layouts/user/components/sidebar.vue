<template>
  <div class="max-w-xs">
    <div class="px-5 py-3 font-bold uppercase text-xl text-purple-500">
      Your Company Name
    </div>
    <q-list class="rounded-borders text-purple-600">
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section>Inbox</q-item-section>
      </q-item>
      <q-space></q-space>
      <q-item
        clickable
        v-ripple
        :active="link === 'outbox'"
        @click="link = 'outbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section>Outbox</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'trash'"
        @click="link = 'trash'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="delete" />
        </q-item-section>

        <q-item-section>Trash</q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item
        clickable
        v-ripple
        :active="link === 'settings'"
        @click="link = 'settings'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>

        <q-item-section>Settings</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="help" />
        </q-item-section>

        <q-item-section>Help</q-item-section>
      </q-item>
      <div class="absolute-bottom">
        <q-item clickable v-ripple>
          <q-menu fit class="bg-gray-200" square auto-close>
            <q-list>
              <q-item clickable @click="logout">
                <q-item-section>Log out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section> {{ user.info.first_name }}</q-item-section>
        </q-item>
      </div>
    </q-list>
  </div>
</template>
<script setup>
import { userStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { ref } from "vue";
const link = ref("inbox");
const user = userStore();
const router = useRouter();
async function logout() {
  const logout = await user.logout();
  if (!logout) return;
  router.push({ name: "Login" });
}
</script>
<style scoped>
.my-menu-link {
  color: white;
  background: #dd90f7;
}
</style>
