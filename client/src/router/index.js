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



import SearchCity from  "@/components/ldl/SearchCity_ldl"


//搜索商品
import SearchProduct from  "@/components/dyx/SearchProduct_dyx"
//订单
import ProductOrder from  "@/components/ProductOrder"

//我的->我的余额
import Mine from  "@/components/Mine"
import Balance from  "@/components/Mine_balance"
import Detail from "@/components/nijun/detail"
//我的->优惠->红包明细
import Benefit from "@/components/nijun/Benefit"
import HongBao from "@/components/nijun/HongBao"
// /明细->历史红包
import hbDescription from "@/components/nijun/hbDescription"
import passhongbao from "@/components/nijun/passHongbao"
// 代金券
import DaiJinQuan from "@/components/nijun/DaiJinQuan"
// 代金券明细
import daimoneyspaek from "@/components/nijun/daimoneyspaek"
// 兑换红包
import exchangeHB from "@/components/nijun/exchangeHB"



//我的->饿了么会员卡
import  member from "@/components/ldl/member_ldl"
//我的->服务中心
import service from "@/components/ldl/service_ldl"
//我的->服务中心-别的页面
import mybaba from "@/components/ldl/Mybaba_ldl"
//我的->下载app
import download from "@/components/ldl/download_ldl"

import Discounts_ldl from  "@/components/ldl/Discounts_ldl"
import member_ldl from "@/components/ldl/member_ldl"
import record_ldl from "@/components/ldl/record_ldl"
import conversion_ldl from "@/components/ldl/conversion_ldl"
import purchase_ldl from "@/components/ldl/purchase_ldl"


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
        //重定向
        {path:'/',redirect:"/fastFood"},
        //外卖
        {path:'/fastFood',component:FastFood},
        //食品分类
        {path:'/FastFoodCategroy',component:FastFoodCategroy},

        //食品详情
        {path:'/ProductDetails',component:ProductDetails},
        //搜索
        {path:'/searchProduct',component:SearchProduct,name:'searchProduct'},
        //订单
        {path:'/order',component:ProductOrder},
        //我的
        {path:'/mine',component:Mine},
        //我的余额
        {path:'/balance',component:Balance},
        //饿了么会员卡
        {path:'/member',component:member},
        //服务中心
        {path:'/service',component:service,},
        {path:'/mybaba',component:mybaba,name:"mybaba"},
        //下载app
        {path:'/download',component:download},
        //  余额明细
        {path:'/detail',component:Detail},
        //  优惠跟红包->代金券
        {path:'/benefit',component:Benefit, children: [
            {path:'/',redirect:'/HongBao'},
            {path: '/HongBao', component: HongBao},
            {path:'/DaiJinQuan',component:DaiJinQuan}
          ]},
        //  红包明细
        {path:'/hbDescription',component:hbDescription},
        // 过期红包
        {path:'/passhongbao',component:passhongbao},
        // 代金券明细
        {path:'/daimoneyspaek',component:daimoneyspaek},
        // 兑换红包
        {path:'/exchangeHB',component:exchangeHB},

      ]},
        {path:"/member/Discounts_ldl",component:Discounts_ldl},
        {path:"/member_ldl",component:member_ldl},
        {path:"/member/record_ldl",component:record_ldl},
        {path:"/member/conversion_ldl",component:conversion_ldl},
        {path:"/member/purchase_ldl",component:purchase_ldl},


  ]
})
