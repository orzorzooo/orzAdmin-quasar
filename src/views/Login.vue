<template>
  <div class="h-screen">
    {{ user.counter }}
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
            <q-input
              filled
              v-model="email"
              ref="emailRef"
              :rules="[
                (val) =>
                  (val && val.length > 0 && isValidEmail(val)) || '必填項目',
              ]"
            />
          </q-card-section>
          <q-card-section>
            <div>Password</div>
            <q-input
              v-model="password"
              ref="passwordRef"
              filled
              :type="isPwd ? 'password' : 'text'"
              :rules="[(val) => (val && val.length > 0) || '必填項目']"
            >
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
            <q-btn
              color="purple-5"
              label="Submit"
              class="w-full"
              @click="login"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { userStore } from "@/stores/user";
const email = ref(""),
  emailRef = ref(""),
  password = ref(""),
  passwordRef = ref("");

const isPwd = ref(true);
const router = useRouter();
const user = userStore();
async function login() {
  emailRef.value.validate();
  passwordRef.value.validate();
  if (emailRef.value.hasError || passwordRef.value.hasError) {
    return;
  }
  const login = await user.login({ email, password });
  console.log(login);
  if (!login) return;
  router.push({ name: "UserIndex" });

  // router.push({ name: "UserIndex" });
}
function isValidEmail(val) {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || "email 格式錯誤";
}
</script>
