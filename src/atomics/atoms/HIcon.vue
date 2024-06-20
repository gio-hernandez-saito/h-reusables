<template>
  <svg :height="height" :viewBox="svgIcon.viewBox" :width="width"
       clip-rule="evenodd" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg">
    <path :d="svgIcon.path" fill="currentColor"/>
  </svg>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { SVGIcon } from "@/types/global";
import { HIconProps, IconsPair } from "@/types/atomics/atoms/HIcon";

const props = withDefaults(defineProps<HIconProps<IconsPair>>(), { width: '100%', height: '100%' })
let svgIcon: SVGIcon

watch(() => props, () => svgIcon = props.icons[props.icon], { immediate: true, deep: true })

</script>
