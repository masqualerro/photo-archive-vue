<template>
  <div class="min-h-full font-satoshi flex flex-col h-screen bg-stone-400 dark:bg-gray-950">
    <header class="dark:bg-gray-950">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1 items-center gap-x-4">
          <a href="#" class="-m-1.5 p-1.5">
            <RouterLink :to="{ name: 'home' }">
              <span class="sr-only">Driftboy Star Glyph</span>
              <img v-if="isDark" class="h-8 w-auto" src="/glyph.svg" alt="White Star Glyph" />
              <img v-else class="h-8 w-auto" src="/glyph-light.svg" alt="Dark Star Glyph" />
            </RouterLink>
          </a>
          <div class="items-center justify-center hidden lg:flex">
            <select
              v-model="filter"
              id="location"
              name="location"
              class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white dark:ring-gray-800 dark:focus:ring-indigo-500 [&_*]:text-black"
            >
              <option value="none">Standard</option>
              <option value="grayscale(100%)">Grayscale</option>
              <option value="invert(100%)">Inverted</option>
              <option value="hue-rotate(200deg)">Hue Rotate</option>
            </select>
          </div>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative">
            <PopoverButton
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              <component
                :is="location.icon"
                class="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 mr-2"
                aria-hidden="true"
              />
              {{ location.name }} <span aria-hidden="true">&rarr;</span> {{ child.name }}
              <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-950 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-800"
              >
                <div class="p-4">
                  <div
                    v-for="item in products"
                    :key="item.name"
                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-900 dark:group-hover:bg-gray-950"
                    >
                      <component
                        :is="item.icon"
                        class="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="flex-auto">
                      <a
                        :href="item.href"
                        class="block font-semibold text-gray-900 dark:text-white"
                      >
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </a>
                      <p class="mt-1 text-gray-600 dark:text-gray-400">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a
                    v-for="item in callsToAction"
                    :key="item.name"
                    :href="item.href"
                    class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <component
                      :is="item.icon"
                      class="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >Locations</a
          >
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >Collections</a
          >
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <DarkModeGroup />
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                  >
                    Portugal <span aria-hidden="true">&rarr;</span> Obidos
                    <ChevronDownIcon
                      :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton
                      v-for="item in [...products, ...callsToAction]"
                      :key="item.name"
                      as="a"
                      :href="item.href"
                      class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                      >{{ item.name }}</DisclosureButton
                    >
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                  >Locations</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                  >Collections</a
                >
              </div>
              <div class="py-6 flex justify-between items-center">
                <DarkModeGroup />
                <div class="flex items-center justify-center">
                  <select
                    id="location"
                    name="location"
                    class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white dark:ring-gray-800 dark:focus:ring-indigo-500 [&_*]:text-black"
                  >
                    <option>Standard</option>
                    <option selected="">Grayscale</option>
                    <option>Inverted</option>
                    <option>Hue Rotate</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 px-5 lg:px-8 dark:bg-gray-950 relative">
        <RouterView :collection="child" :location="location.folder" :filter="filter" />
      </div>
    </main>
  </div>
</template>
<script setup>
import DarkModeGroup from '@/components/DarkModeGroup.vue'
import { useDark } from '@vueuse/core'
import {} from 'vue-router'
import locations from '@/data/LocationData'
import { ref, onBeforeMount } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  GlobeAmericasIcon,
  GlobeAltIcon,
  XCircleIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { RouterView, useRoute } from 'vue-router'

const location = ref(null)
const child = ref(null)
const route = useRoute()
const isDark = useDark()
const filter = ref('none')

const locationId = ref(Number(route.params.locationId))
const collectionId = ref(Number(route.params.collectionId))

onBeforeMount(() => {
  location.value = locations.find((location) => location.id === locationId.value)
  child.value = location.value.children.find((child) => child.id === collectionId.value)
  console.log(location.value)
  console.log(child.value)
})

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: GlobeAmericasIcon
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon
  }
]
const callsToAction = [
  { name: 'Cancel', href: '#', icon: XCircleIcon },
  { name: 'Go', href: '#', icon: GlobeAltIcon }
]

const mobileMenuOpen = ref(false)
</script>
