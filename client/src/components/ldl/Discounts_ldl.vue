<template>
  <div style="background: white;">
    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/member'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/member'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/member'}">我的优惠</h4>
      </div>
    </div>
    <div>
      <p style="margin:  1rem auto;width: 70%;font-size: 0.9rem;line-height: 1.2rem;color: #666;color: black">
        尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
      </p>
    </div>
    <div class="baba">
      <h3>Q1:特选介绍</h3>
      <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
      <span>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</span>
      <p>更多特权，敬请期待！</p>
      <h3>Q2:资费介绍</h3>
      <span>饿了么会员卡：20元</span>
      <br>
      <h3>Q3:使用说明</h3>
      <span>当用户满足以下任一条件，会员服务自动失效：</span>
      <br>
      <span>自绑定之日起超过31天；
在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</span>
      <h3>Q4:购卡说明</h3>
      <span>在线购买：饿了么App>我的>饿了么会员卡</span>
      <h3>Q5:温馨提示</h3>
      <span>用户在当前会员服务失效前，无法购买新卡。</span>
      <span>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</span>

    </div>


  </div>
</template>

<script>
  export default {
    name: "Discounts_ldl"
  }
</script>

<style scoped>

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
  .baba{
    padding-left: 1rem;
  }
  .baba h3{
    color: #333;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: .7rem ;
    margin-top: .7rem ;

  }
  .baba span{
    line-height: 1.2rem;
    font-size:1rem;
    color: black;
    /*margin-bottom: 2rem;*/
  }
  .baba p{
    line-height: 1.2rem;
    font-size: 0.9rem;

  }




</style>
