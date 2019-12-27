<template>
  <div class="container mt-5">

    <form class="form-signin" @submit.prevent="submit">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <div class="alert alert-danger" role="alert" v-if="loginErrors">
        <strong> {{loginErrors}} </strong>
      </div>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="email">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="password">
      <button class="btn btn-lg btn-primary btn-block login" type="submit">Sign in</button>
    </form>
</div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '', 
            password: ''
        }
    },
    computed: {
      ...mapGetters({
        loginErrors: 'errors'
      })
    },
    methods: {
        ...mapActions ({
            login: 'login'
        }),
        submit() {
            this.login({
                email: this.email,
                password: this.password
            }).then(() => {
              if(this.loginErrors === null)
                this.$router.push({
                    name: 'shops'
                })
            })
        }
    }
}
</script>

<style>
.form-signin {
  padding:10px;
}
.form-control {
  margin:20px;
}
.login {
  margin:20px;
}
</style>