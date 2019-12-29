  
<template>
  <div class="mt-5 container">
    <h2 class="title">All shops</h2>
    <Search @search-updated="onSearchTermChanged" />
    <div class="row">
      <div class="col-md-3 card" style="width: 18rem;" v-for="shop in shops" :key="shop.id">
        <img
          class="card-img-top"
          :src="shop.image_url"
          alt="Card image cap"
          width="200"
          height="200"
        />
        <div class="card-body">
          <a class="nav-link" @click="navigateToShop(shop.id)">{{shop.name}}</a>
          <div v-if="shop.manager_id">
            <a class="link-streched" @click="navigateToManager(shop.manager_id)">
              Manager in charge:
              <br />
              {{shop.manager.first_name + ' ' + shop.manager.last_name}}
            </a>
          </div>
          <p v-else>Manager Required</p>
        </div>
      </div>
    </div>
    <button class="btn btn-secondary load-more" @click="loadMore()">Load more</button>
  </div>
</template>
<script>
import Search from "./Search";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "shops",
  components: {
    Search
  },
  computed: {
    ...mapGetters({
      shops: "shops"
    })
  },
  methods: {
    ...mapActions({
      fetchShops: "fetchShops"
    }),
    onSearchTermChanged(term) {
      this.fetchShops(term);
    },
    navigateToManager(id) {
      this.$router.push({
        name: "manager",
        params: { id }
      });
    },
    navigateToShop(id) {
      this.$router.push({
        name: "shop",
        params: { id }
      });
    },
    loadMore() {}
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchShops());
  }
};
</script>

<style>
.title {
  padding: 10px;
}
.card {
  padding: 5px;
}
.load-more {
  margin: 10px;
}
</style>