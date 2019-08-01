<template>
  <!--外卖-->
    <div class="fastFood">
      <div class="head">
        <van-nav-bar title="标题" right-text="登录|注册" right-arrow  @click-left="onClickLeft" @click-right="onClickRight">
          <van-icon name="search" slot="left" />
        </van-nav-bar>
      </div>
      <!--底部栏-->
      <Foot></Foot>
    </div>
</template>

<script>
  import Foot from '../components/Foot_dyx'
    export default {
        name: "FastFood_dyx",
      data(){
          return{
            address:"杭州",
          }
      },
      methods: {
        onClickLeft() {
          this.$router.push({path:'/login'});
        },
        onClickRight() {
          this.$router.push({path:'/searchCity'});
        }
      },
      components:{Foot}
    }
</script>

<style scoped>

.head div{
  background: blue;
  color: white;
  font-size: 1.125rem;
}
  .head span, .head i{
    color: white;
  }
</style>
