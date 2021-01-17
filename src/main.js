import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { get } from 'vant/lib/utils'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios({
  // url: 'httpbin.org'
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get',
}).then(res => {
  console.log(res);
})