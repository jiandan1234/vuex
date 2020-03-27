import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",//加上后在url中就不会有#
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/login',
      name:"Login",
      component: () => import("@/components/Login"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("@/components/Home"),
      children:[
        {
          path: "/perinfo",
          name:"PersonInfo",
          component:()=>import("@/components/PersonM/PerInfo.vue")
        },
        {
          path: "/perview",
          name:"PresonView",
          component:()=>import("@/components/PersonM/PerView")
        },
        
      ]
    },
  ]
})
