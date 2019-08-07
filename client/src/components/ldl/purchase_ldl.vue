<template>
  <div class="root_payment">
    <!--头部导航条-->
    <div>
      <van-nav-bar
        title="在线支付"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

    <div class="box1">
      <p class="p1">支付剩余时间</p>
      <div class="box2">
        <van-count-down :time="time" />
      </div>
    </div>
    <div class="box3">
      <p class="p2">选择支付方式</p>
    </div>

    <div class="box4">
      <div class="box5">
        <!--<img src="../assets/img/zhifubao.png" alt="">-->
        <span class="s1">支付宝</span>
      </div>
      <div class="box5">
        <!--<img src="../assets/img/weixin.png" alt="">-->
        支付宝
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "purchase_ldl",
    data(){
      return{
        time:  15 * 60 * 1000
      }
    },
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      },
    }

  }
</script>

<style scoped>
  .van-nav-bar__title{
    color: white;
    font-weight:700;
    font-size: 0.18rem;
  }
  .van-nav-bar{
    background: #3190e8;

  }
  .van-icon {
    color: white;
    font-size: 0.25rem;
    margin-left: -100%;
  }
  .box1{
    background: white;
    width: 100%;
    height: 1.48rem;
    text-align: center ;
    overflow: hidden;
  }
  .van-count-down{
    font-size: 0.3552rem;
    margin-top: 5%;
  }
  .p1{
    margin-top: 10%;
    font-size: 0.14rem;
    color: #666;
  }
  .p2{
    line-height: 0.5rem ;
    padding-left: 5%;
  }
  .box4{
    background: white;
    width: 100%;
    height: 1.60rem;
    /*line-height: 1.6rem;*/
    overflow: hidden;
  }
  .box4 img{
    width: 0.4699rem;
    height: 0.4699rem;;
    margin-left: 5%;
    margin-top: 5%;
    /*vertical-align: middle;*/


  }
  .box5{
    height: 50%;
    border-bottom: 1px solid  #f5f5f5;

  }
  .s1{
    display: inline-block;
    vertical-align: 0.15rem;
    margin-left: 2%;
  }
</style>
