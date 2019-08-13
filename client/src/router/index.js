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
//商品分类
import FastFoodCategroy from  "@/components/dyx/FastFood_categroy_dyx"
//商品详情
import ProductDetails from  "@/components/dyx/ProductDetails_dyx"
//所有商品
import AllProducts from  "@/components/dyx/AllProducts_dyx"
//所有评论
import AllReview from  "@/components/dyx/AllReview_dyx"
//每一个商品信息
import EveryProductInfor from  "@/components/dyx/EveryProductInfor_dyx"


import SearchCity from  "@/components/ldl/SearchCity_ldl"


//搜索商品
import SearchProduct from  "@/components/dyx/SearchProduct_dyx"

//订单列表
import order_nj from "@/components/nijun/order_nj"
//我的->我的余额
import Mine from  "@/components/Mine"
import Balance from  "@/components/nijun/Mine_balance"
import Detail from "@/components/nijun/detail"
//我的->优惠->红包明细
import Benefit from "@/components/nijun/benefit"
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
// 推荐有奖
import Recommend from "@/components/nijun/Recommend"
//积分
import Integral from "@/components/nijun/Integral_nj"
//确认订单页面
import Indent from "@/components/nijun/Indent_nj"
// 收获地址
import Shop_Address from "@/components/nijun/Shop_Address"
//添加地址
import Select_Address from "@/components/nijun/Select_Address"
//获取城市位置
import Select_Position from '@/components/nijun/Select_Position'
import daojishi from "@/components/nijun/daojishi"
//积分问题
import jifenspeak from "@/components/nijun/jifenspeak_nj"
//积分商城
import IntegralShop from "@/components/nijun/IntegralShop_nj"
//--------------------------------------------------------------------


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
//修改用户名
import amend_ldl from "@/components/ldl/amend_ldl"
//编辑地址
import consignee_ldl from "@/components/ldl/consignee_ldl"
import account_ldl from "@/components/ldl/account_ldl"
//新增地址
import compile_ldl from "@/components/ldl/compile_ldl"
//创建新的地址
import SearchCity_lgl_one from "@/components/ldl/SearchCity_lgl_one"

//备注
import beizhu from "@/components/ldl/beizhu"


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
        {path:'/ProductDetails',component:ProductDetails,children:[
            {path:'/',redirect:'AllProduct'},
            {path:'AllProduct',component:AllProducts},
            {path:'AllReview',component:AllReview}
          ]},
        //每一个商品的详情
        {path:'/EveryProductInfor',component:EveryProductInfor},
        //搜索
        {path:'/searchProduct',component:SearchProduct,name:'searchProduct'},
        // 订单列表(nijun)
        {path:'/order_nj',component:order_nj},
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
        // 推荐
        {path:'/Recommend',component:Recommend},
        // 积分
        {path:'/Integral',component:Integral},
        //积分问题
        {path:'/jifenspeak',component:jifenspeak},
        // 添加收货地址
        {path:"/IntegralShop",component:IntegralShop},
        //确认订单页面
        {path:"/Indent",component:Indent},
        //确认订单收获地址
        {path:"/Shop_Address",component:Shop_Address},
        //获取地址页面
        {path:'/Select_Position',component:Select_Position},
        //倒计时
        {path:'/daojishi',component:daojishi},
        // 添加收货地址
        {path:"/Select_Address",component:Select_Address},


      ]},
        //------------------------------------------------------------------------------
        {path:"/member/Discounts_ldl",component:Discounts_ldl},
        {path:"/member_ldl",component:member_ldl},
        {path:"/member/record_ldl",component:record_ldl},
        {path:"/member/conversion_ldl",component:conversion_ldl},
        {path:"/member/purchase_ldl",component:purchase_ldl},
        {path:'/account_ldl',component:account_ldl},
    //修改用户名
        {path:"/member/amend_ldl",component:amend_ldl},
        // 编辑地址
        {path:"/member/consignee_ldl",component:consignee_ldl},
        // 新增地址
        {path:"/member/compile_ldl",component:compile_ldl},
        //新建新的地址搜索
        {path:"/member/SearchCity_lgl_one",component:SearchCity_lgl_one},
       //备注
        {path:"/beizhu",component:beizhu}

  ]
})
