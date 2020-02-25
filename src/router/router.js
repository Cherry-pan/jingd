import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/page/Home.vue'
import Classify from '@/page/Classify.vue'
export default new VueRouter({
    routes: [
      {
        path: '/',
        component:Home
      },
      {
        path: '/classify',
        component:Classify
      },
    ]
  })