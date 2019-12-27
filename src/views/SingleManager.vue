<template>
  <div class="mt-5">
    <div class="col-md-3 card">
      <img class="card-img-top" :src="manager.image_url" alt="Card image cap" width="200" height="200">
      <div class="card-body">
        Manager in charge: <br> {{manager.first_name + ' ' + manager.last_name}}
    </div>
  </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            manager: 'manager'
        }),
    },
    methods: {
        ...mapActions({
            fetchManager: 'fetchManager'
        })
    },
    beforeRouteEnter(to,from,next) {
        next(vm => vm.fetchManager(vm.$route.params.id))
    }
}
</script>

<style>

</style>