import Vue from 'vue'
import VueRouter from 'vue-router'
import Kimono from '../views/Kimono.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Kimono',
    component: Kimono
  },
  {
    path: '/obi/:id',
    name: 'obi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Obi.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
