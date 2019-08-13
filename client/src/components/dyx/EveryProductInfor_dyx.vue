<template>
    <div class="every">
        <!--头部导航-->
        <div class="head">
          <van-nav-bar  left-arrow  @click-left="onClickLeft"/>
          <span class="cityNa">{{EveryProductInfor.name}}</span>
        </div>
      <!--图片-->
      <div class="pic">
        <img :src="'//elm.cangdu.org/img/'+EveryProductInfor.image_path" alt="">
      </div>
      <!--底部详情-->
      <div class="bottom">
        <p>{{EveryProductInfor.description}}</p>
        <h4>{{EveryProductInfor.name}}</h4>
        <p>
          <span>评分</span>
          <span class="star">
            <van-rate v-model="EveryProductInfor.rating" allow-half void-icon="star"  void-color="#eee" :count="5"/>
          </span>
          <span class="gold">{{EveryProductInfor.rating}}</span>
        </p>
        <p>
          <span>月售{{EveryProductInfor.month_sales}}单</span>
          <span class="gold">售价￥{{EveryProductInfor.specfoods[0].price}}起</span>
        </p>
        <p>
          <span>评论数{{EveryProductInfor.rating_count}}</span>
          <span>好评率{{EveryProductInfor.satisfy_rate}}%</span>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "EveryProductInfor_dyx",
      data(){
          return{
            EveryProductInfor:{},
          }
      },
      methods:{
        onClickLeft() {
          this.$router.push({path: '/ProductDetails'})
        },
      },
      created(){
        this.EveryProductInfor=JSON.parse(localStorage["EveryProductInfor"]);
        console.log(this.EveryProductInfor)
      }
    }
</script>

<style scoped lang="less">
//图片
.pic{
  width: 100%;

  img{
    width: 100%;
  }
}
/*五角星*/
.star>div{
  display: inline-block;
  margin-top: -2rem;
  margin-right: 0.5rem;
}
.star i{
  width: 0.2rem;
  height: 0.2rem;
  font-size: 0.2rem;
  margin: 0.1rem;
}
  /*底部*/
  .bottom{
    width: 100%;
    height:15rem;
    background: white;
    font-size: 0.85rem;
    padding: 1rem;

    p,h4{
      padding: 0.5rem;
    }
    .gold{
      color:#ff6000;
    }
  }

</style>
