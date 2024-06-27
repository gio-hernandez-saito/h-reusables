<template>
  <button :class="_class" :disabled="props.disabled ?? false" tabindex="-1"
          class="w-fit transition ease-in-out duration-100 flex items-center">
    <h-flex-inliner v-bind="props"/>
  </button>
</template>
<script lang="ts" setup>
import { HBaseButtonProps } from "@/types/components/button/HButton";
import { computed } from "vue";
import HFlexInliner from "@/components/patterns/HFlexInliner.vue";

const props = withDefaults(defineProps<HBaseButtonProps>(), { disabled: false })
const _class = computed(() => props.cls ?? '');
</script>