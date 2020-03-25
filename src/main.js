import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import store from "../src/vuex/store"


Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

// require("./mock/index.js");
import Axios from "axios"
Vue.prototype.axios = Axios;

new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
