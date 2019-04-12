import Vue from 'vue'
import VueRouter from 'vue-router'

import Exchange from '@/pages/Exchange'
import Funds from '@/pages/Funds'
import Account from '@/pages/Account'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Exchange },
  { path: '/funds', component: Funds },
  { path: '/account', component: Account }
]

export default new VueRouter({
  mode: 'history',
  routes
})
