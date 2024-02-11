<template>
  <div class="font-satoshi">
    <div class="flex justify-between items-end">
      <h1 class="dark:text-white text-5xl ml-0 pl-0">
        {{ collection.name }}
      </h1>
    </div>
    <div v-if="!loading" class="relative h-[557.8571428571429px] sm:h-[608.1632653061224px]">
      <div class="absolute w-full">
        <div class="mt-5 h-[517.8571428571429px] sm:h-[568.1632653061224px]">
          <div class="overflow-hidden h-[517.8571428571429px] sm:h-[568.1632653061224px] relative">
            <ul
              ref="sliderRef"
              @scroll="handleScroll"
              class="flex overflow-x-auto snap-x snap-mandatory h-[557.8571428571429px] sm:h-[608.1632653061224px]"
            >
              <li
                v-for="image in data"
                :key="image.id"
                class="snap-start snap-always mr-4 sm:mr-6 last:mr-0"
              >
                <div
                  style="will-change: transform"
                  class="h-full relative w-[350px] sm:w-[384px] flex flex-col justify-between items-center"
                >
                  <picture>
                    <source :srcset="image.srcWebp" type="image/webp" />
                    <img
                      :style="{ filter: filter, willChange: 'filter' }"
                      :src="image.src"
                      :alt="image.alt"
                      class="object-cover w-[350px] h-[517.8571428571429px] sm:w-[384px] sm:h-[568.1632653061224px] transition-filter duration-300 ease-in-out"
                    />
                  </picture>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        v-if="!isMobile"
        class="flex items-end justify-center mt-6 absolute bottom-[-25px] w-full"
      >
        <button
          @click="goToPreviousSlide"
          class="disabled:cursor-not-allowed hover:scale-105 hover:bg-opacity-50 transition-all ease-in-out bg-gray bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center"
          :disabled="currentSlide === 0"
        >
          <span class="sr-only">Previous</span>
          <ChevronLeftIcon
            :class="{ 'text-black/30 dark:text-white/30': currentSlide === 0 }"
            class="h-5 w-5 text-black dark:text-white"
            aria-hidden="true"
          />
        </button>
        <button
          :disabled="scrolledToEndOfSlider"
          @click="goToNextSlide"
          class="hover:scale-105 disabled:cursor-not-allowed hover:bg-opacity-50 transition-all ease-in-out bg-gray bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <span class="sr-only">Next</span>
          <ChevronRightIcon
            :class="{ 'text-black/30 dark:text-white/30': scrolledToEndOfSlider }"
            class="h-5 w-5 text-black dark:text-white"
            aria-hidden="true"
          />
        </button>
      </div>
      <div v-else>
        <p
          class="text-xs dark:text-white flex items-end justify-center absolute bottom-[-15px] w-full"
        >
          Swipe to navigate
        </p>
      </div>
    </div>
    <div
      v-else
      class="h-[557.8571428571429px] sm:h-[608.1632653061224px] flex items-center justify-center"
    >
      <p>Loading</p>
      <img
        v-if="isDark"
        class="animate-bounce h-8 w-auto"
        src="/glyph.svg"
        alt="White Star Glyph"
      />
      <img v-else class="animate-bounce h-8 w-auto" src="/glyph-light.svg" alt="Dark Star Glyph" />
    </div>
  </div>
</template>
<style scoped></style>
<script>
import CollectionData from '@/data/CollectionData.json'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { ref, computed, watch, toRefs, onMounted, onUnmounted } from 'vue'
import locations from '@/data/LocationData'
import { useDark } from '@vueuse/core'

