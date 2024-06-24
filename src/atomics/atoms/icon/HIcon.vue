<template>
  <svg :viewBox="svgIcon.viewBox" clip-rule="evenodd" fill-rule="evenodd"
       height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path :d="svgIcon.path" fill="currentColor"/>
  </svg>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { SVGIcon } from "@/types/global";
import { HIconProps, IconsPair } from "@/types/atomics/atoms/icon/HIcon";

const props = defineProps<HIconProps<IconsPair>>()
let svgIcon: SVGIcon

watch(() => props, () => svgIcon = props.icons[props.icon], { immediate: true, deep: true })

</script>
