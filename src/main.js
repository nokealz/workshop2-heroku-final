import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import store2 from './store2' */
import compositionApi from '@vue/composition-api'


Vue.config.productionTip = false
Vue.use(compositionApi);
new Vue({
  router,
  store,/* 
  store2, */

  render: h => h(App)
}).$mount('#app')