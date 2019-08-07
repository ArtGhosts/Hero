<template>
  <div  class="Discounts">
    <!--小蓝头部-->
      <div class="head">
        <van-nav-bar  left-arrow  title="我的优惠" @click-left="onClickLeft"/>
      </div>
    <!--优惠页面-->
    <div class="header_link text-center">
      <router-link :to="{path:'/hongbao'}">红包</router-link>
      <router-link :to="{path:'/DaiJinQuan'}">商家代金券</router-link>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script>
  import HongBao from "./HongBao";
  export default {
    name: "benefit",
    components:{HongBao},
    methods: {
      onClickLeft() {
        this.$router.push({path:'/mine'})
      },
    },
  }
</script>

<style scoped>
  .header_link_a a {
    font-size: 0.7rem;
    color: #aaa;
  }

  .packet_right_left h4:nth-child(1) {
    margin-bottom: 0;
  }

  .packet_right_left p:nth-child(2),
  .packet_right_left p:nth-child(3) {
    font-size: 0.1rem;
    margin-bottom: 0;
  }

  .packet_left p:nth-child(3) {
    font-size: 0.1rem;
    color: #aaaaaa;
  }

  .packet_left span:nth-child(1) {
    font-size: 0.8rem;
  }

  .packet_left span {
    color: #ff5340;
    font-size: 1.5rem;
  }

  .discountsMD b {
    color: red;
  }

  .discountsMD img {
    width: 0.6rem;
  }

  .header_link {
    background: white;
  }

  .header_link a {
    width: 7.9rem;
    height: 3rem;
    line-height: 2.5rem;
    display: inline-block;
    color: black;
  }

  .header img {
    width: 0.8rem;
    height: 0.8rem;

  }
</style>
