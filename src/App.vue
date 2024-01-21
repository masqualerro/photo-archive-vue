<script setup>
import { RouterView } from 'vue-router'
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<template>
  <div :class="{ dark: isDark }" class="dark:bg-gray-950 bg-stone-300">
    <RouterView />
  </div>
</template>
