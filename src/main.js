import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import Swiper from 'swiper';
// Vue.use(Swiper)
// import 'swiper/css'

Vue.config.productionTip = false
Vue.config.devtools = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import router from '@/router/router.js'
new Vue({
  render: h => h(App),
  // 配置路由
  router 

}).$mount('#app')
