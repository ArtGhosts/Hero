
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
            <span @click="clickPoint(1)">
                <i class="iconfont"  :class="{newCss:isChange1}">&#xe623;</i>
            </span>
          </div>
          <div class="pull-left">
            <span>排序</span>
            <span @click="clickPoint(2)" >
               <i class="iconfont" :class="{newCss:isChange2}">&#xe623;</i>
            </span>

          </div>
          <div class="pull-left">
            <span>筛选</span>
            <span @click="clickPoint(3)">
              <i class="iconfont" :class="{newCss:isChange3}">&#xe623;</i>
            </span>
          </div>
        </section>
      </div>

      <!--点击分类之后出现下拉列表的内容-->
        <div class="allMask">
          <!--点击分类之后出现下拉列表的内容-->
          <div class="mask" v-if="isChange1">
            <!--分类列表-->
            <ul class="lists pull-left">
              <li>
                <span>{{food.name}}</span>
                <span class="count">{{food.count}}</span>
              </li>
              <li v-for="(val,index) in categoryList" :key="index" @click="foodDetails(index)" :class="{changeColor:isShow}">
                <img :src="getImgPath(val.image_url)">
                <span>{{val.name}}</span>
                <span>{{val.count}}</span>
                <span>></span>
              </li>
            </ul>
            <!--商品齐分类详情-->
            <ul class="lists pull-left" >
              <li v-for="(val,index) in allFood" :key="index">
                <span>{{val.name}}</span>
                <span class="pull-right">{{val.count}}</span>
              </li>
            </ul>
          </div>
          <!--点击排序之后出现下拉列表的内容-->
          <div class="mask" v-if="isChange2">
            这是排序
          </div>
          <!--点击筛选之后出现下拉列表的内容-->
          <div class="mask" v-if="isChange3">
              这是筛选
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
  import "../../../node_modules/animate.css/animate.css"
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
            //商品分类的详情商品
            allFood:[],
            // 存储点击的按钮
            selectBtn:"全部",
          //  异国料理
            food:{},
            isShow:false,
          //分类内容
            isChange1:false,
            //排序内容
            isChange2:false,
            //筛选内容
            isChange3:false,
          }

      },
      methods:{
        onClickLeft(){
          this.$router.push({path:'/FastFood'})
        },
      //点击箭头显示内容
        clickPoint(){
          this.isChange=!this.isChange;

        },
        getImgPath(path){
          //传递过来的图片地址需要处理后才能正常使用
          let suffix;
          if (!path) {
            return '//elm.cangdu.org/img/default.jpg'
          }
          if (path.indexOf('jpeg') !== -1) {
            suffix = '.jpeg'
          } else {
            suffix = '.png'
          }
          let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
          return 'https://fuss10.elemecdn.com' + url
        },

        //点击酚类出现相应的内容
        foodDetails(index){
          // this.isShow=true;
         this.allFood=this.categoryList[index].sub_categories
        },
        clickPoint(sign){
          if(sign==1){
            this.isChange1=!this.isChange1;
            this.isChange2=this.isChange2;
            this.isChange3=this.isChange3;
          }else if(sign==2){
            this.isChange2=!this.isChange2;
            this.isChange1=this.isChange1;
            this.isChange3=this.isChange3;
          }else if(sign==3){
            this.isChange3=!this.isChange3;
            this.isChange2=this.isChange2;
            this.isChange1=this.isChange1;
          }
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
          console.log(this.food, this.categoryList);
          console.log(this.allFood)
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
    transform: rotateZ(0deg);
  }

  100%{
    transform: rotateZ(180deg);
  }
}
/*点击后的css样式*/
.newCss{
  color:#3190e8;
  animation: turnPoint 1s linear;
}
  /*//修改背景*/
    .changeColor{
        background:white;
    }
/*蒙板*/
  .allMask{
    font-size: 0.75rem;
    animation: slideOutDown 1s linear;
  }
.mask{
   width: 100%;
   height: 36.4875rem;
   background: rgba(0,0,0,0.3);
   position: fixed;
   top:5.2rem;
   left: 0;
   z-index: 10;
  border-bottom: 0.0625rem solid #e4e4e4;
 }
  .lists{
    width: 50%;
    background: white;
  }
  .lists:nth-child(1){
    background:#e4e4e4;
  }
  .lists:nth-child(2){
    height:64.95%;
    overflow: hidden;
    overflow-y:auto;
  }
  .lists:nth-child(2) li{
    width: 95%;
    padding-left: 0.5rem;
    border-bottom: 0.0625rem solid #e4e4e4;
  }
  .lists li{
    width: 11.3525rem;
    height:2.625rem;
    line-height:2.625rem;
    margin: 0 auto;
  }
  .mask img{
    width: 1.178rem;
    vertical-align: middle;
  }
  .lists span:nth-child(3),.count{
    display: inline-block;
    width:3rem;
    height: 1.5rem;
    line-height:1.5rem;
    margin-left: 2rem;
    border-radius: 0.6rem;
    background: #ccc;
    text-align: center;
    margin-bottom: 0;
    color: white;
  }
  .count{
    margin-left: 3rem;
  }
  .lists span:nth-child(4){
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
