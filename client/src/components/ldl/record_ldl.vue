<template>
  <div>
    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/member'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/member'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/member'}">购买记录</h4>
      </div>
    </div>
    <div style="margin: 8rem auto;width: 100%;text-align: center;height: 100%;">
      <img src="../../assets/imgs/record.png" style="width: 70%"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "record_ldl"
  }
</script>

<style scoped>
  #home{
    background: white;
    height: 100%;
    width: 100%;
  }
  .search i {
    color: white;
  }
  /*顶部外围div*/

  .top_L {
    width: 100%;
    height: 3rem;
    background: rgb(49, 144, 232);
  }
  /*用插件做的样式*/

  .vant_top1 {
    line-height: 3rem;
    position: absolute;
    left: 0.8rem;
    font-size: 1.3rem
  }
  .cityNa {
    display: inline-block;
    width: 80%;
    position: absolute;
    top: 1rem;
    text-align: center;
    left: 10%;
    color: white;
    z-index: 10;
    font-weight: bold;
  }
</style>
