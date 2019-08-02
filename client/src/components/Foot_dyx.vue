<template>
      <van-tabbar>
        <ul class="foot">
        <li>
          <img v-if="isShow" src="../../static/home-selected.png" alt="" @click=" changePage1">
          <img v-else src="../../static/home.png" >
          <span>外卖</span>
        </li>
        <li>
          <img v-if="isShow" src="../../static/order.png" @click=" changePage2" >
          <img v-else src="../../static/order-selected.png" alt="">
          <span>搜索</span>
        </li>
        <li>
          <img v-if="isShow" src="../../static/find.png" @click=" changePage3">
          <img v-else src="../../static/find-selected.png">
          <span>订单</span>
        </li>
        <li>
          <img v-if="isShow" src="../../static/mine.png" @click=" changePage4">
          <img v-else src="../../static/mine-selected.png">
          <span>我的</span>
        </li>
        </ul>
      </van-tabbar>
</template>

<script>
    export default {
        name: "Foot_dyx",
      data(){
          return{
            isShow:true,
          }
      },
      methods:{
        changePage1(){
          this.isShow=false;
          this.$router.push({path:"/fastFood"})
        },
        changePage2(){
          this.$router.push({path:"/searchProduct"})
        },
        changePage3(){
          this.$router.push({path:"/order"})
        },
        changePage4(){
          this.$router.push({path:"/mine"})
        }
      }

    }
</script>

<style scoped>
  .foot{
    width: 100%;
    text-align: center;
  }

.foot>li{
  padding-top:0.625rem;
  width: 25%;
 float: left;
}
  .foot img{
    width: 1.1718rem;
    margin-left:0.3rem ;
  }
  .foot span {
    display: block;
    font-size: 0.75rem;
  }
</style>
