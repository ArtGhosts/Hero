<template>
  <div>
    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/account_ldl'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/account_ldl'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/account_ldl'}">编辑地址</h4>
      </div>
    </div>


    <van-cell is-link style="border-top: 0.06rem solid rgba(0,0,0,0.2);border-bottom: 0.06rem solid rgba(0,0,0,0.2)" :to="{path:'/member/consignee_ldl'}" >
      <template slot="title">
        <span class="custom-title">新增地址</span>
      </template>
    </van-cell>
  </div>

</template>

<script>
  export default {
    name: "consignee_ldl",
    data(){
      return{
        one:true
      }

    },
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
  .LmPass{
    text-align: center;
  }
  .LmPass input{
    padding-left: 0.6rem;
    margin: 0.7rem 0 0.7rem 0;
    border: 0.02rem solid rgba(0,0,0,0.3);
    font-size: 1rem;
    width: 90%;
    background: #f2f2f2;
    line-height: 2.6rem;
  }

  .LmPass button{
    width: 90%;
  }
  /*信息按钮*/

  .xxan_L {

    border-radius: 0.2rem;
    width: 90%;
    margin-top: 0.8rem;
    height: 3rem;
  }
  .xxan_L span{
    font-weight: 500;
    font-size: 1.1rem;
  }
</style>
