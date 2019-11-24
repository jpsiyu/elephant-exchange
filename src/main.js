import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/plugins/element'
import storage from '@/scripts/storage'

if (storage.getMode() === 'night') {
  import('@/assets/theme-dark.css')
}else{
  import('@/assets/theme-day.css')
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
