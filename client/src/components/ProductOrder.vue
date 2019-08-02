<template>
  <div class="order">
    <van-nav-bar
      title="订单列表"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>

    export default {
        name: "ProductOrder",
      methods:{
        onClickLeft(){
          this.$router.push({path:"/searchProduct"})
        }
      }
    }
</script>

<style scoped>
  .order{
    width: 100%;
    height: 2.856rem;
  }
  .order div{
    background: #3190e8;
    color: white;
    font-size: 1.125rem;
    font-weight: bolder;
  }
  .order i{
    width:1.125rem;
    color:white;
  }
</style>
