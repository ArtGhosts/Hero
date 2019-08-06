<template>
    <div class="categroy">
      <div class="allhead">
        <!--头部导航-->
        <div class="head">
          <van-nav-bar  left-arrow  @click-left="onClickLeft"/>
          <span class="cityNa">{{title}}</span>
        </div>

        <!--下拉列表-->
        <section class="list">
          <div class="pull-left">
            <span v-if="isChange">{{title}}</span>
            <span v-else>分类</span>
            <span @click="clickPoint">
                <i class="iconfont"  :class="{newCss:!isChange}">&#xe623;</i>
            </span>
          </div>
          <div class="pull-left">
            <span>排序</span>
            <i class="iconfont">&#xe623;</i>
          </div>
          <div class="pull-left">
            <span>筛选</span>
            <i class="iconfont">&#xe623;</i>
          </div>
        </section>
      </div>

      <!--点击之后出现下拉列表的内容-->
        <div class="allMask">
          <div class="mask" v-if="!isChange">

            <!--分类列表-->
            <ul class="lists pull-left">
              <li>
                <span>{{food.name}}</span>
                <span>{{food.count}}</span>
              </li>
              <li v-for="(val,index) in categoryList" :key="index" @click="suibian(val)" :style="{changeColor:isShow}">
                <!--<img src="https://fuss10.elemecdn.com/b/ff/"+val.image_url>-->
                <span>{{val.name}}</span>
                <span>{{val.count}}</span>
                <span>></span>
              </li>
            </ul>
            <!--商品齐分类详情-->
            <ul class="lists pull-left">
              <router-view></router-view>
            </ul>
          </div>
        </div>
      <!--商品信息-->
      <div class="productInform">
        <ul v-for="(val,index) in listOfNearbyMerchants" :key="index" class="nearbyShops">
          <li>
            <img :src="'//elm.cangdu.org/img/'+
val.image_path" alt="">
            <div class="right">
              <!--商品第一行-->
              <div class="infroms">
                <h4><span class="pBrand">品牌</span>{{val.name}}</h4>
                <span>保</span>
                <span>准</span>
                <span>票</span>
              </div>
              <!--商品第二行-->
              <div class="salesVolume">
                <van-rate v-model="val.rating" allow-half void-icon="star"  void-color="#eee" :count="5"/>
                <span class="rate">{{val.rating}}</span>
                <span>月销{{val.recent_order_num}}单</span>
                <span class="send">蜂鸟专送</span>
                <span class="arrive">准时达</span>
              </div>
              <!--商品第三行-->
              <div class="money">
                <span>￥{{val.float_minimum_order_amount}}起送/配送费约￥{{val.float_delivery_fee}}</span>
                <span>{{val.distance}}/</span>
                <span>{{val.order_lead_time}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  //导航样式
  import "../../assets/css/NavigationStyle.css"
    //附近商家样式
  import  "../../assets/css/NearbyShopsStyle.css"
    export default {
        name: "FastFood_categroy_dyx",
      data(){
          return{
            //导航标题
            cityNa:'',
          //分类标题
            title:'',
          //点击甜品饮品切换分类
            isChange:true,
          //  商品分类列表
            categoryList:[],
            // 存储点击的按钮
            selectBtn:"全部",
          //  异国料理
            food:{},
          //修改背景
            changeColor:{'background':'white'},
            isShow:false
          }

      },
      methods:{
        onClickLeft(){
          this.$router.push({path:'/FastFood'})
        },
      //点击箭头显示内容
        clickPoint(){
          this.isChange=!this.isChange
        },
        //点击酚类出现相应的内容
        suibian(val){
          this.isShow=!this.isShow;
          console.log(val)
          this.$router.push({path:"/lunch"})
        }
      },
      computed:{
        listOfNearbyMerchants(){
          return this.$store.state.shopsInfor.pInfor;
        }
      },
      //获取传来的值
      created(){
      //从localStorage中获取分类标题
        this.title=localStorage["title"];
        //获取附近商家信息
        this.$store.dispatch('getShopsInfor');

      //  获取分类的名字
        Vue.axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category").then((result)=>{
          console.log(result.data);
          this.food=result.data[0];

          this.categoryList=result.data.splice(1);
          console.log(this.food, this.categoryList)
        }).catch((err)=>{
          console.log(err)
        })
      },
    }
</script>

<style scoped>
  .categroy {
    position: relative;
  }
  .head>div{
    height: 2.875rem;
  }
/*下拉选框*/
  .list{
    width: 100%;
    height:2.3437rem;
    background: white;
    border-bottom:0.0625rem solid #e4e4e4;
  }

.list div{
  width: 7.75rem;
  line-height:1.875rem;
  text-align: center;
  font-size: 0.75rem;
  padding-top: 0.4375rem;
}

.list div:nth-child(2){
  border-left:0.0625rem solid #e4e4e4;
  border-right:0.0625rem solid #e4e4e4;
}
/*下拉箭头*/
.list i{
  font-size: 0.625rem;
}
/*下拉箭头动画效果*/
@keyframes turnPoint {
  0%{
    transform: rotateX(0deg);
  }
  50%{
    transform: rotateX(180deg);
  }
  100%{
    transform: rotateX(0deg);
  }
}
/*点击后的css样式*/
.newCss{
  color:#3190e8;
  animation: turnPoint 1s linear ;
}

/*蒙板*/
  .allMask{
    font-size: 0.75rem;
  }
.mask{
   width: 100%;
   height: 36.4875rem;
   background: rgba(0,0,0,0.3);
   position: fixed;
   top:5rem;
   left: 0;
   z-index: 10;
 }
  .lists{
    width: 50%;
    background: white;
  }
  .lists:nth-child(1){
    background:#e4e4e4;
  }
  .lists li{
    width: 11.3525rem;
    height:2.625rem;
    line-height:2.625rem;
    margin: 0 auto;
  }
  .lists span:nth-child(2){
    display: inline-block;
    width:3rem;
    height: 1.5rem;
    line-height:1.5rem;
    margin-left: 3.5rem;
    border-radius: 0.6rem;
    background: #ccc;
    text-align: center;
    margin-bottom: 0;
    color: white;
  }
  .lists span:nth-child(3){
    display: inline-block;
    margin-left:0.5rem;
  }
/*商家信息*/
  .productInform{
    margin-top:5.1rem;
  }
.productInform ul:nth-child(1){
  padding-top: 0.3rem;
}

</style>
