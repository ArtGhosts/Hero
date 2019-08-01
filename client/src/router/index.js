import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//登陆页面
import  login  from "../components/login_nj"
//首页
import Home from  "@/components/Home"
//搜索城市
import SearchCity from  "@/components/SearchCity_lgl"
//外卖
import FastFood from  "@/components/FastFood_dyx"
export default new Router({
  routes: [
    {path:"/",component:Home},
    {path:"/login",component:login},
    {path:'/searchCity/:cityID',component:SearchCity,name:"city"},
    {path:'/fastFood',component:FastFood},
  ]
})
