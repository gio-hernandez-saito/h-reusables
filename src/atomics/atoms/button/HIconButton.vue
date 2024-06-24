<template>
  <h-base-button :pre-icon="icon"/>
</template>

<script setup lang="ts">

import { HBaseButton } from "@/atomics";
import { HIconButtonProps } from "@/types/atomics/atoms/button/HButton";
defineProps<HIconButtonProps>();
</script>