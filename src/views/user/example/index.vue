<template>
  <div>
    <q-table
      flat
      title="example"
      :rows="items ?? []"
      :columns="cols"
      row-key="name"
      selection="multiple"
      v-model:selected="selected"
      :loading="items.length == 0"
      @row-click="onRowClick"
    ></q-table>
  </div>
</template>
<script setup>
import { get } from "@/api/request";
import { onMounted, ref } from "vue";
import { date } from "quasar";
const items = ref([]);
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
// const items = await get({ collection: "projects" });
onMounted(async () => {
  items.value = await get({ collection: "projects" });
});
function onRowClick(e, row, i) {
  console.log(row.id);
}
</script>
