<template>
  <div class="exchangeHB">
    <!--小兰头-->
    <div class="head">
      <van-nav-bar  left-arrow  title="兑换红包" @click-left="onClickLeft"/>
    </div>

    <div class="Box" style="width: 100%; height: 100%;">
      <div class="text-center">
        <input type="text"placeholder="请输入兑换码">
        <div style="margin-top: 0.8rem" class="clearfix">
          <input type="text" maxlength="4" placeholder="验证码" class="pull-left" >
          <div class="pull-right clearfix">
            <!--<img :src="Code" alt="" class="pull-left">-->
            <a class="AuthCode" style="display: inline-block;">
              <span style="color: gray;">看不清</span>
              <p class="btn-link">换一张</p>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center" style="margin-top: 1rem">
        <button :class="{btn:true}">兑换</button>
      </div>
      <!--<Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "exchangeHB",
    methods: {
      onClickLeft() {
        this.$router.push({path:'/hongbao'})
      }
    },
  }
</script>

<style scoped>
  .AuthCode {
    font-size: 0.53rem;
  }
</style>
