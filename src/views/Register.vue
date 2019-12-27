<template>
    <form class="form-signin mt-5" @submit.prevent="onSubmit">

        <h3 class="h3 mb-3 font-weight-normal">Sign up</h3>

        <div class="form-row mb-4">
            <div class="col">
                <input type="text" id="inputRegisterFirstName" class="form-control" placeholder="First name" v-model="form.first_name" required>
            </div>
            <div class="col">
                <input type="text" id="inputRegisterLastName" class="form-control" placeholder="Last name" v-model="form.last_name" required>
            </div>
        </div>
        <input type="email" id="inputRegisterEmail" class="form-control mb-4" placeholder="E-mail" v-model="form.email" required>
        <div class="alert alert-danger" role="alert" v-if="registerErrors.email" >
            <strong> {{registerErrors.email[0]}} </strong>
        </div>
        <input type="password" id="inputRegisterPassword" name="password" class="form-control" placeholder="Password"  pattern="(?=.*\d)(?=.*[a-z]).{8,}" v-model="form.password" required>
        <small id="inputRegisterPasswordHelpBlock" class="form-text text-muted mb-4">
            Must be at least 8 characters and 1 number
        </small>
        <input type="password" id="inputRegisterPassword" name="password_confirmation" class="form-control" placeholder="Confirm" v-model="form.password_confirm" required>
        <small id="inputRegisterConfirmPasswordHelpBlock" class="form-text text-muted mb-4">
            Confirm password
        </small>
        <div class="alert alert-danger" role="alert" v-if="registerErrors.password_confirm">
            <strong> {{registerErrors.password_confirm[0]}} </strong>
        </div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="inputRegisterAcceptTerms" required>
            <label class="custom-control-label" for="inputRegisterAcceptTerms">I accept terms and conditions</label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirm: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            registerErrors: 'registerErrors'
        })
    },
    methods:
    {
        ...mapActions({
            register: 'register'
        }),
        onSubmit() {
            this.register(this.form)
            .then(() => {
                if(!this.registerErrors.email || !this.registerErrors.password)
                this.$router.push({
                    name: 'login'
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