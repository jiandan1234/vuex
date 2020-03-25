import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

const state ={
  userinfo:[],
}
const mutations={
  save_userinfo(state,userinfo){
    state.userinfo=userinfo;
  }
}

export default new Vuex.Store({
  state,

})