<template>
    <div>
      <!--顶部操作-->
      <div class="search">
        <div class="top_L">
          <router-link :to="{path:'/account_ldl'}">
            <van-icon name="arrow-left" class="vant_top1" :to="{path:'/account_ldl'}"></van-icon>
          </router-link>
          <h4 class="cityNa" :to="{path:'/account_ldl'}">修改用户名</h4>
        </div>
      </div>
      <!--输入框-->
      <div class="LmPass">
        <input type="text" placeholder="请输入10位卡号"  >
        <!--点击事件-->


      </div>
      <!--文字设置-->
      <div>
        <span v-show="one">用户只能修改一次(5-24字符之间)</span>
      </div>
      <!--点击按钮-->
      <div style="text-align: center">
        <van-button type="info" class="xxan_L">
          <span>信息按钮</span>
        </van-button>
      </div>
    </div>

</template>

<script>
    export default {
        name: "amend_ldl",
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
