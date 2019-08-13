<template>
  <div class="mine">
    <div class="head">
      <van-nav-bar  left-arrow  title="我的" @click-left="onClickLeft"/>
    </div>
    <!--我的 : 分支1.登录注册-->
      <div class="event" @click="changeEvent">
        <div class="borderHead pull-left ">
          <img v-if="Object.keys(name).length != 0 " src="../assets/imgs/default.jpg" style="border-radius: 50%"/>
          <i v-else class="iconfont" style="font-size: 4rem;color:gainsboro">&#xe72b;</i>
        </div>
        <div class="pull-left textnj">
          <p>{{Object.keys(name).length == 0 ?"登录|注册":name.username}}</p>
          <span>
               <i class="iconfont" style="font-size: 1.5rem;color:gainsboro">&#xe64d;</i>
              暂无绑定手机号
          </span>
        </div>
        <!--阿里图标-->
          <van-icon name="arrow" class="pull-right"style="line-height: 4rem" />
      </div>
      <div class="clearfix"></div>

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
      <router-link :to="{path:'/benefit'}">
        <div class="youhui">
          <span class="youhuinj">{{Object.keys(name).length== 0 ? 0:hongbaocount}}</span>
          <span class="black">个</span>
          <h5>我的优惠</h5>
        </div>
      </router-link>
      <!--3-->
      <router-link :to="{path:'/Integral'}">

        <div class="integral">
          <span class="moneys">0</span>
          <span class="black">分</span>
          <h5>我的积分</h5>
        </div>
      </router-link>
    </div>
    <!--积分订单,会员卡-->
    <div class="List ">
      <van-cell is-link :to="{path:'/order_nj'}">
        <template slot="title">
          <img src="../assets/imgs/列表.png"/><span class="custom-title">我的订单</span>
        </template>
      </van-cell>

      <van-cell  is-link :to="{path:'/IntegralShop'}">
        <template slot="title">
          <i class="iconfont order">&#xe61a;</i>
          <span class="custom-title">积分商城</span>
        </template>
      </van-cell>
      <van-cell  is-link :to="{path:'/member_ldl'}">
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
          <img src="../assets/imgs/shang2.png"/><span class="custom-title">服务中心</span>
        </template>
      </van-cell>
      <van-cell  is-link :to="{path:'/download'}">
        <template slot="title">
          <img src="../assets/imgs/饿了么.jpg"/><span class="custom-title">下载饿了么APP</span>
        </template>
      </van-cell>
    </div>

    <!--底部-->
    <Foot></Foot>
  </div>


</template>

<script>
  import Foot from '../components/dyx/Foot_dyx'
  export default {
    name: "Mine",
    components:{Foot},
    data(){
      return{
        name:"",
        hongbaocount:0,
      }
    },
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      },
      changeEvent(){
        if(Object.keys(this.name).length==0){
          this.$router.push({path:'/login'})
        }else{
          this.$router.push({path:'/account_ldl'})
        }
      }
    },
    created(){
      this.hongbaocount=localStorage["hongbaocount"];
      console.log( this.hongbaocount);
      this.name=this.$store.state.shopsInfor.userInfor;
      console.log(this.$store.state.shopsInfor.userInfor)
    }
  }
</script>

<style scoped>
  /*小蓝头*/ /*----------------------------上面是蓝色头部代码------------------------------------------*/
  .head div{
    font-weight: bolder;
  }
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
    height: 4.5rem;
    background-color: white;
    border-radius: 50%;
    border: .2rem solid #3190e8;
    text-align: center;
  }
  .borderHead img{
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
  }
  .textnj{
    width:10rem;
  }
  .textnj p{
    margin: .8rem 1rem;
    font-weight: bolder;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    margin: 0 1rem;
  }
  .money h5{
    margin-bottom: .5rem;
  }
  .moneys{
    color: #f90 !important;
    font-size: 1.5rem !important;
    font-weight: bold;
  }
  .black{
    color: black;
  }
  .youhuinj{
    font-size: 1.5rem !important;
    color: #ff5f3e !important;
    font-weight: bold;
  }
  .youhui {
    border-left: .2rem solid #f5f5f5;
    border-right: .2rem solid #f5f5f5;
    padding: 0 1rem;
  }
  /*会员,订单会员卡*/
  .List{
    margin-top: 1rem;

  }
  .List i{
    font-size: 1.2rem;

  }
  .VIPka{
    color:#f4ea2a;
    font-size: 1.3rem !important;
  }
  .order{
    color: red;
  }
  /*服务中心*/
  .Service{
    margin-top: 1rem;
  }
  .Service i{
    font-size: 1.2rem;

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
  .mine span{
    margin-left: .6rem;
  }
  .List img{
    width: 1.3rem;
    height: 1.3rem;
  }
  .Service img{
    width: 1.2rem;
    height: 1.2rem;
  }
</style>
