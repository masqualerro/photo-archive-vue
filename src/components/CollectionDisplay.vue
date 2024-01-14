<template>
  <div>
    <h1>Collection Display</h1>
  </div>
</template>
<script>
export default {
  name: 'CollectionDisplay',
  data() {
    return {
      collection: []
    }
  },
  methods: {
    getCollection() {
      this.collection = this.$store.state.collection
    }
  },
  created() {
    this.getCollection()
  }
}
</script>
