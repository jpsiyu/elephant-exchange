import Vue from 'vue'

const wsUrl = 'ws://localhost:19100/ws'

Vue.prototype.$common = {
  wsUrl
}