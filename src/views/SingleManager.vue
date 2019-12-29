<template>
  <div class="mt-5 single-manager">
    <div class="mt-5 col-md-2 card">
      <img
        class="card-img-top"
        :src="manager.image_url"
        alt="Card image cap"
        width="200"
        height="200"
      />
      <div class="card-body">
        {{manager.first_name + ' ' + manager.last_name}}
        <br />
        Email adress: {{manager.email}}<br>
        <span>Shop: {{ manager.shops }}</span>
      </div>
      <router-link class="nav-link" to="/managers">Back to all managers</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      manager: "manager"
    })
  },
  methods: {
    ...mapActions({
      fetchManager: "fetchManager"
    })
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchManager(vm.$route.params.id));
  }
};
</script>

<style>
.single-manager {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>