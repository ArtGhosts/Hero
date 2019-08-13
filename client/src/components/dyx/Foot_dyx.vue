<template>
      <van-tabbar>
        <ul class="foot">
          <li>
            <router-link :to="{path:'/fastFood'}" exact>
              <span><i class="iconfont ">&#xe60a;</i></span>
              <span>外卖</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/searchProduct'}" exact>
              <span><i class="iconfont " >&#xe60b;</i></span>
              <span>搜索</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/order_nj'}" exact>
              <span><i class="iconfont " >&#xe609;</i></span>
              <span>订单</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/mine'}" exact>
              <span><i class="iconfont">&#xe608;</i></span>
              <span>我的</span>
            </router-link>
          </li>
        </ul>
      </van-tabbar>
</template>

<script>
    export default {
        name: "Foot_dyx",
    }
</script>

<style scoped>
  a{
  color :#333;
  }
  .router-link-exact-active{
    color:#3190e8;
  }
  .foot{
    width: 100%;
    text-align: center;
  }

.foot>li{
  display: inline-block;
  padding-top:0.625rem;
  width: 25%;
 float: left;
}

  .foot span:nth-child(2){
    display: block;
    font-size: 0.75rem;
    margin-top: 0.3rem;
  }
</style>
