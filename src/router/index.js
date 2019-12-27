import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store/index'
import Shops from '../views/Shops.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AllManagers from '../views/AllManagers.vue'
import SingleManager from '../views/SingleManager.vue'
import SingleShop from '../views/SingleShop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shops',
    component: Shops,
    meta: { guest: true }
  },
  {
    path: '/shops/:id',
    name: 'shop',
    component: SingleShop,
  },
  {
    path: '/managers',
    name: 'managers',
    component: AllManagers,
  },
  {
    path: '/managers/:id',
    name: 'manager',
    component: SingleManager,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { guest: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { guest: true }

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isUserLoggedIn = store.getters.isUserAuthenticated
  if (!to.meta.guest && !isUserLoggedIn) {
    next({
      name: 'login',
      path: '/login'
    })
  }
  return next()
})

export default router
