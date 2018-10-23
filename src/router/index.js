import Vue from 'vue'
import Router from 'vue-router'

import Classify from '../pages/Classify/Classify.vue'
import Login from '../pages/Login/Login.vue'
import MSite from '../pages/MSite/MSite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Know from '../pages/Know/Know.vue'
import Cart from '../pages/Cart/Cart.vue'
import Wang from '../pages/Wang/Wang.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/know',
      component: Know,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/wang',
      component: Wang
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
