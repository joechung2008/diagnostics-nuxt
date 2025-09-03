<template>
  <div>
    <h3 class="text-lg font-semibold mb-2">Configuration</h3>
    <UTable :data="data" :columns="columns">
      <template #key-data="{ row }">
        <span class="text-sm">{{ row.key }}</span>
      </template>
      <template #value-data="{ row }">
        <span class="text-sm">{{ row.value }}</span>
      </template>
    </UTable>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
import type { ConfigurationProps, KeyValuePair } from "~/types";

const props = defineProps<ConfigurationProps>();

const data = computed(() => {
  return Object.entries(props.config).map(([key, value]) => ({
    key,
    value,
  }));
});

const columns: TableColumn<KeyValuePair<string>>[] = [
  {
    id: "key",
    accessorKey: "key",
    header: "Key",
  },
  {
    id: "value",
    accessorKey: "value",
    header: "Value",
  },
];
</script>
