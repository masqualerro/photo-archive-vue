<template>
  <div
    class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:pb-0 lg:pt-0 lg:flex lg:px-8 min-h-screen items-center font-satoshi"
  >
    <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
      <img class="h-12" src="/glyph.svg" alt="Your Company" />
      <div class="mt-24 sm:mt-32 lg:mt-16">
        <a href="#" class="inline-flex space-x-6">
          <span
            class="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20"
            >Standard</span
          >
          <span
            class="inline-flex items-center space-x-2 text-xs font-medium leading-6 text-gray-300"
          >
            Grayscale
          </span>
          <span
            class="inline-flex items-center space-x-2 text-xs font-medium leading-6 text-gray-300"
          >
            Inverted
          </span>
          <span
            class="inline-flex items-center space-x-2 text-xs font-medium leading-6 text-gray-300"
          >
            Hue Rotate
          </span>
        </a>
      </div>
      <h1 class="mt-10 text-4xl font-regular tracking-tight text-white sm:text-8xl">
        Miguel <br />
        Sedillo
      </h1>
      <ArrowDownRightIcon class="h-8 w-8 text-indigo-400 mt-4" />
      <p class="mt-6 text-lg leading-8 text-gray-300">Photographic Archive</p>
      <div class="mt-10 flex justify-between">
        <div class="flex items-center gap-x-6">
          <a href="#" class="text-sm font-medium leading-6 text-indigo-400 hover:text-indigo-300"
            >Locations</a
          >
          <a href="#" class="text-sm font-medium leading-6 text-indigo-400 hover:text-indigo-300"
            >Collections</a
          >
        </div>
        <div class="flex items-center gap-x-3">
          <button
            class="hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <SunIcon class="h-6 w-6 text-indigo-400 hover:fill-indigo-400" />
          </button>

          <button
            class="rounded-full p-1 bg-indigo-900 hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <MoonIcon class="h-6 w-6 text-indigo-400 fill-indigo-400" />
          </button>
        </div>
      </div>
    </div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 xl:ml-24 max-w-2xl lg:max-w-none mx-auto lg:pt-8"
    >
      <li v-for="image in images" :key="image.id" class="relative hover:cursor-pointer">
        <div
          id="circle"
          class="aspect-h-1 aspect-w-1 block w-full overflow-hidden rounded-full transition-transform duration-300 hover:scale-105"
        >
          <img
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

/* .object-cover {
  transition: transform 300ms ease;
}

.object-cover:hover {
  animation: elastic 300ms;
} */
</style>
<script>
import { ArrowDownRightIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

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
    SunIcon,
    MoonIcon
  }
}
</script>
