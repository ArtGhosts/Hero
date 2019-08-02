<template>
    <div class="mine">
       <!--头部-->
      <div class="top1">
        <van-nav-bar
          title="我的"
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
    </div>

</template>

<script>

    export default {
        name: "Mine",
      methods:{
        onClickLeft(){
          this.$router.push({path:"/order"})
        }
      }
    }
</script>

<style scoped>
  /*我的*/
  .top1{
    width: 100%;
    height: 2.856rem;
  }
.top1 div{
    background: #3190e8;
  color: white;
  font-size: 1.125rem;
  font-weight: bolder;
  }
  .top1 i{
    width:1.125rem;
    color:white;
  }
  /*登录注册*/

</style>
