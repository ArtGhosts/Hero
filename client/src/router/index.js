import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

//登陆页面
import  login  from "../components/login_nj"
import Home from  "@/components/Home"
import SearchCity from  "@/components/SearchCity_lgl"
export default new Router({
  routes: [
    {path:"/",component:Home},
    {path:"/login",component:login},
    {path:'/seachCity',component:SearchCity},


  ]
})
