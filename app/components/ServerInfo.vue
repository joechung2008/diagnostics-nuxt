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
import type { KeyValuePair, ServerInfoProps } from "~/types";
import { when } from "~/utils/extensions";

const props = defineProps<ServerInfoProps>();

const data = computed(() => [
  {
    name: "Hostname",
    value: props.hostname,
  },
  ...when(props.uptime, {
    name: "Uptime",
    value: props.uptime,
  }),
  {
    name: "Server ID",
    value: props.serverId,
  },
  {
    name: "Deployment ID",
    value: props.deploymentId,
  },
  ...when(props.nodeVersions, {
    name: "Node Versions",
    value: props.nodeVersions,
  }),
  {
    name: "Extension Sync | Total Sync All Count",
    value: props.extensionSync.totalSyncAllCount,
  },
]);

const columns: TableColumn<KeyValuePair<string>>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "value",
    accessorKey: "value",
    header: "Value",
  },
];
</script>
