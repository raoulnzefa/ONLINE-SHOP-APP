<template>
  <div class="container mt-5">
    <h2 class="title">All managers</h2> 
    <Search @search-updated="onSearchTermChanged"/>
<div class="row">
    <div class="col-md-3 card" style="width: 18rem;" v-for="(manager,index) in managers" :key="index">
      <img class="card-img-top" :src="manager.image_url" alt="Card image cap" width="200" height="200">
      <div class="card-body">
      <a class="nav-link">{{manager.first_name + ' ' + manager.last_name}}</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Search from './Search'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    Search
  },
  computed: {
    ...mapGetters({
        managers: 'managers'
    }),
  },
  methods: {
    ...mapActions({
      fetchManagers: 'fetchManagers',
    }),
    // navigateToSingleManager(id) {
    //   this.$router.push({
    //     name: 'manager',
    //     params: {id}
    //   })
    // },
    // navigateToSingleShop(id) {
    //   this.$router.push({
    //     name: 'shop',
    //     params: {id}
    //   })
    // },
    onSearchTermChanged(term) {
      this.fetchManagers(term)
    },
    // navigateToAddManager() {
    //   this.$router.push({
    //     name: 'addManager'
    //   })
    // },
  },
  beforeRouteEnter(to,from,next) {
    next(vm => vm.fetchManagers())
  }
}
</script>
<style>
 .title {
    padding:10px;
  }
  .card {
    padding:5px;
  }
</style>