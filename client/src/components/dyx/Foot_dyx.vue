<template>
      <van-tabbar>
        <ul class="foot">
        <li v-for="(val,index) in arrSign" :key="index" @click=" changePage(index)">
          <span :class="{'changeColor':isChange==index}"><i class="iconfont " v-html="val.name" ></i></span>
          <span>{{val.role}}</span>
        </li>
        </ul>
      </van-tabbar>
</template>

<script>
    export default {
        name: "Foot_dyx",
      data(){
          return{
            isChange:0,
          //底部标记
            arrSign:[
              {name:"&#xe60a;",role:"外卖",isShow:0},
              {name:"&#xe60b;",role:"搜索",isShow:1},
              {name:"&#xe609;",role:"订单",isShow:2},
              {name:"&#xe608;",role:"我的",isShow:3}
            ]
          }
      },
      methods:{
        changePage(v){
          // this.arrSign[v].isShow=true;
          // console.log(this.arrSign[v].isShow);
          switch(v) {
            case 0:
              this.isChange=0;
              this.$router.push({path:"/fastFood"});
              break;
            case 1:
              this.isChange=1;
              this.$router.push({path:"/searchProduct"});
              break;
            case 2:
              this.isChange=2;
              this.$router.push({path:"/order_nj"});
              break;
            case 3:
              this.isChange=3;
              this.$router.push({path:"/mine"});
              break;
          }
        },
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
  .foot i{
    width: 1.1718rem;
    margin-left:0.3rem;
    font-size: 1.3rem;
  }
  .foot span:nth-child(2){
    display: block;
    font-size: 0.75rem;
    margin-top: 0.3rem;
  }
  .changeColor{
    color:#3190e8;
  }
</style>
