// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import {routes} from './routes'

Vue.use(VueRouter)
Vue.config.productionTip = false

import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI);

import "./font/iconfont.css"
import 'normalize.css/normalize.css'
const router = new VueRouter({
  routes,
  mode:"history"
})


/* eslint-disable no-new */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

