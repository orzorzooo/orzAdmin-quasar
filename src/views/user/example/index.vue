<template>
  <div>
    <orzHeader>
      <div class="text-lg font-bold uppercase">
        {{ items ? items.meta.total_count : 0 }} Items
      </div>
      <q-btn
        flat
        round
        dense
        icon="delete_outline"
        size="lg"
        v-if="selected.length"
      />
      <q-btn
        flat
        round
        dense
        icon="add_circle"
        size="lg"
        @click="router.push({ name: 'ExampleCreate' })"
      />
    </orzHeader>
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
import { get } from "@/api/request";
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
  // { name: "mainmeal", label: "餐點名稱", field: "mainmeal", align: "left" },
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
  const res = await get({ collection, params: { meta: "total_count" } });
  items.value = res;
});
function onRowClick(e, row, i) {
  console.log(row.id);
}
</script>
