<template>
  <h-base-input v-bind="props">
    <template v-slot:input-slot>
    </template>
  </h-base-input>
</template>

<script setup lang="ts">

import { HBaseInput } from "@/components";
import { HInputProps } from "@/types";
const props = defineProps<HInputProps>()
</script>