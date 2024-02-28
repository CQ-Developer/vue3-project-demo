<template>
  <svg aria-hidden="true" :style="{ width, height }">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IconProps {
  prefix?: string
  name: string
  color?: string
  width?: string
  height?: string
}
const props = withDefaults(defineProps<IconProps>(), {
  prefix: 'icon',
  color: '#333',
  width: '16px',
  height: '16px'
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
