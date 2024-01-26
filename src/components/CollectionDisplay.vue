<template>
  <div class="font-satoshi">
    <h1 class="text-white text-6xl font-semibold ml-0 pl-0">{{ collection.name }}</h1>
    <div class="mt-5">
      <div class="overflow-hidden h-[580px] relative">
        <ul
          ref="sliderRef"
          @scroll="handleScroll"
          class="flex overflow-x-auto snap-x snap-mandatory h-[620px]"
        >
          <li v-for="image in data" :key="image.id" class="snap-start snap-always mr-8 last:mr-0">
            <div
              style="will-change: transform"
              class="h-full relative w-[384px] flex flex-col justify-between items-center"
            >
              <img
                :style="{ filter: filter, willChange: 'filter' }"
                :src="image.src"
                :alt="image.alt"
                class="object-cover h-[580px] transition-filter duration-300 ease-in-out"
                height="580"
                width="384"
              />
            </div>
          </li>
        </ul>
      </div>
      <!-- <button
        :style="{ bottom: 'calc(50% - 60px)' }"
        @click="goToPreviousSlide"
        class="hover:scale-105 hover:bg-opacity-50 transition-all ease-in-out bg-gray bg-opacity-20 absolute left-0 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
        :class="{ 'opacity-0': currentSlide === 0 }"
        :disabled="currentSlide === 0"
      >
        <span class="sr-only">Previous</span>
        <ChevronLeftIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </button>
      <button
        :style="{ bottom: 'calc(50% - 60px)' }"
        v-if="!scrolledToEndOfSlider"
        @click="goToNextSlide"
        class="hover:scale-105 hover:bg-opacity-50 transition-all ease-in-out bg-gray bg-opacity-20 absolute right-0 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
      >
        <span class="sr-only">Next</span>
        <ChevronRightIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </button> -->
    </div>
  </div>
  <div class="flex items-center justify-center mt-6">
    <button
      :style="{ bottom: 'calc(50% - 60px)' }"
      @click="goToPreviousSlide"
      class="disabled:cursor-not-allowed hover:scale-105 hover:bg-opacity-50 transition-all ease-in-out bg-gray bg-opacity-20 left-0 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
      :disabled="currentSlide === 0"
    >
      <span class="sr-only">Previous</span>
      <ChevronLeftIcon
        :class="{ ' text-zinc-400': currentSlide === 0 }"
        class="h-5 w-5 text-white"
        aria-hidden="true"
      />
    </button>
    <button
      :style="{ bottom: 'calc(50% - 60px)' }"
      :disabled="scrolledToEndOfSlider"
      @click="goToNextSlide"
      class="hover:scale-105 disabled:cursor-not-allowed hover:bg-opacity-50 transition-all ease-in-out bg-gray bg-opacity-20 right-0 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
    >
      <span class="sr-only">Next</span>
      <ChevronRightIcon
        :class="{ ' text-zinc-400': scrolledToEndOfSlider }"
        class="h-5 w-5 text-white"
        aria-hidden="true"
      />
    </button>
  </div>
</template>
<script>
import CollectionData from '@/data/CollectionData.json'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { ref, computed, watch } from 'vue'
export default {
  name: 'CollectionDisplay',
  data() {
    return {
      data: []
    }
  },
  components: {
    ChevronRightIcon,
    ChevronLeftIcon
  },
  props: {
    collection: {
      type: Object,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  setup() {
    const slideWidth = 384
    const slideMargin = 32
    const sliderRef = ref(null)
    const sliderPosition = ref(0)

    const handleScroll = () => {
      if (sliderRef.value) {
        sliderPosition.value = sliderRef.value.scrollLeft
      }
    }

    const scrollToSlide = (slideIndex) => {
      const slider = sliderRef.value
      if (!slider) return
      slider.scrollTo({
        left: slideIndex * (slideWidth + slideMargin),
        behavior: 'smooth'
      })
    }

    const currentSlide = computed(() => {
      return Math.floor(sliderPosition.value / (slideWidth + slideMargin))
    })

    let scrolledToEndOfSlider = ref(false)

    watch(sliderPosition, () => {
      if (!sliderRef.value) return
      scrolledToEndOfSlider.value =
        sliderRef.value.scrollWidth - sliderRef.value.scrollLeft - sliderRef.value.clientWidth === 0
    })

    const goToNextSlide = () => {
      scrollToSlide(currentSlide.value + 1)
    }

    const goToPreviousSlide = () => {
      scrollToSlide(currentSlide.value - 1)
    }

    return {
      sliderRef,
      sliderPosition,
      currentSlide,
      scrolledToEndOfSlider,
      goToNextSlide,
      goToPreviousSlide,
      handleScroll
    }
  },
  created() {
    const collection = CollectionData.find(
      (collection) => collection.title === this.collection.name
    )
    console.log(collection)
    console.log(collection)
    for (let i = 0; i < collection.length; i++) {
      this.data.push({
        id: i,
        src: `/assets/${this.location}/${collection.folder}/${i}.jpg`,
        alt: `${collection.title} ${i}`
      })
    }
    console.log(this.data)
  }
}
</script>
