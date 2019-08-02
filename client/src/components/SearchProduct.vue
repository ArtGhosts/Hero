<template>
    <div class="searchProduct">
      <van-nav-bar
        title="搜索"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
</template>

<script>

    export default {
        name: "SearchProduct",
      methods:{
        onClickLeft(){
          this.$router.push({path:"/fastFood"})
        }
      }
    }
</script>

<style scoped>
  .searchProduct{
    width: 100%;
    height: 2.856rem;
  }
  .searchProduct div{
    background: #3190e8;
    color: white;
    font-size: 1.125rem;
    font-weight: bolder;
  }
  .searchProduct i{
    width:1.125rem;
    color:white;
  }
</style>
