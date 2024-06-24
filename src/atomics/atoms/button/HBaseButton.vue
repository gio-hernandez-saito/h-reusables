<template>
  <div class="w-fit flex items-center justify-start px-3 h-full">
    <template v-if="preIcon">
      <h-icon-wrapper v-bind="preIcon"/>
    </template>
    <template v-if="text">
      <div class="mx-1 whitespace-nowrap overflow-hidden text-ellipsis">
        {{ text }}
      </div>
    </template>
    <template v-if="postIcon">
      <h-icon-wrapper v-bind="postIcon"/>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { HBaseButtonProps } from "@/types/atomics/atoms/button/HButton";
import HIconWrapper from "@/atomics/atoms/icon/HIconWrapper.vue";

defineProps<HBaseButtonProps>()
</script>