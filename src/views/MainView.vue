<template>
  <div class="min-h-full font-satoshi">
    <header>
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8"
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
              <option value="sepia(100%)">Sepia</option>
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
              <ChevronDownIcon
                class="h-5 w-5 flex-none text-gray-600 dark:text-gray-400"
                aria-hidden="true"
              />
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
                <Disclosure as="div" class="-mx-3 pt-4 px-4" v-slot="{ open }">
                  <DisclosureButton
                    class="group relative flex items-center justify-between gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100 dark:hover:bg-gray-800 w-full"
                  >
                    <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-pink-saturated dark:bg-gray-900 dark:group-hover:bg-gray-950"
                    >
                      <component
                        :is="selectedLocation.icon"
                        class="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="flex-auto text-left">
                      <a class="block font-semibold text-gray-900 dark:text-white">
                        {{ selectedLocation.name }}
                        <span class="absolute inset-0" />
                      </a>
                    </div>
                    <div>
                      <ChevronDownIcon
                        :class="[
                          open ? 'rotate-180' : '',
                          'h-5 w-5 flex-none text-black dark:text-white'
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2">
                    <RadioGroup v-model="selectedLocation">
                      <RadioGroupLabel class="sr-only">Location</RadioGroupLabel>
                      <div class="">
                        <RadioGroupOption
                          as="template"
                          class="pl-6 pr-3 hover:cursor-pointer"
                          v-for="location in locations"
                          :key="location.id"
                          :value="location"
                          v-slot="{ active, checked }"
                        >
                          <DisclosureButton
                            as="div"
                            :class="[
                              active ? ' dark:ring-indigo-600 ' : '',
                              checked
                                ? 'bg-pink-saturated text-gray-500 dark:text-gray-300 dark:bg-gray-800 '
                                : 'bg-white dark:bg-transparent dark:ring-white text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                            ]"
                            class="relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none"
                          >
                            <div class="flex w-full items-center justify-between">
                              <div class="flex items-center">
                                <div class="text-sm">
                                  <RadioGroupLabel
                                    as="p"
                                    :class="
                                      checked
                                        ? 'font-semibold text-black dark:text-white'
                                        : 'text-gray-900 dark:text-white'
                                    "
                                    class="font-medium"
                                  >
                                    {{ location.name }}
                                  </RadioGroupLabel>
                                  <RadioGroupDescription
                                    as="span"
                                    :class="checked ? '' : 'text-gray-500'"
                                    class="inline"
                                  >
                                    <span> {{ location.children.length + ' collections' }} </span>
                                  </RadioGroupDescription>
                                </div>
                              </div>
                              <div v-show="checked" class="shrink-0 text-white">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    :fill="isDark ? '#fff' : '#000'"
                                    fill-opacity="0.2"
                                  />
                                  <path
                                    d="M7 13l3 3 7-7"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </DisclosureButton>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="-mx-3 px-4 pb-4" v-slot="{ open }">
                  <DisclosureButton
                    class="group relative flex items-center justify-between gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100 dark:hover:bg-gray-800 w-full"
                  >
                    <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-pink-saturated dark:bg-gray-900 dark:group-hover:bg-gray-950"
                    >
                      <component
                        :is="MapPinIcon"
                        class="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="flex-auto text-left">
                      <a class="block font-semibold text-gray-900 dark:text-white">
                        {{ selectedChild.name }}
                        <span class="absolute inset-0" />
                      </a>
                      <!-- <p class="text-gray-600 dark:text-gray-400">This is the location</p> -->
                    </div>
                    <div>
                      <ChevronDownIcon
                        :class="[
                          open ? 'rotate-180' : '',
                          'h-5 w-5 flex-none text-black dark:text-white'
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2">
                    <RadioGroup v-model="selectedChild">
                      <RadioGroupLabel class="sr-only">Collection</RadioGroupLabel>
                      <div class="grid grid-cols-2">
                        <RadioGroupOption
                          as="template"
                          class="pl-6 pr-3 col-span-1"
                          v-for="location in selectedLocation.children"
                          :key="location.id"
                          :value="location"
                          v-slot="{ active, checked }"
                        >
                          <DisclosureButton
                            as="div"
                            :class="[
                              active ? ' dark:ring-indigo-600 ' : '',
                              checked
                                ? 'bg-pink-saturated text-black dark:text-white dark:bg-gray-800 '
                                : 'bg-white dark:bg-transparent dark:ring-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                            ]"
                            class="relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none"
                          >
                            <div class="flex w-full items-center justify-between">
                              <div class="flex items-center">
                                <div class="text-sm">
                                  <RadioGroupLabel
                                    as="p"
                                    :class="
                                      checked
                                        ? 'dark:text-white font-semibold'
                                        : 'text-gray-900 dark:text-white'
                                    "
                                    class="font-medium"
                                  >
                                    {{ location.name }}
                                  </RadioGroupLabel>
                                  <RadioGroupDescription
                                    as="span"
                                    :class="
                                      checked ? 'text-gray-500 dark:text-gray-300' : 'text-gray-400'
                                    "
                                    class="inline"
                                  >
                                    <span> {{ location.length + ' photos' }} </span>
                                  </RadioGroupDescription>
                                </div>
                              </div>
                              <div v-show="checked" class="shrink-0 text-white">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    :fill="isDark ? '#fff' : '#000'"
                                    fill-opacity="0.2"
                                  />
                                  <path
                                    d="M7 13l3 3 7-7"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </DisclosureButton>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                  </DisclosurePanel>
                </Disclosure>
                <div
                  class="grid grid-cols-2 divide-x divide-gray-900/5 dark:divide-white/10 bg-gray-50 dark:bg-gray-800"
                >
                  <PopoverButton
                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <component
                      :is="XCircleIcon"
                      class="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    Cancel
                  </PopoverButton>
                  <PopoverButton
                    @click="goToSelectedLocationAndCollection"
                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <component
                      :is="GlobeAltIcon"
                      class="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    Go
                  </PopoverButton>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <RouterLink
            :to="{ path: '/main/collections' }"
            class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >Collections</RouterLink
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
              <RouterLink :to="{ name: 'home' }">
                <span class="sr-only">Driftboy Star Glyph</span>
                <img v-if="isDark" class="h-8 w-auto" src="/glyph.svg" alt="White Star Glyph" />
                <img v-else class="h-8 w-auto" src="/glyph-light.svg" alt="Dark Star Glyph" />
              </RouterLink>
            </a>
            <button
              @click="goToSelectedLocationAndCollection"
              class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <component
                :is="GlobeAltIcon"
                class="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
              Go
            </button>
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
                    {{ location.name }} <span aria-hidden="true">&rarr;</span> {{ child.name }}
                    <ChevronDownIcon
                      :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 gap-x-2 grid grid-cols-2">
                    <RadioGroup v-model="selectedLocation">
                      <RadioGroupLabel class="sr-only">Location</RadioGroupLabel>
                      <div class="">
                        <RadioGroupOption
                          as="template"
                          class="pl-6 pr-3 hover:cursor-pointer"
                          v-for="location in locations"
                          :key="location.id"
                          :value="location"
                          v-slot="{ active, checked }"
                        >
                          <div
                            :class="[
                              active ? ' dark:ring-indigo-600 ' : '',
                              checked
                                ? 'bg-pink-saturated text-gray-500 dark:text-gray-300 dark:bg-gray-800 '
                                : 'bg-white dark:bg-transparent dark:ring-white text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                            ]"
                            class="relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none"
                          >
                            <div class="flex w-full items-center justify-between">
                              <div class="flex items-center">
                                <div class="text-sm">
                                  <RadioGroupLabel
                                    as="p"
                                    :class="
                                      checked
                                        ? 'text-black dark:text-white font-semibold'
                                        : 'text-gray-900 dark:text-white'
                                    "
                                    class="font-medium"
                                  >
                                    {{ location.name }}
                                  </RadioGroupLabel>
                                  <RadioGroupDescription
                                    as="span"
                                    :class="checked ? 'dark:text-gray-200' : 'text-gray-500'"
                                    class="inline"
                                  >
                                    <span> {{ location.children.length + ' collections' }} </span>
                                  </RadioGroupDescription>
                                </div>
                              </div>
                              <div v-show="checked" class="shrink-0 text-white">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    :fill="isDark ? '#fff' : '#000'"
                                    fill-opacity="0.2"
                                  />
                                  <path
                                    d="M7 13l3 3 7-7"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                    <RadioGroup v-model="selectedChild">
                      <RadioGroupLabel class="sr-only">Collection</RadioGroupLabel>
                      <div class="">
                        <RadioGroupOption
                          as="template"
                          class="pl-6 pr-3 col-span-1 hover:cursor-pointer"
                          v-for="location in selectedLocation.children"
                          :key="location.id"
                          :value="location"
                          v-slot="{ active, checked }"
                        >
                          <div
                            :class="[
                              active ? ' dark:ring-indigo-600 ' : '',
                              checked
                                ? 'bg-pink-saturated text-gray-500 dark:text-gray-300 dark:bg-gray-800 '
                                : 'bg-white dark:bg-transparent dark:ring-white text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                            ]"
                            class="relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none"
                          >
                            <div class="flex w-full items-center justify-between">
                              <div class="flex items-center">
                                <div class="text-sm">
                                  <RadioGroupLabel
                                    as="p"
                                    :class="
                                      checked
                                        ? 'text-black dark:text-white font-semibold'
                                        : 'text-gray-900 dark:text-white'
                                    "
                                    class="font-medium"
                                  >
                                    {{ location.name }}
                                  </RadioGroupLabel>
                                  <RadioGroupDescription
                                    as="span"
                                    :class="checked ? '' : 'text-gray-500'"
                                    class="inline"
                                  >
                                    <span> {{ location.length + ' photos' }} </span>
                                  </RadioGroupDescription>
                                </div>
                              </div>
                              <div v-show="checked" class="shrink-0 text-white">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    :fill="isDark ? '#fff' : '#000'"
                                    fill-opacity="0.2"
                                  />
                                  <path
                                    d="M7 13l3 3 7-7"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
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
                    v-model="filter"
                    id="location"
                    name="location"
                    class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white dark:ring-gray-800 dark:focus:ring-indigo-500 [&_*]:text-black"
                  >
                    <option value="none">Standard</option>
                    <option value="grayscale(100%)">Grayscale</option>
                    <option value="invert(100%)">Inverted</option>
                    <option value="hue-rotate(200deg)">Hue Rotate</option>
                    <option value="sepia(100%)">Sepia</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <main>
      <div class="mx-auto max-w-7xl pt-6 pb-8 px-5 lg:px-8 dark:bg-gray-950 relative">
        <RouterView v-bind="routeProps" />
      </div>
    </main>
  </div>
