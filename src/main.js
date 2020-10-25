// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

/*
入口js
*/
import Vue from 'vue'
import App from './App.vue' 
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import axios from 'axios'
Vue.prototype.$axios = axios

// import style
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(ElementUI)


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
