import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

//登陆页面
import  login  from "../components/login_nj"
//首页
import Home from  "@/components/Home"
//搜索城市
import ProductHome from  "@/components/ProductHome"


import SearchCity from  "@/components/SearchCity_lgl"
//外卖
import FastFood from  "@/components/FastFood"
//搜索商品
import SearchProduct from  "@/components/SearchProduct"
//订单
import ProductOrder from  "@/components/ProductOrder"
//我的
import Mine from  "@/components/Mine"
export default new Router({
  routes: [
    //首页
    {path:"/",component:Home},
    //登录
    {path:"/login",component:login},
    //搜索城市
    {path:'/searchCity/:cityID',component:SearchCity,name:"city"},

    //商品首页
    {path:'/pHome',component:ProductHome,children:[
        {path:'/',redirect:"/fastFood"},
        //外卖
        {path:'/fastFood',component:FastFood},
        //搜索
        {path:'/searchProduct',component:SearchProduct},
        //订单
        {path:'/order',component:ProductOrder},
        //我的
        {path:'/mine',component:Mine},
      ]},


  ]
})