</template>
<script setup>
import DarkModeGroup from '@/components/DarkModeGroup.vue'
import { useDark } from '@vueuse/core'
import {} from 'vue-router'
import locations from '@/data/LocationData'
import { ref, onBeforeMount, watch, nextTick, computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
  MapPinIcon,
  XCircleIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { RouterView, useRoute, useRouter } from 'vue-router'

const location = ref(null)
const child = ref(null)
const route = useRoute()
const router = useRouter()

const isDark = useDark()
const filter = ref('none')

const locationId = computed(() =>
  route.params.locationId ? Number(route.params.locationId) : null
)
const collectionId = computed(() =>
  route.params.collectionId ? Number(route.params.collectionId) : null
)

const isInitialMount = ref(true)
const selectedLocation = ref(null)
const selectedChild = ref(null)

onBeforeMount(() => {
  if (locationId.value !== null && collectionId.value !== null) {
    const foundLocation = locations.find((location) => location.id === locationId.value)
    if (foundLocation) {
      location.value = foundLocation
      const foundChild = location.value.children.find((child) => child.id === collectionId.value)
      if (foundChild) {
        child.value = foundChild
        selectedLocation.value = location.value
        selectedChild.value = child.value
      }
    }
  } else {
    location.value = locations[0]
    child.value = locations[0].children[0]
    selectedLocation.value = locations[0]
    selectedChild.value = locations[0].children[0]
  }

  nextTick(() => {
    isInitialMount.value = false
  })
})

const mobileMenuOpen = ref(false)

watch(
  () => selectedLocation.value,
  () => {
    if (!isInitialMount.value) {
      console.log('triggered watcher')
      selectedChild.value = selectedLocation.value.children[0]
    }
  },
  { immediate: false }
)

watch(
  () => route.params,
  () => {
    const foundLocation = locations.find((location) => location.id === locationId.value)
    if (foundLocation) {
      location.value = foundLocation
      const foundChild = location.value.children.find((child) => child.id === collectionId.value)
      if (foundChild) {
        child.value = foundChild
        selectedLocation.value = location.value
        selectedChild.value = child.value
      }
    }
  },
  { immediate: true }
)

const goToSelectedLocationAndCollection = () => {
  location.value = selectedLocation.value
  child.value = selectedChild.value
  router.push({
    name: 'collection',
    params: {
      locationId: location.value.id,
      collectionId: child.value.id
    }
  })
}

const routeProps = computed(() => {
  if (route.name === 'collection') {
    return {
      collection: child.value,
      location: location.value.folder,
      filter: filter.value
    }
  } else {
    return { filter: filter.value }
  }
})
</script>
