<template>
  <div>

    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/member'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/member'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/member'}">兑换会员</h4>
      </div>
    </div>
    <span style="line-height: 3rem">成功兑换后将关联到当前帐号： 12312ascdsASD</span>
    <div class="LmPass">
      <input type="text" placeholder="请输入10位卡号" style="font-size: 1rem" >
      <input  placeholder="请输入6位卡密" style="font-size: 1rem">
      <van-button type="info" class="xxan_L"><span>信息按钮</span></van-button>
    </div>
    <div style="width: 70%;margin: 1.5rem auto;color: #AAAAAA" class="botton">
      <h3 style="text-align: center;margin-bottom: 1rem;font-size: 1rem">——温馨提示——</h3>
      <p>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p>月卡：30次减免配送费</p>
      <p>季卡：90次减免配送费。</p>
      <p>年卡：360次减免配送费。</p>
      <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>




    </div>
  </div>
</template>

<script>
  export default {
    name: "conversion_ldl",
    data(){
      return{
        password:""
      }
    }
  }
</script>

<style scoped>
  /*<!--下面布局-->*/

  .botton p{
    font-size: 0.78rem;line-height: 1.2rem;
  }


  /*信息按钮*/

  .xxan_L {
    background: #CCCCCC;
    border: #CCCCCC;
    border-radius: 0.2rem;
    width: 90%;
    margin-top: 0.8rem;
    height: 3rem;
  }
  .xxan_L span{
    font-weight: 500;
    font-size: 1.1rem;
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





  .L_head span{
    font-size: 0.8rem;
    font-weight: bold;
  }
  .LmPass{
    /*margin:0.8rem 0;*/
    text-align: center;
  }
  .LmPass input{
    height: 3.1rem;
    border-bottom: 0.0625rem solid #e4e4e4;
  }
  input{
    line-height: 2.3rem;
    font-size: 0.7rem;
    width: 100%;
    border: 0;
    padding-left: 0.6rem;
    outline: none;

  }
  .LmPass button{
    width: 90%;
  }
  .LmPass p,p:first-child{
    margin-top: 0.3rem;
    color: red;
    font-size: 0.6rem;
  }
  .Alert p{
    font-size: .9rem;
    margin: .8rem 0;
  }

</style>
