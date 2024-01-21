<template>
  <div class="flex items-center gap-x-3">
    <button
      @click="disableDarkMode"
      :class="isDark ? '' : 'rounded-full p-1 bg-stone-900/20 bg-opacity-20'"
      class="hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      <SunIcon
        :class="isDark ? 'text-indigo-400 hover:fill-indigo-400 ' : 'text-stone-800 fill-stone-800'"
        class="h-6 w-6"
      />
    </button>

    <button
      @click="enableDarkMode"
      :class="isDark ? 'rounded-full p-1 bg-indigo-900 ' : ''"
      class="hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      <MoonIcon
        :class="isDark ? ' fill-indigo-400 text-indigo-400' : 'text-stone-800 hover:fill-stone-800'"
        class="h-6 w-6 text-indigo-400 hover:fill-indigo-400"
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
