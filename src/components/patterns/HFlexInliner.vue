<template>
  <template v-if="preIcon">
    <h-icon-wrapper v-bind="preIcon"/>
  </template>
  <template v-if="text">
    <div class="whitespace-nowrap overflow-hidden text-ellipsis">
      {{ text }}
    </div>
  </template>
  <template v-if="postIcon">
    <h-icon-wrapper v-bind="postIcon"/>
  </template>
</template>

<script lang="ts" setup>
import { HFlexInlinerProps } from "@/types/components/patterns/HPatterns";
import HIconWrapper from "../icon/HIconWrapper.vue";

const props = defineProps<HFlexInlinerProps>();
</script>