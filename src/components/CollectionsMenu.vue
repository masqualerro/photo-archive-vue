<template>
  <div class="font-satoshi">
    <div class="flex justify-between items-end">
      <h1 class="dark:text-white text-6xl ml-0 pl-0">Collections</h1>
    </div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full mt-10 sm:mt-24 lg:mt-0 max-w-2xl lg:max-w-none mx-auto lg:py-12"
    >
      <div class="relative group rounded-full" v-for="image in images" :key="image.id">
        <p
          class="whitespace-nowrap pointer-events-none text-4xl italic font-black text-red-500 dark:text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        >
          {{ image.name }}
        </p>
        <li
          @click="goToCollection(image.locationId, image.collectionId)"
          class="relative group-hover:cursor-pointer aspect-h-1 aspect-w-1 w-full flex items-center justify-center"
        >
          <img
            :style="{ filter: filter, willChange: 'filter, transform' }"
            :src="image.src"
            alt=""
            class="object-cover transition-all duration-300 ease-in-out group-hover:grayscale group-hover:scale-105 group-hover:opacity-55 overflow-hidden rounded-full"
          />
        </li>
      </div>
    </ul>
  </div>
</template>
<script>
import locations from '@/data/LocationData'

export default {
  name: 'CollectionsMenu',
  data() {
    return {
      images: []
    }
  },
  props: {
    filter: {
      type: String,
      required: true
    }
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
    for (const location of locations) {
      for (const child of location.children) {
        this.images.push({
          id: idCounter,
          src: `/assets/${location.folder}/${child.folder}/${1}.jpg`,
          alt: `${child.name} ${location.name}`,
          locationId: location.id,
          collectionId: child.id,
          name: child.name
        })
        idCounter++
      }
    }
  }
}
</script>
