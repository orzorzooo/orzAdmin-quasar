<template>
  <div class="max-w-xs">
    <div class="h-12 p-3 font-bold uppercase text-xl text-purple-500 q-mini-drawer-hide">Your Company Name</div>
    <div class="h-12 w-full q-mini-drawer-only"></div>
    <q-list class="rounded-borders text-purple-600">
      <template v-for="(item, i) of userRoutes">
        <q-item
          v-if="!item.meta.hide"
          clickable
          :active="route.name === item.name"
          active-class="my-menu-link"
          @click="router.push({ name: item.name })"
        >
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>
          <q-item-section>
            {{ item.meta.label }}
          </q-item-section>
        </q-item>
      </template>

      <q-item clickable v-ripple :active="link === 'inbox'" active-class="my-menu-link">
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section>Inbox</q-item-section>
      </q-item>
      <q-item clickable v-ripple :active="link === 'outbox'" active-class="my-menu-link">
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section>Outbox</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="link === 'trash'" active-class="my-menu-link">
        <q-item-section avatar>
          <q-icon name="delete" />
        </q-item-section>

        <q-item-section>Trash</q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item clickable v-ripple :active="link === 'settings'" active-class="my-menu-link">
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>

        <q-item-section>Settings</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="link === 'help'" active-class="my-menu-link">
        <q-item-section avatar>
          <q-icon name="help" />
        </q-item-section>

        <q-item-section>Help</q-item-section>
      </q-item>
      <div class="absolute-bottom">
        <q-separator spaced />
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
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
const link = ref("");
const user = userStore();
const router = useRouter();
const route = useRoute();
async function logout() {
  const logout = await user.logout();
  if (!logout) return;
  router.push({ name: "Login" });
}

const [userRoute] = router.options.routes.filter((item) => item.name == "user");
const userRoutes = userRoute.children;
</script>
<style scoped>
.my-menu-link {
  color: white;
  background: #dd90f7;
}
</style>
