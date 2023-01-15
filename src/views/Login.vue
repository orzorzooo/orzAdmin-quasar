<template>
  <div class="h-screen">
    <div class="row items-center h-full">
      <div class="col-12 col-md-6 p-3">
        <div class="text-3xl font-bold text-white mb-5">Welcome</div>
        <q-card bordered class="bg-gray-100 my-card">
          <q-card-section>
            <div class="text-h6">Login</div>
          </q-card-section>

          <!-- <q-separator dark inset /> -->

          <q-card-section>
            <div>Your email</div>
            <q-input filled v-model="text" />
          </q-card-section>
          <q-card-section>
            <div>Password</div>
            <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="text-center">
            <q-btn color="purple-5" label="Submit" class="w-full" @click="login" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const text = ref("");
const password = ref("");
const isPwd = ref(true);
const router = useRouter();
function login() {
  router.push({ name: "UserIndex" });
}
</script>
