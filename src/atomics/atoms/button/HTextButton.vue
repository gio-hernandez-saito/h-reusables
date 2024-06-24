<template>
  <h-base-button :text="text"/>
</template>

<script setup lang="ts">

import { HBaseButton } from "@/atomics";
import { HTextButtonProps } from "@/types/atomics/atoms/button/HButton";
defineProps<HTextButtonProps>();
</script>