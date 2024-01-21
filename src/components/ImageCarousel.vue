<template>
  <div class="">
    <div class="overflow-hidden h-[580px] relative">
      <ul
        ref="sliderRef"
        @scroll="handleScroll"
        class="flex overflow-x-auto snap-x snap-mandatory pb-10 h-[620px]"
      >
        <li
          v-for="slide in slideArray"
          :key="slide.name"
          class="snap-start snap-always mr-5 last:mr-0"
        >
          <div
            class="slide-center h-full relative bg-carouselradial w-[310px] rounded-2xl shrink-0 text-white px-6 flex flex-col justify-between items-center"
          >
            <img
              :src="slide.imageUrl"
              :alt="slide.name"
              class="object-cover mx-auto h-50 w-50 flex-shrink-0 rounded-full bg-[#0E0E0E52] p-3 mt-6"
            />
            <h3 class="font-bold text-2xl pt-5 pb-4 text-center">
              {{ slide.name }}
            </h3>
            <hr class="border-teal mx-auto w-[75%] pb-4" />

            <p class="text-base text-center">{{ slide.description }}</p>
            <div class="mt-auto">
              <a
                :href="slide.href"
                type="button"
                class="w-[144px] h-[48px] flex items-center justify-center my-6 rounded-full bg-gradient-to-r from-ocean to-teal px-4 py-8 text-xs font-bold text-white shadow-sm hover:from-oceanlight hover:to-teallight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Find out more
              </a>
            </div>
          </div>
        </li>
      </ul>
      <button
        @click="goToPreviousSlide"
        class="hover:scale-105 hover:bg-opacity-50 transition-all ease-in-out bg-gray bg-opacity-20 absolute left-2 bottom-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
        :class="{ 'opacity-0': currentSlide === 0 }"
        :disabled="currentSlide === 0"
      >
        <span class="sr-only">Previous</span>
        <ChevronLeftIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </button>
      <button
        v-if="!scrolledToEndOfSlider"
        @click="goToNextSlide"
        class="hover:scale-105 hover:bg-opacity-50 transition-all ease-in-out bg-gray bg-opacity-20 absolute right-2 bottom-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
      >
        <span class="sr-only">Next</span>
        <ChevronRightIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
<script>
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { ref, computed, watch } from 'vue'
export default {
  name: 'AppleCarousel',
  components: {
    ChevronRightIcon,
    ChevronLeftIcon
  },
  setup() {
    const slideWidth = 310
    const slideMargin = 20
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
    const slideArray = [
      {
        name: 'Asbestos Removal',
        description:
          'We hold a valid 3-year asbestos licence and have a wealth of experience working in occupied premises.',
        imageUrl: require('@/assets/sectors/pexels-shvets.png'),
        href: '/services/asbestos'
      },
      {
        name: 'Building Refurbishment',
        description:
          'Discover how our refurbishment division is proactive and innovative in revitalising spaces with expert fit-outs and renovations.',
        imageUrl: require('@/assets/sectors/pexels-rodnae.png'),
        href: '/services/building-refurbishment'
      },
      {
        name: 'Ductwork Cleaning',
        description:
          'Find out why DCUK has been a prominent player in the ventilation hygiene market since 1998.',
        imageUrl: require('@/assets/sectors/pexels-rodnae-2.png'),
        href: '/services/ductwork-cleaning'
      },
      {
        name: 'Fan Maintenance',
        description:
          'Discover how we provide expert diagnostics and repairs to ensure optimal airflow and peak fan performance in your ventilation systems.',
        imageUrl: require('@/assets/sectors/pexels-mali.png'),
        href: '/services/fan-maintenance'
      },
      {
        name: 'Fire and Smoke Damper Maintenance',
        description:
          'Explore how we protect assets and lives with comprehensive fire safety solutions.',
        imageUrl: require('@/assets/sectors/dampers.png'),
        href: '/services/dampers'
      },
      {
        name: 'Kitchen Canopy & Extract Clean',
        description:
          'Discover how we preserve kitchen safety with professional cleaning & maintenance.',
        imageUrl: require('@/assets/sectors/kitchen-canopy.png'),
        href: '/services/kitchens'
      },
      {
        name: 'Mould Remediation',
        description:
          'Explore how we optimise living conditions with specialised mould remediation services.',
        imageUrl: require('@/assets/sectors/mould-remediation.png'),
        href: '/services/mould-remediation'
      },
      {
        name: 'Passive Fire',
        description:
          'Discover our Passive Fire solutions and how we ensure fire safety within your property.',
        imageUrl: require('@/assets/sectors/passive-fire.png'),
        href: '/services/passive-fire'
      },
      {
        name: 'Rail and Transport Infrastructure',
        description:
          'Find out how we deliver quality across a wide range of transportation networks. ',
        imageUrl: require('@/assets/sectors/rail-transport.png'),
        href: '/services/infrastructure'
      },
      {
        name: 'Biological Threat Decontamination',
        description: 'Find out the importance of preventive measures and our responsive actions.',
        imageUrl: require('@/assets/sectors/bio-threat.png'),
        href: '/services/decontamination'
      },
      {
        name: 'Training Academy',
        description:
          'Learn with us. Fostering professional growth through comprehensive training modules.',
        imageUrl: require('@/assets/sectors/training-academy.png'),
        href: '/services/training-academy'
      }
    ]

    return {
      sliderRef,
      sliderPosition,
      currentSlide,
      scrolledToEndOfSlider,
      goToNextSlide,
      goToPreviousSlide,
      slideArray,
      handleScroll
    }
  },
  methods: {},
  mounted() {}
}
</script>
