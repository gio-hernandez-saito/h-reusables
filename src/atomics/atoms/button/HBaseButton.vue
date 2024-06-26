<template>
  <button :class="myClass" :disabled="props.disabled ?? false" tabindex="-1"
          class="w-fit transition ease-in-out duration-100 flex items-center">
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
  </button>
</template>
<script lang="ts" setup>
import { HBaseButtonProps } from "@/types/atomics/atoms/button/HButton";
import HIconWrapper from "@/atomics/atoms/icon/HIconWrapper.vue";
import { computed } from "vue";

const props = withDefaults(defineProps<HBaseButtonProps>(), { disabled: false })
const myClass = computed(() => props.cls ?? '')
</script>