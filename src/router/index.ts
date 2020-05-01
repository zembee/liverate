import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dark from '../views/HomeDark.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/light',
    name: 'home',
    component: Home
  },
  {
    path : '/dark/:coin/:price',
    name : 'dark',
    component  :dark
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
