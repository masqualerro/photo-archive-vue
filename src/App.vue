<script setup>
import { RouterView } from 'vue-router'
import { useDark } from '@vueuse/core'
import { SpeedInsights } from '@vercel/speed-insights/vue'

const isDark = useDark()
</script>

<!-- #E9DFDE -->
<template>
  <div :class="{ dark: isDark }" class="dark:bg-gray-950 bg-pink min-h-screen font-satoshi">
    <RouterView />
  </div>
  <SpeedInsights />
</template>
