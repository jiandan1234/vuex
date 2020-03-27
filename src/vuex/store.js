import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

const state ={
  userinfo:JSON.parse(localStorage.getItem("userinfo")),
}

const mutations={
  save_userinfo(state,userinfo){
    console.log("mutations启动了")
    localStorage.setItem("userinfo",JSON.stringify(userinfo))
    state.userinfo=userinfo;
  },
  
}

export default new Vuex.Store({
  state,
  mutations
})