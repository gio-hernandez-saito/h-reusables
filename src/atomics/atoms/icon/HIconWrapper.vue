<template>
  <h-base :cls="cls" :styles="styles" class="flex-none flex flex-nowrap flex-row items-center justify-center w-full h-full">
    <h-icon v-bind="iconProps"/>
  </h-base>
</template>

<script lang="ts" setup>
import { HIconWrapperProps } from "@/types/atomics/atoms/icon/HIcon";
import { HIcon } from "@/atomics";
import HBase from "@/atomics/atoms/HBase.vue";

defineProps<HIconWrapperProps>()
</script>