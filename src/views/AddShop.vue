<template>
<div class="mt-5 col-md-6 register-card">
  <div>
    <form class="mt-5 card" @submit.prevent="onSubmit">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Shop Name"
          v-model="form.name"
          required
        />
        <div class="alert alert-danger" role="alert" v-if="shopErrors.name">
          <strong>{{shopErrors.name[0]}}</strong>
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Image URL"
          v-model="form.image_url"
          required
        />
        <div class="alert alert-danger" role="alert" v-if="shopErrors.image_url">
          <strong>{{shopErrors.image_url[0]}}</strong>
        </div>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Select Manager</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="form.manager_id">
          <option
            v-for="manager in availableManagers"
            :key="manager.id"
            :value="manager.id"
          >{{manager.first_name}}</option>
        </select>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
      <button class="btn btn-lg btn-secondary btn-block" type="button" @click="navigateToShops">Cancel</button>
    </form>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      form: { name: "", image_url: "", manager_id: "" }
    };
  },
  computed: {
    ...mapGetters({
      shopErrors: "shopErrors",
      managers: "managers"
    }),
    availableManagers() {
      return this.managers.filter(manager => manager.shop_id === null);
    }
  },
  methods: {
    ...mapActions({
      fetchManagers: "fetchManagers",
      addShop: "addShop"
    }),
    onSubmit() {
      this.addShop(this.form).then(() => {
        this.$router.push({
          name: "shops"
        });
      });
    },

    navigateToShops() {
      this.$router.push({
        name: "shops"
      });
    }
  },
  created() {
    this.fetchManagers();
  }
};
</script>

<style>
.register-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.form-control {
  width: auto;
}
</style>