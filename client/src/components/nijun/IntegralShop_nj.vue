<template>
    <div class="Integral">
      <div class="Position text-center">
        <div class="again">请重新进入</div>
        <p>返回之后从新进入积分商城~</p>
        <img src="//yun.duiba.com.cn/webapp/img/retrylogin.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "IntegralShop_nj"
    }
</script>

<style scoped>
  .Integral{
    position: relative;
  }
  img{
    width: 11rem;
    height:11rem;
  }
  .again{
    font-size: 2rem;
    font-weight: 600;
    color: #0d7fd5;
  }
  p{
    font-size: 1.2rem;
    margin: 1rem;
  }

  .Position{
    position: absolute;
    top: 8rem;
    left: 0;
    right: 0;
  }
</style>
