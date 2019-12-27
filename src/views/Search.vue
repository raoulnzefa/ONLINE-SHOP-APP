<template>
  <input type="text" class="form-control" placeholder="Search" v-model="search" @input="searchUpdated($event.target.value)"/>
</template>

<script>
export default {    
    name: 'Search',
    data() {
      return {
        search: ''
      }
    },
    methods: {
        searchUpdated(search) {
        this.$emit('search-updated', search)
        }
    }
}
</script>