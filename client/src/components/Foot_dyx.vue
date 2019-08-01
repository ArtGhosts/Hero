<template>

      <van-tabbar>
        <ul class="foot">
        <li>
          <img src="../../static/home.png">
          <span>外卖</span>
        </li>
        <li>
          <img src="../../static/order.png">
          <span>搜索</span>
        </li>
        <li>
          <img src="../../static/find.png">
          <span>订单</span>
        </li>
        <li>
          <img src="../../static/mine.png">
          <span>我的</span>
        </li>
        </ul>
      </van-tabbar>
</template>

<script>
    export default {
        name: "Foot_dyx"
    }
</script>

<style scoped>
li{
 float: left;
}
  .foot img{
    width: 1rem;
    margin-left:0.3rem ;
  }
  .foot span{
    display: block;
    font-size: 0.75rem;
  }
</style>
