<template>
  <div :class="_class" :style="_style">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { BaseProps } from "@/types/global";
import { useBase } from "@/composables/use-base";

const props = defineProps<BaseProps>();
const { _class, _style } = useBase(props);
</script>