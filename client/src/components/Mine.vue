<template>
  <div class="mine">
    <div class="topnj">
      <router-link :to="{path:'/login'}"><span class="glyphicon glyphicon-menu-left pull-left back" style="color: white;"></span></router-link>
      <div class="denglu">
        我的
      </div>
      <div class="clearfix"></div>
    </div>


    <!--我的 : 分支1.登录注册-->
    <router-link :to="{path:'/login'}">
      <div class="event">
        <div class="borderHead pull-left ">
          <i class="iconfont" style="font-size: 4rem;color:gainsboro">&#xe72b;</i>
        </div>
        <div class="pull-left textnj">
          <p>登录/注册</p>
          <span>
               <i class="iconfont" style="font-size: 1.5rem;color:gainsboro">&#xe64d;</i>
              暂无绑定手机号
          </span>
        </div>
        <!--阿里图标-->
        <van-icon name="arrow" class="pull-right"style="line-height: 4rem"/>
      </div>
      <div class="clearfix"></div>
    </router-link>

    <!--我的 : 分支2.余额-->
    <div class="money">
      <!--1-->
      <router-link :to="{path:'/balance'}">
        <div class="moneynj">
          <span class="moneys">0.00</span>
          <span class="black">元</span>
          <h5>我的余额</h5>
        </div>
      </router-link>

      <!--2-->
      <router-link :to="{path:'/login'}">
        <div class="youhui">
          <span class="youhuinj">0</span>
          <span class="black">个</span>
          <h5>我的优惠</h5>
        </div>
      </router-link>
      <!--3-->
      <router-link :to="{path:'/login'}">

        <div class="integral">
          <span class="moneys">0</span>
          <span class="black">分</span>
          <h5>我的积分</h5>
        </div>
      </router-link>
    </div>

    <!--积分订单,会员卡-->
    <div class="List">
      <van-cell is-link :to="{path:'/'}">
        <template slot="title">
          <i class="iconfont">&#xe6e5;</i>
          <span class="custom-title">积分商城</span>
        </template>
      </van-cell>

      <van-cell  is-link :to="{path:'/'}">
        <template slot="title">
          <i class="iconfont order">&#xe61a;</i>
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>
      <van-cell  is-link :to="{path:'/member'}">
        <template slot="title">
          <i class="iconfont VIPka">&#xe72d;</i>
          <span class="custom-title">饿了么会员卡</span>
        </template>
      </van-cell>
    </div>
    <!--服务中心-->
    <div class="Service">
      <van-cell  is-link :to="{path:'/service'}">
        <template slot="title">
          <i class="iconfont blue">&#xe61a;</i>
          <span class="custom-title">服务中心</span>
        </template>
      </van-cell>
      <van-cell  is-link :to="{path:'/download'}">
        <template slot="title">
          <i class="iconfont elm">&#xe722;</i>
          <span class="custom-title">下载饿了么APP</span>
        </template>
      </van-cell>
    </div>
  </div>


</template>

<script>

  export default {
    name: "Mine",
    methods:{
      onClickLeft(){
        this.$router.push({path:"/order"})
      }
    }
  }
</script>

<style scoped>
  /*小蓝头*/
  .topnj{
    /*height: 2.85rem;*/
    background-color:#3190e8;
    text-align: center;
    /*line-height: 2.856rem;*/
    line-height: 2.9rem;

  }
  .denglu{
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
  }
  /*我的*/

  /*返回按钮*/
  .back{
    font-size: 1.4rem;
    line-height: 2.856rem;
    margin-left:.5rem;
  }
  /*----------------------------上面是蓝色头部代码------------------------------------------*/
  /*登录注册背景颜色*/
  .event{
    /*border: 1px solid red;*/
    color: white;
    background: #3190e8;
    padding: 1rem 1rem;
    height: 6rem;
    margin-top:-1rem;


  }
  /*登录注册头像*/
  .borderHead{
    width: 4.5rem;
    background-color: white;
    border-radius: 50%;
    border: .2rem solid #3190e8;
  }
  .textnj p{
    margin: .8rem 0;
    font-weight: bolder;
  }
  /*第二小部分*/
  .money{
    background: white;
    text-align: center;
  }
  .money div{
    color: #666;
    display: inline-block;
    line-height: 3rem;
  }
  .money h5{
    margin-bottom: .5rem;
  }
  .moneys{
    color: #f90;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .black{
    color: black;
  }
  .youhuinj{
    font-size: 1.5rem;
    color: #ff5f3e;
    font-weight: bold;
  }
  .youhui {
    border-left: .2rem solid #f5f5f5;
    border-right: .2rem solid #f5f5f5;

    margin: 0 2rem;
    padding: 0 1rem;
  }
  /*会员,订单会员卡*/
  .List{
    margin-top: 1rem;

  }
  .List i{
    font-size: 1.5rem;

  }
  .VIPka{
    color:#f4ea2a;
  }
  .order{
    color: red;
  }
  /*服务中心*/
  .Service{
    margin-top: 1rem;
  }
  .blue{
    margin-left: .5rem;
    background:#90B4FC ;
    color: #90B4FC;
    font-size: 1.2rem;

  }
  .elm{
    color: #90B4FC;
    font-size: 2rem;

  }
</style>
