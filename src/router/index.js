import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: "history",//加上后在url中就不会有#
  routes: [
    {
      path: '/',
      redirect:"/home"

    },
    {
      path: "/home",
      name: "Home",
      component: () => import("@/components/Home"),
      // redirect:"/supplier",
      children:[
        {
          path: "/supplier",
          name:"Supplier",
          component:()=>import("@/components/Supplier")
        },
        
        {
          path: "/param",
          name:"Paramr",
          component:()=>import("@/components/Param")
        },
        {
          path:"/alter",
          name:"Alter",
          component:()=>import("@/components/Alter")
        },
        {
          path:"/customer",
          name:"Customer",
          component:()=>import("@/components/Customer")
        },
        {
          path:"/demo",
          name:"Demo",
          component:()=>import("@/components/Demo")
        },
        
      ]
    },
    
    {
      path:"/index",
      name:"Index",
      component:()=>import("@/components/Index")
    },
    


  ]
})
