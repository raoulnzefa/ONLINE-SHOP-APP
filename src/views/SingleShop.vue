<template>
  <div class="mt-5">
    <div class="col-md-3 card">
      <h2>{{shop.name}}</h2>
      <img class="card-img-top" :src="shop.image_url" alt="Card image cap" width="200" height="200">
      <div class="card-body">
      <p>{{shop.name}}</p>     

      <div v-if="shop.manager">
        <!-- <a class="link-streched" @click="navigateToManager(shop.manager_id)"> -->
          Manager in charge: <br> {{shop.manager.first_name + ' ' + shop.manager.last_name}}
        <!-- </a> -->
      </div>
      <p v-else> Manager Required </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            shop: 'shop'
        }),
    },
    methods: {
        ...mapActions({
            fetchShop: 'fetchShop'
        })
    },
    beforeRouteEnter(to,from,next) {
        next(vm => vm.fetchShop(vm.$route.params.id))
    }
}
</script>

<style>

</style>