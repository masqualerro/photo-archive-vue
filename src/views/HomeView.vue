<template>
  <div
    class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:pb-0 lg:pt-0 lg:flex lg:px-8 min-h-screen items-center font-satoshi"
  >
    <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
      <img v-if="isDark" class="h-12" src="/glyph.svg" alt="Your Company" />
      <img v-else class="h-12" src="/glyph-light.svg" alt="Your Company" />
      <div class="mt-8 lg:mt-16">
        <RadioGroup v-model="filter" class="flex gap-x-1">
          <RadioGroupLabel class="sr-only">Filter</RadioGroupLabel>
          <RadioGroupOption v-slot="{ checked }" value="none">
            <span
              :class="
                checked
                  ? 'font-semibold bg-pink-saturated text-gray-500 dark:text-gray-300 dark:bg-indigo-500/10 ring-stone-900/20 dark:ring-indigo-500/20 ring-1 ring-inset'
                  : ''
              "
              class="hover:cursor-pointer rounded-full px-3 py-1 text-xs leading-6 text-stone-800 dark:text-indigo-400"
              >Standard</span
            >
          </RadioGroupOption>
          <RadioGroupOption v-slot="{ checked }" value="grayscale(100%)">
            <span
              :class="
                checked
                  ? 'font-semibold bg-pink-saturated text-gray-500 dark:text-gray-300 dark:bg-indigo-500/10 ring-stone-900/20 dark:ring-indigo-500/20 ring-1 ring-inset'
                  : ''
              "
              class="hover:cursor-pointer rounded-full px-3 py-1 text-xs leading-6 text-stone-800 dark:text-indigo-400"
              >Grayscale</span
            >
          </RadioGroupOption>
          <RadioGroupOption v-slot="{ checked }" value="invert(100%)">
            <span
              :class="
                checked
                  ? 'font-semibold bg-pink-saturated text-gray-500 dark:text-gray-300 dark:bg-indigo-500/10 ring-stone-900/20 dark:ring-indigo-500/20 ring-1 ring-inset'
                  : ''
              "
              class="hover:cursor-pointer rounded-full px-3 py-1 text-xs leading-6 text-stone-800 dark:text-indigo-400"
              >Inverted</span
            >
          </RadioGroupOption>
          <RadioGroupOption v-slot="{ checked }" value="hue-rotate(200deg)">
            <span
              :class="
                checked
                  ? 'font-semibold bg-pink-saturated text-gray-500 dark:text-gray-300 dark:bg-indigo-500/10 ring-stone-900/20 dark:ring-indigo-500/20 ring-1 ring-inset'
                  : ''
              "
              class="hover:cursor-pointer rounded-full px-3 py-1 text-xs leading-6 text-stone-800 dark:text-indigo-400"
              >Hue Rotate</span
            >
          </RadioGroupOption>
        </RadioGroup>
      </div>
      <h1 class="mt-10 text-5xl font-regular tracking-tight dark:text-white sm:text-8xl">
        Miguel <br class="hidden lg:block" />
        Sedillo
      </h1>
      <ArrowDownRightIcon
        class="h-10 w-10 text-stone-800 dark:text-indigo-400 mt-4 hidden lg:block"
      />
      <p class="mt-4 lg:mt-6 text-lg leading-8 text-gray-800 dark:text-gray-300">
        Photographic Archive
      </p>
      <div class="mt-10 flex justify-between">
        <div class="flex items-center gap-x-6">
          <!-- <a
            href="#"
            class="text-sm font-medium leading-6 text-indigo-700 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >Locations</a
          > -->
          <RouterLink
            to="/main/collections"
            class="text-sm font-medium leading-6 text-indigo-700 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >Collections</RouterLink
          >
        </div>
        <DarkModeGroup />
      </div>
    </div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-10 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 xl:ml-24 max-w-2xl lg:max-w-none mx-auto lg:pt-8"
    >
      <li v-for="image in images" :key="image.id" class="relative hover:cursor-pointer">
        <div
          id="circle"
          class="aspect-h-1 aspect-w-1 block w-full overflow-hidden rounded-full transition-transform duration-300 hover:scale-105"
        >
          <img
            :style="{ filter: filter, willChange: 'filter, transform' }"
            :src="image.src"
            alt=""
            class="object-cover transition-filter duration-300 hover:grayscale"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
@keyframes elastic {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}
</style>
<script>
import { ArrowDownRightIcon } from '@heroicons/vue/24/outline'
import { useDark } from '@vueuse/core'
import DarkModeGroup from '@/components/DarkModeGroup.vue'
import { RouterLink } from 'vue-router'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { ref } from 'vue'
export default {
  name: 'HomeView',
  data() {
    return {
      images: [
        {
          id: 1,
          src: '/assets/italy/sorrento/0.jpg',
          alt: 'A beautiful landscape'
        },
        {
          id: 2,
          src: '/assets/italy/positano/0.jpg',
          alt: 'A beautiful landscape'
        },
        {
          id: 3,
          src: '/assets/italy/florence/0.jpg',
          alt: 'A beautiful landscape'
        },
        {
          id: 4,
          src: '/assets/portugal/lisboa/0.jpg',
          alt: 'A beautiful landscape'
        },
        {
          id: 5,
          src: '/assets/portugal/obidos/1.jpg',
          alt: 'A beautiful landscape'
        },
        {
          id: 6,
          src: '/assets/us/mendo/0.jpg',
          alt: 'A beautiful landscape'
        }
      ]
    }
  },
  components: {
    ArrowDownRightIcon,
    DarkModeGroup,
    RouterLink,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption
  },
  setup() {
    const isDark = useDark()
    const filter = ref('none')
    const plan = ref('startup')
    return { isDark, filter, plan }
  }
}
</script>