export default {
  name: 'CollectionDisplay',
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
  data() {
    return {
      isMobile: /Mobi|Android|iPhone|iPad|Tablet|Kindle/.test(navigator.userAgent)
    }
  },
  setup(props) {
    const isDark = useDark()
    const loading = ref(true)
    const data = ref([])
    const { collection, location } = toRefs(props)

    const slideWidth = ref(384)
    const slideMargin = ref(24)
    const sliderRef = ref(null)
    const sliderPosition = ref(0)

    if (window.innerWidth < 640) {
      slideWidth.value = 350
      slideMargin.value = 16
    }

    const updateSlideDimensions = () => {
      if (window.innerWidth < 640) {
        slideWidth.value = 350
        slideMargin.value = 16
      } else {
        slideWidth.value = 384
        slideMargin.value = 24
      }
    }

    onMounted(() => {
      window.addEventListener('resize', updateSlideDimensions)
      // Call once to set the initial values
      updateSlideDimensions()
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateSlideDimensions)
    })

    const handleScroll = () => {
      if (sliderRef.value) {
        sliderPosition.value = sliderRef.value.scrollLeft
      }
    }

    const scrollToSlide = (slideIndex) => {
      const slider = sliderRef.value
      if (!slider) return
      slider.scrollTo({
        left: slideIndex * (slideWidth.value + slideMargin.value),
        behavior: 'smooth'
      })
    }

    const currentSlide = computed(() => {
      return Math.floor(sliderPosition.value / (slideWidth.value + slideMargin.value))
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
      if (currentSlide.value > data.value.length) {
        currentSlide.value = data.value.length
      }
      scrollToSlide(currentSlide.value - 1)
    }

    const isShowing = ref(true)

    watch(
      collection,
      () => {
        loading.value = true
        data.value = []
        const collectionData = CollectionData.find(
          (collectionItem) => collectionItem.title === collection.value.name
        )
        let loadCounter = 0
        for (let i = 0; i < collectionData.length; i++) {
          const img = new Image()
          img.onload = () => {
            loadCounter++
            if (loadCounter === collectionData.length) {
              loading.value = false
            }
          }
          img.src = `/assets/${location.value}/${collectionData.folder}/${i}.jpg`
          data.value.push({
            id: i,
            src: img.src,
            srcWebp: `/assets/${location.value}/${collectionData.folder}/${i}.webp`,
            alt: `${collectionData.title} ${i}`
          })
        }
        if (sliderRef.value) {
          sliderRef.value.scrollLeft = 0
        }
        sliderPosition.value = 0
        scrolledToEndOfSlider.value = false
      },
      { immediate: true }
    )

    let previousSlide = ref(0)

    watch(currentSlide, (newValue) => {
      previousSlide.value = newValue
      console.log('currentSlide', newValue, previousSlide.value)
    })

    watch(scrolledToEndOfSlider, (newValue) => {
      if (newValue && previousSlide.value === currentSlide.value) {
        sliderPosition.value = (previousSlide.value + 1) * (slideWidth.value + slideMargin.value)
      }
      console.log('scrolledToEndOfSlider', previousSlide, newValue)
    })

    return {
      sliderRef,
      sliderPosition,
      currentSlide,
      scrolledToEndOfSlider,
      goToNextSlide,
      goToPreviousSlide,
      handleScroll,
      data,
      isShowing,
      loading,
      isDark
    }
  },
  methods: {
    setMetaTags(locationId, collectionId) {
      const location = locations.find((loc) => loc.id === parseInt(locationId))
      const collection = location.children.find((col) => col.id === parseInt(collectionId))
      if (collection) {
        document.title = collection.name
        let metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute('content', collection.description)
        } else {
          let metaDescription = document.createElement('meta')
          metaDescription.name = 'description'
          metaDescription.content = collection.description
          document.getElementsByTagName('head')[0].appendChild(metaDescription)
        }
        let metaKeywords = document.querySelector('meta[name="keywords"]')
        if (metaKeywords) {
          metaKeywords.remove()
        }
        let cameraKeywords = collection.cameras.join(', ')
        metaKeywords = document.createElement('meta')
        metaKeywords.name = 'keywords'
        metaKeywords.content = `${cameraKeywords}, Miguel Sedillo, Photography, ${collection.name}, Film Photography, ${location.name}, ${location.name} ${collection.name}, ${location.name} Photography, ${location.name} Film Photography, ${collection.name} Photography, ${collection.name} Film Photography`
        document.getElementsByTagName('head')[0].appendChild(metaKeywords)
      } else {
        this.$router.push({ name: 'collections' })
      }
    }
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler(to) {
        this.setMetaTags(to.locationId, to.collectionId)
      }
    }
  }
}
</script>
