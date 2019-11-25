import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/plugins/element'
import storage from '@/scripts/storage'

import('@/assets/theme-night.css')
import('@/assets/theme-day.css')

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    const mode = storage.getMode()
    document.body.className = mode
  },
}).$mount('#app')
