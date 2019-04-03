import Vue from 'vue'
import VueRouter from 'vue-router'

import Exchange from '@/pages/Exchange'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Exchange }
]

export default new VueRouter({
  mode: 'history',
  routes
})
