<template>
  <div :class="_class" :style="myStyle" class="flex flex-col flex-nowrap justify-center gap-1">
    <div v-if="props.label" :class="_labelClass" class="whitespace-nowrap overflow-hidden text-ellipsis">
      {{ props.label.text }}
    </div>
    <div :class="_baseInputClass" class="flex flex-row flex-nowrap items-center" @click="emits('onClickInput')">
      <slot name="input-slot"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { HBaseInputProps } from "@/types";

const props = withDefaults(defineProps<HBaseInputProps>(), { minWidth: '7rem', maxWidth: '10rem' })
const emits = defineEmits(['onClickInput'])
const _class = computed(() => props.cls ?? '');
const _labelClass = computed(() => props.labelClass ?? '');
const _baseInputClass = computed(() => props.baseInputClass ?? '');
const myStyle = computed(() => ({ minWidth: props.minWidth, maxWidth: props.maxWidth }))

</script>