<template>
  <div class="text-purple-600">
    <q-form class="q-gutter-md text-purple-600">
      <q-toggle
        :label="data.status == 'draft' ? '草稿' : '發佈'"
        v-model="data.status"
        color="accent"
        false-value="draft"
        true-value="published"
        size="lg"
      />
      <div>Name</div>
      <q-input
        filled
        v-model="data.name"
        ref="nameRef"
        :rules="[(val) => !!val || '必填項目']"
      ></q-input>
      <div>Description</div>
      <q-input filled type="textarea" v-model="data.description"></q-input>
    </q-form>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round icon="check" size="lg" color="accent" @click="submit" />
    </q-page-sticky>
  </div>
</template>
<script setup>
import { get, post } from "@/api/request";
import { ref } from "vue";
import { useRouter } from "vue-router";

const collection = "example";
const nameRef = ref(null);
const router = useRouter();
const data = ref({
  status: "draft",
  name: "",
  description: "",
});
async function submit() {
  nameRef.value.validate();
  if (nameRef.value.hasError) return;
  const res = await post({ collection, data: data.value });
  if (res) {
    return router.push({ name: "Example" });
  }
}
</script>
