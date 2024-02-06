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
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-10 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 xl:ml-24 max-w-2xl lg:max-w-none mx-auto lg:pt-8"
    >
      <div class="relative group rounded-full" v-for="image in images" :key="image.id">
        <p
          class="whitespace-nowrap pointer-events-none text-4xl italic font-black text-red-500 dark:text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        >
          {{ image.name }}
        </p>
        <img
          @click="goToCollection(image.locationId, image.collectionId)"
          :style="{ filter: filter, willChange: 'filter, transform' }"
          :src="image.src"
          :alt="image.alt"
          class="hover:cursor-pointer transition-all ease-in-out duration-300 group-hover:grayscale group-hover:scale-105 group-hover:opacity-55 rounded-full"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ArrowDownRightIcon } from '@heroicons/vue/24/outline'
import { useDark } from '@vueuse/core'
import DarkModeGroup from '@/components/DarkModeGroup.vue'
import { RouterLink } from 'vue-router'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { ref } from 'vue'
import locations from '@/data/LocationData'

export default {
  name: 'HomeView',
  data() {
    return {
      images: []
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
  },
  methods: {
    goToCollection(locationId, collectionId) {
      this.$router.push({
        name: 'collection',
        params: {
          locationId: locationId,
          collectionId: collectionId
        }
      })
    }
  },
  created() {
    let idCounter = 0
    let tempImages = []
    for (const location of locations) {
      for (const child of location.children) {
        tempImages.push({
          id: idCounter,
          src: `/assets/${location.folder}/${child.folder}/thumb.png`,
          alt: `${child.name} ${location.name}`,
          locationId: location.id,
          collectionId: child.id,
          name: child.name
        })
        idCounter++
      }
    }

    for (let i = 0; i < 6; i++) {
      const j = Math.floor(Math.random() * tempImages.length)
      this.images.push(tempImages[j])
      tempImages.splice(j, 1)
    }
  }
}
</script>
