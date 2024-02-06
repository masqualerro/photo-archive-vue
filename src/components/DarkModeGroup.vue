<template>
  <div class="flex items-center gap-x-3">
    <button
      name="Disable Dark Mode"
      aria-label="Disable Dark Mode"
      @click="disableDarkMode"
      :class="isDark ? '' : 'rounded-full p-1 bg-stone-900/20 bg-opacity-20'"
      class="hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      <SunIcon
        :class="isDark ? 'text-white hover:fill-white ' : 'text-stone-800 fill-stone-800'"
        class="h-6 w-6"
      />
    </button>

    <button
      name="Enable Dark Mode"
      aria-label="Enable Dark Mode"
      @click="enableDarkMode"
      :class="isDark ? 'rounded-full p-1 bg-white/20 ' : ''"
      class="hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      <MoonIcon
        :class="isDark ? ' fill-white text-white' : 'text-stone-800 hover:fill-stone-800'"
        class="h-6 w-6"
      />
    </button>
  </div>
</template>
<script setup>
import { useDark } from '@vueuse/core'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const isDark = useDark()
const enableDarkMode = () => {
  isDark.value = true
}

const disableDarkMode = () => {
  isDark.value = false
}
</script>
