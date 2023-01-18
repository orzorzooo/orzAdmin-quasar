<template>
  <div>
    <div class="text-purple-600 mb-2">
      <q-toolbar>
        <q-toolbar-title
          ><div class="text-lg font-bold uppercase">
            {{ items ? items.meta.total_count : 0 }} Items
          </div></q-toolbar-title
        >

        <q-btn
          round
          icon="delete_outline"
          color="red"
          v-if="selected.length"
          class="mr-3"
          @click="onDelete"
        />
        <q-btn
          round
          icon="add"
          color="accent"
          @click="router.push({ name: 'ExampleCreate' })"
        />
      </q-toolbar>
    </div>
    <q-table
      flat
      :rows="items ? items.data : []"
      :columns="cols"
      row-key="id"
      selection="multiple"
      v-model:selected="selected"
      :loading="items ? false : true"
      @row-click="onRowClick"
    ></q-table>
  </div>
</template>
<script setup>
import { get, del } from "@/api/request";
import { onMounted, ref } from "vue";
import { date } from "quasar";
import { useRouter } from "vue-router";
import orzHeader from "@/layouts/user/components/header.vue";

const collection = "example";

const router = useRouter();
const items = ref(null);
const loading = ref(true);
const cols = ref([
  { name: "name", label: "name", field: "name", align: "left" },
  {
    name: "date_created",
    label: "建立日期",
    field: "date_created",
    align: "left",
    format: (v, row) => `${date.formatDate(v, "YYYY-MM-DD HH:mm")}`,
  },
]);
const selected = ref([]);
onMounted(async () => {
  await init();
});

async function init() {
  selected.value = [];
  const res = await get({ collection, params: { meta: "total_count" } });
  items.value = res;
}

function onRowClick(e, row, i) {
  console.log(row.id);
}

async function onDelete() {
  const ids = selected.value.map((v) => v.id);
  const res = await del({ ids, collection });
  if (res) return init();
}
</script>
