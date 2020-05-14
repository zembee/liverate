import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dark from '../views/HomeDark.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/light/:coin/:price/:digi',
    name: 'home',
    component: Home
  },
  {
    path : '/dark/:coin/:price/:digi',
    name : 'dark',
    component  :dark
  }
];


// const router = new VueRouter({routes});
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
