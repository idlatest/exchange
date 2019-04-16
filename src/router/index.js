import Vue from 'vue'
import VueRouter from 'vue-router'

import Exchange from '@/pages/Exchange'
import Funds from '@/pages/Funds'
import Account from '@/pages/Account'
import Deposit from '@/pages/Deposit'
import Withdraw from '@/pages/Withdraw'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Exchange },
  { path: '/funds', component: Funds },
  { path: '/account', component: Account },
  { path: '/deposit', component: Deposit },
  { path: '/withdraw', component: Withdraw }
]

export default new VueRouter({
  mode: 'history',
  routes
})
