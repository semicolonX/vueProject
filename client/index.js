import Vue from 'vue'
import VueRouter from 'vue-router'
import VueX from 'vuex'
import App from './app.vue'

import './asset/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(VueX)

const router = createRouter()
const store = createStore()

const root = document.createElement('div')
document.body.appendChild(root)

/* eslint-disable */
//动态绑定vuex模块
/* eslint-enable */
store.registerModule('c', {
  state: {
    text: 'ccc'
  }
})
// store.unregisterModule('c')

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
