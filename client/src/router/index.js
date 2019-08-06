import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

//登陆页面
import  login  from "../components/login_nj"
//重置
import  resetPassword  from "../components/resetPassword_nj"
//首页
import Home from  "@/components/Home"
//搜索城市
import ProductHome from  "@/components/dyx/ProductHome"

//外卖->食品分类->食品详情
import FastFood from  "@/components/dyx/FastFood_dyx"
import FastFoodCategroy from  "@/components/dyx/FastFood_categroy_dyx"
import ProductDetails from  "@/components/dyx/ProductDetails_dyx"
import FastFoodLunch from  "@/components/dyx/FastFoodLunch_dyx"



import SearchCity from  "@/components/ldl/SearchCity_ldl"


//搜索商品
import SearchProduct from  "@/components/dyx/SearchProduct_dyx"
//订单
import ProductOrder from  "@/components/ProductOrder"
//我的->我的余额
import Mine from  "@/components/Mine"
import Balance from  "@/components/Mine_balance"
//我的->饿了么会员卡
import  member from "@/components/ldl/member_ldl"
//我的->服务中心
import service from "@/components/ldl/service_ldl"
//我的->服务中心-别的页面
import mybaba from "@/components/ldl/Mybaba_ldl"
//我的->下载app
import download from "@/components/ldl/download_ldl"

export default new Router({
  routes: [
    //首页
    {path:"/",component:Home},
    //登录
    {path:"/login",component:login},
    {path:'/resepassword',component:resetPassword},
    //搜索城市
    {path:'/searchCity/:cityID/:cityName',component:SearchCity,name:"city"},

    //商品首页
    {path:'/pHome',component:ProductHome,children:[
        {path:'/',redirect:"/fastFood"},
        //外卖
        {path:'/fastFood',component:FastFood},
        //食品分类
        {path:'/FastFoodCategroy',component:FastFoodCategroy,children:[
            {path:'/lunch',component:FastFoodLunch},
          ]},

        //食品详情
        {path:'/ProductDetails',component:ProductDetails},
        //搜索
        {path:'/searchProduct',component:SearchProduct,name:'searchProduct'},
        //订单
        {path:'/order',component:ProductOrder},
        //我的
        {path:'/mine',component:Mine},
      //  我的余额
        {path:'/balance',component:Balance},
        //饿了么会员卡
        {path:'/member',component:member},
        //服务中心
        {path:'/service',component:service,},
        {path:'/mybaba',component:mybaba,name:"mybaba"},
        //下载app
        {path:'/download',component:download}
      ]},


  ]
})
