import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"


Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

require("./mock/index.js");
import Axios from "axios"
Vue.prototype.$axios = Axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
