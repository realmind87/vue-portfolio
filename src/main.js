/* eslint-disable */ 
import Vue from 'vue'
import Test from './Test.vue'
import App from './App.vue'
import router from './route'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
