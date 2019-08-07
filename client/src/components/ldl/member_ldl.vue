<template>
  <div>

    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/mine'}">
          <van-icon name="arrow-left" class="vant_top" :to="{path:'/mine'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/mine'}">会员中心</h4>
      </div>
    </div>
    <!--中间操作-->
    <div>
      <p style="line-height: 2.5rem">为账户***购买会员</p>
      <!--会员特权-->
      <van-cell title="会员特权" is-link value="会员说明" :to="{path:'/member/Discounts_ldl'}"></van-cell>
    </div>
    <!--减免配送费-->
    <div class="jianmian">
      <div class="distribution">
        <img src="../../assets/imgs/province.jpg" height="42.16" width="37.15" class="distribution_img" />
        <div class="distribution_div">
          <h4>减免配送费</h4>
          <p>每月减30单,每日可减免3单,每单最高减4元.</p>
          <p>蜂鸟转送专享</p>
        </div>
      </div>
      <!--减免配送费-->
      <div class="distribution">
        <img src="../../assets/imgs/subtract.jpg" height="42.16" width="37.15" class="distribution_img" />
        <div class="distribution_div">
          <h4>减免配送费</h4>
          <p>每月减30单,每日可减免3单,每单最高减4元.</p>
          <p>蜂鸟转送专享</p>
        </div>
      </div>
    </div>
    <!--开通会员-->
    <div class="jianmian" >
      <van-cell title="开通会员" />
      <!--下方布局-->
      <div class="jianmian_left">
        <!--左边布局-->
        <span>1个月 </span>
        <span class="jianmian_left_span">￥20</span>
        <!--右边布局-->
        <div class="jianmian_right" @click="shopping">
          <span>购买</span>
        </div>
      </div>
    </div>
    <!--兑换会员-->
    <div style="margin-bottom: 0.6rem;">
      <van-cell title="兑换会员" is-link value="使用卡号卡密"   :to="{path:'/member/conversion_ldl'}"></van-cell>

    </div>
    <!--购买记录-->
    <div style="margin-bottom: 0.6rem;">
      <van-cell title="购买记录" is-link value="开发票" :to="{path:'/member/record_ldl'}"></van-cell>
    </div>
  </div>

</template>

<script>
  export default {
    name: "member_ldl",
    methods:{
      shopping(){
        this.$router.push({path:'/member/purchase_ldl'})
      }

    }
  }
</script>

<style scoped>
  .search i {
    color: white;
  }
  /*顶部外围div*/

  .top_L {
    width: 100%;
    height: 2.7rem;
    background: rgb(49, 144, 232);
  }
  /*用插件做的样式*/

  .vant_top {
    line-height: 3rem;
    position: absolute;
    left: 0.8rem;
    font-size: 1.3rem
  }
  /*数据库首页传来的值的样式*/

  .cityNa {
    display: inline-block;
    width: 6rem;
    position: absolute;
    top: 1rem;
    left: 40%;
    color: white;
    z-index: 10;
    font-weight: bold;
  }
  /*减免配送费*/

  .jianmian {
    background: white;
    padding-left: 1rem;
    margin-bottom: 0.6rem;
  }
  /*配送费设置*/

  .distribution {
    border-top: 0.04rem solid rgba(0, 0, 0, 0.2);
    padding: 0.8rem 0;
    display: flex;
  }
  /*配送费设置里面的图片*/

  .distribution_img {
    vertical-align: middle;
  }
  /*配送费用里的div*/

  .distribution_div {
    line-height: 1.2rem;
    padding-left: 1rem
  }
  /*配送费用里面的p*/

  .distribution_div p {
    font-size: 0.4rem
  }
  /*开通会员里面s*/
  .jianmian_left{
    display: flex;line-height: 4rem
  }
  .jianmian_left_span{
    color: #ff6600;font-weight:bold
  }
  .jianmian_right{
    position: absolute;right: 1rem;width: 4rem
  }
  .jianmian_right span{
    height: 1rem;background: white;border-radius: 10%;border: 0.06rem solid #ff6600;padding: 0.3rem 0.7rem;color: #ff6600
  }



</style>
