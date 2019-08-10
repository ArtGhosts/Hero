<template>
    <div class="details">
      <div>
        <!--头部-->
        <div class="nav">
          <!--左箭头-->
          <span>
            <van-icon name="arrow-left" @click="backFastFood"/>
          </span>
          <!--内容部分-->
          <div class="center">
            <img :src="'//elm.cangdu.org/img/'+
proDetails.image_path" alt="">
            <div class="foodInfor">
              <h4>{{proDetails.name}}</h4>
              <div class="twoRol">
                <span>商家配送 /</span>
                <span>分钟送达/</span>
                <span>配送费￥{{proDetails.float_delivery_fee}}</span>
                <!--右箭头-->
                <van-icon name="arrow"  class="pull-right" @click="backFastFood"/>
              </div>
              <p>公告:{{proDetails.float_minimum_order_amount}}</p>
            </div>
          </div>

        </div>
        <!--商品和评价-->
        <ul class="twoCentent">
          <li>
            <span :class="{'list1':isShow1}" @click="showProduct">商品</span>
          </li>
          <li>
            <span :class="{'list1':isShow2}" @click="showReview ">评价</span>
          </li>
        </ul>
        <!--商品区-->
        <RouterView></RouterView>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ProductDetails_dyx",
      data(){
          return{
          //商品详情信息
            proDetails:{},
          //商品变换样式
            isShow1:false,
            //评价变换样式
            isShow2:false,
          //是否改变
            isChang1:true
          }
      },
      methods: {
        backFastFood() {
          this.$router.push({path: "/fastfood"})
        },
        //  商品展示
        showProduct() {
          this.isShow1 = true;
          this.isShow2 = false;
          this.$router.push({path: "/ProductDetails/AllProduct"})
        },
        //  评论展示
        showReview() {
          this.isShow2 = true;
          this.isShow1 = false;
          this.$router.push({path: "/ProductDetails/AllReview"})
        },
      },

      created() {
        this.proDetails = JSON.parse(localStorage["proDetails"]);
        // console.log(this.proDetails)
      }
    }
</script>

<style scoped lang="less">
//头部
  .nav{
    width: 100%;
    height:5.613rem;
    padding:0.5652rem 0 0.5652rem 0.5652rem;
    background: rgba(119,103,137,0.43);
    position: relative;
    color:white;
    font-size: 0.9rem;


    /*图片*/
    img{
      width: 4.2418rem;
      line-height: 5.613rem;
      border-radius: 0.1rem;
    }

    i:nth-child(1){
     font-size:1.8rem;
      color: white;
      position: absolute;
      top:0rem;
      left: 0rem;
    }

    .foodInfor{
      display: inline-block;
      width:18.125rem;
      position: absolute;
      top: 0.5652rem;
      right: 0;

      .twoRol{
        margin: 0.5rem 0;
      }
    }
  }

/*内容*/
.twoCentent{
  width: 100%;
  height:3.18rem;
  line-height: 3.18rem;
  font-size: 1rem;
  background: white;
  border-bottom:0.0625rem solid #e4e4e4;

  li{
    display: inline-block;
    width: 49%;
    text-align: center;
  }

  .list1{
    color: #3190e8;
    border-bottom: 0.2rem solid #3190e8;
  }
}
</style>
