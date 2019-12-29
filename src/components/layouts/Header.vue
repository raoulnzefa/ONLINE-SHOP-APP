<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">Shops</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/managers" v-if="isUserAuthenticated">All Managers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/my-shop" v-if="isUserAuthenticated">My Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shop/create" v-if="isUserAuthenticated">Add Shop</router-link>
          </li>
          <li class="nav-item" v-if="isUserAuthenticated">
            <button class="btn btn-outline-danger my-2 my-sm-0" @click="onLogout">Logout</button>
          </li>
          <div class="else" v-else>
            <button class="btn nav-link" @click="login">Login</button>
            <button class="btn nav-link" @click="register">Register</button>>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters({
      isUserAuthenticated: "isUserAuthenticated"
    })
  },
  methods: {
    ...mapActions({
      logout: "logout"
    }),
    login() {
      this.$router.push({
        name: "login"
      });
    },
    register() {
      this.$router.push({
        name: "register"
      });
    },
    onLogout() {
      this.logout().then(() => {
        this.$router.push({
          name: "login"
        });
      });
    }
  }
};
</script>

<style>
.else {
  display: flex;
  flex-direction: row;
}
</style>