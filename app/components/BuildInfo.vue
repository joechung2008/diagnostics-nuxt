<template>
  <UTable :data="data" :columns="columns">
    <template #name-data="{ row }">
      <span class="text-sm">{{ row.name }}</span>
    </template>
    <template #value-data="{ row }">
      <span class="text-sm">{{ row.value }}</span>
    </template>
  </UTable>
</template>

<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
import type { BuildInfoProps, KeyValuePair } from "~/types";

const props = defineProps<BuildInfoProps>();

const data = computed(() => [
  {
    name: "Build Version",
    value: props.buildVersion,
  },
]);

const columns: TableColumn<KeyValuePair<string>>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];
</script>
