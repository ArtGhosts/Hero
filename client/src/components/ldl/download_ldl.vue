
<template>
  <div>
    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/mine'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/mine'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/mine'}">下载</h4>
      </div>
    </div>
    <!--图片-->
    <div class="tp">
      <img src="../../assets/imgs/download.jpg" height="180" width="180" />
      <h4 class="to_p">下载饿了么APP</h4>
    </div>
    <!--点击按钮-->
    <div class="alert  text-center LmAlert   button">
      <van-button type="primary" v-show="mama" @click="mama1" class="click_1">下载</van-button>

      <!--即将消息的标签-->
      <transition enter-active-class="animated bounceIn" leave-active-class="">
        <div class="click_1_div" v-show="baba">
          <img src="../../assets/jinggaokuang.png" height="100" width="100" />
          <p>ISO用户请前往AppStore下载</p>
          <button class="btn btn-success btn-group btn-block" @click="baba1" style="margin-top: 1rem">确认</button>
        </div>
      </transition>

    </div>

  </div>
</template>

<script>
  import "../../../node_modules/animate.css/animate.css"
  export default {
    name: "download_ldl",
    data() {
      return {
        show: true,
        mama: true,
        baba: false
      }

    },
    methods: {
      mama1() {
        this.baba = true
      },
      baba1() {
        this.baba = false
      },
    }
  }
</script>

<style scoped>
  body,
  html {
    height: 100%;
    width: 100%;
    background: white;
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
  /*数据库首页传来的值的样式*/

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
  /*图片外面的div*/

  .tp {
    text-align: center;
    margin-top: 2rem
  }
  /*文字*/

  .to_p {
    margin-top: 0.5rem;
  }
  /*图片*/

  .tp img {
    border-radius: 10%
  }
  /*d点击按钮外面div*/

  .button {
    height: 5rem;
    width: 100%;
    text-align: center;
    margin-top: 0.3rem
  }
  /*点击按钮*/

  .click_1 {
    width: 95%;
    border-radius: .2rem
  }
  /*里面的div*/

  .click_1_div {
    position: absolute;
    top: 10rem;
    left: 2rem;
    border-radius: 5%;
    background: white;
    width: 20rem;
    padding: 2rem;
  }
</style>
