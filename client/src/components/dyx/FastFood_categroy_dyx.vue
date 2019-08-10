
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
                <i class="iconfont"  :class="{'newCss':isChange1}">&#xe623;</i>
            </span>
          </div>
          <div class="pull-left">
            <span>排序</span>
            <span @click="clickPoint(2)" >
               <i class="iconfont" :class="{'newCss':isChange2}">&#xe623;</i>
            </span>

          </div>
          <div class="pull-left">
            <span>筛选</span>
            <span @click="clickPoint(3)">
              <i class="iconfont" :class="{'newCss':isChange3}">&#xe623;</i>
            </span>
          </div>
        </section>
      </div>

        <div class="allMask">
          <!--点击分类之后出现下拉列表的内容-->
          <transition enter-active-class="animated slideInDown" leave-active-class="animated fade" mode="out-in">
            <div class="mask" v-if="isChange1">
              <!--分类列表-->
              <ul class="lists pull-left">
                <li>
                  <span>{{food.name}}</span>
                  <span class="count">{{food.count}}</span>
                </li>
                <li v-for="(val,index) in categoryList" :key="index" @click="foodDetails(index)" :class="{'changeColor':isShow}">
                  <img :src="getImgPath(val.image_url)">
                  <span>{{val.name}}</span>
                  <span>{{val.count}}</span>
                  <span>></span>
                </li>
              </ul>
              <!--商品齐分类详情-->
              <ul class="lists pull-left" >
                <li v-for="(val,index) in allFood" :key="index" @click="getSelectFood(val)">
                  <span>{{val.name}}</span>
                  <span class="pull-right">{{val.count}}</span>
                </li>
              </ul>
            </div>
          </transition>
          <!--点击排序之后出现下拉列表的内容-->
          <transition enter-active-class="animated slideInDown" leave-active-class="animated fade" mode="out-in">
          <ul class="mask mask1" v-if="isChange2">
            <li v-for="(val,index) in sortProduct" :key="index" @click="reSortProduct(index+1)">
              <span><i class="iconfont" :class="{'color1':'true'}" v-html="val.sign"></i></span>
              <p class="pull-right">
                <span class="pull-left">{{val.name}}</span>
              <span v-if="val.select" class="deleteB pull-right"><i class="iconfont" :style="{color:'#3190e4'}">&#xe65b;</i></span></p>
            </li>
          </ul>
          </transition>
          <!--点击筛选之后出现下拉列表的内容-->
          <transition enter-active-class="animated slideInDown" leave-active-class="animated fade" mode="out-in">
            <div class="mask mask2" v-if="isChange3">
              <div class="mask_top">
                <p>配送方式</p>
                <div @click="isChangeSend=!isChangeSend">
                  <span v-if="!isChangeSend"><i class="iconfont" :style="{'color':'#27a9e1'}">&#xe601;</i></span>
                  <span v-else><i class="iconfont" :style="{color:'#3190e4'}">&#xe65b;</i></span>
                  <span :class="{'color5':isChangeSend}">{{this.sendMethod.text}}</span>
                </div>
              </div>
              <div class="mask_bottom">
                <p>商家属性(可以多选)</p>
                <ul>
                  <li v-for="(val,index) in allShopSelect" :key="index" @click="ChangeSend(val)">
                    <div>
                      <span v-if="val.select"><i class="iconfont" :style="{'color':'#27a9e1'}" v-html="val.sign"></i></span>
                      <span v-else class="deleteB"><i class="iconfont" :style="{color:'#3190e4'}">&#xe65b;</i></span>
                      <span :class="{'color5':!val.select}">{{val.name}}</span>
                    </div>
                  </li>
                </ul>
                <div class="sub">
                  <button @click="notSelect">清空</button>
                  <button>确定{{productCount==0?allCount:productCount}}</button>
                </div>
              </div>
            </div>
          </transition>
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
          return {
            //导航标题
            cityNa: '',
            //分类标题
            title: '',
            //获取所有附近商品
            listOfNearbyMerchants:[],
            //点击甜品饮品切换分类
            isChange: true,
            //  商品分类列表
            categoryList: [],
            //商品分类的详情商品
            allFood: [],
            // 存储点击的按钮
            selectBtn: "全部",
            //  异国料理
            food: {},
            isShow: false,
            //分类内容
            isChange1: false,
            //排序内容
            isChange2: false,
            //筛选内容
            isChange3: false,
            //配送方式
            sendMethod: {},
            //选择配送方式
            isChangeSend: false,
            //排序数组
            sortProduct: [
              {sign: '&#xe60f;', name: "智能排序",select:false},
              {sign: '&#xe600;', name: "距离最近",select:false},
              {sign: '&#xe6d4;', name: "销量最高",select:false},
              {sign: '&#xe605;', name: "起送价最低",select:false},
              {sign: '&#xe63b;', name: "配送速度最快",select:false},
              {sign: '&#xe65d;', name: "评分最高",select:false},
            ],
            // 商家所有属性
            allShopSelect: [
              {sign: '&#xe605;', name: "品牌商家", select: true},
              {sign: '&#xe6d5;', name: "外卖保", select: true},
              {sign: '&#xe6d5;', name: "准时达", select: true},
              {sign: '&#xe610;', name: "新店", select: true},
              {sign: '&#xe649;', name: "在线支付", select: true},
              {sign: '&#xe607;', name: "开发票", select: true},
            ],
            allCount:'',
          }
      },
      methods: {
        onClickLeft() {
          this.$router.push({path: '/FastFood'})
        },
        //点击箭头显示内容
        clickPoint() {
          this.isChange = !this.isChange;
        },
        //对分类图片做的处理
        getImgPath(path) {
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
        foodDetails(index) {
          // this.isShow=true;
          this.allFood = this.categoryList[index].sub_categories
          console.log(this.allFood)
          // this.categoryList[index].level=0
          // if(this.categoryList[index].level==0){
          //   this.isShow=1;
          // }
        },
        //点击箭头变色
        clickPoint(sign) {
          if (sign == 1) {
            this.isChange1 = !this.isChange1;
            this.isChange2 = false;
            this.isChange3 = false;

          } else if (sign == 2) {
            this.isChange2 = !this.isChange2;

            this.isChange1 = false;
            this.isChange3 = false;

          } else if (sign == 3) {
            this.isChange3 = !this.isChange3;
            this.isChange1 = false;
            this.isChange2 = false;

          }
        },
        //点击获取商家详情
        getSelectFood(v) {
          this.cityNa=v.name;
            this.title=v.name;
          console.log(v.id,v.name);
          //通过传参获取改id对应的视频数据
          Vue.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]="+v.id).then((result) => {
            // console.log(result.data);
            this.listOfNearbyMerchants = result.data
          }).catch((err)=>{
            console.log(err)
          });
          this.isChange1 = false;
          this.isChange2 = false;
          this.isChange3 = false;
        },
        //点击商家属性变换图标并判断
        ChangeSend(val) {
          val.select = false;
          // console.log(val);
          this.$store.commit("saveProductNature", val);

          //根据vuex中的数据判断商家属性是否重复点击
          //  let natureInfor= this.$store.state.shopsInfor.saveProNature;
        },
        //清空商品属性
        notSelect() {
          this.allCount = " ";
          //判断蜂鸟专送是否被选中
          if (this.isChangeSend == true) {
            this.isChangeSend = false
          }
          //判断商家属性是否被选中
          this.allShopSelect.map((v) => {
            return v.select = true;
          })
        },

      // 对商品进行排序
        reSortProduct(id){
          this.sortProduct.map((v)=>{
            return v.select=false
          });
          this.sortProduct[id-1].select=true;
          Vue.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by="+id).then((result) => {
            console.log(result.data);
            this.listOfNearbyMerchants = result.data
          }).catch((err)=>{
            console.log(err)
          })
        //下拉列表收回
          this.isChange2=false
        }

      },
      computed:{
        //商品属性数量
        productCount() {
          if (this.allCount == " ") return 0;
          let count = 0;
          let count1 = this.$store.state.shopsInfor.saveProNature;
          let count2 = count1.filter((v) => {
            return v.name != count1.name;
          });
          //蜂鸟专送被选中，数据+1
          if (this.isChangeSend == true) {
            count = count2.length + 1
          } else {
            count = count2.length
          }
          return count;
        }
      },
      //获取传来的值
      created(){
      //从localStorage中获取分类标题
        this.title=localStorage["title"];
        console.log(localStorage["foodName"]);
        //  获取分类的名字
        Vue.axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category").then((result)=>{
          // console.log(result.data);
          this.food=result.data[0];
          this.categoryList=result.data.splice(1);
          // console.log(this.food, this.categoryList);
        }).catch((err)=>{
          console.log(err)
        });
      //获取配送方式
        Vue.axios.get("https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes").then((result)=>{
          // console.log(result.data);
          this.sendMethod=result.data[0]
        }).catch((err)=>{
          console.log(err)
        });

      //  获取附近商家信息
        Vue.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762").then((result) => {
          console.log(result.data);
          this.listOfNearbyMerchants = result.data
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
  }

  /*//  排序中图标颜色*/
      .color1{
      color:#3b87c8;
      }
  .color2{
    color:#f07373;
  }
  .color3{
    color:#e6b61a;
  }
  .color4{
    color:#37c7b7;
  }
.color5{
  color:#3190e8
}
.mask{
   width: 100%;
   height: 36.4875rem;
   /*background: rgba(0,0,0,0.3);*/
   position: fixed;
   top:5.2rem;
   left: 0;
   z-index: 10;
  border-bottom: 0.0625rem solid #e4e4e4;
 }
  .mask1 li{
    background: white;
    width:100%;
    line-height:3.6625rem;
    margin: 0 auto;
    font-size: 0.85rem;
  }
  .mask1 li p{
    display: inline-block;
    width:20.75rem;
    /*border-bottom: 0.0625rem solid #e4e4e4;*/
  }
  .mask1 li i{
    width: 1rem;
    margin: 0 0.4375rem 0 1.1718rem;
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

  /*配送方式*/
  .mask_top{
    background: white;
    font-size: 0.85rem;
  }
  .mask_top div{
    width:6.875rem;
    border: 0.0625rem solid #e4e4e4;
  }
  .mask2 p{
    height: 2.625rem;
    line-height: 2.625rem;
    padding-left: 1rem;
  }
  .mask_top div{
    height: 2.05rem;
    line-height: 2.05rem;
    margin-left: 1rem;
    font-size: 0.625rem;
    border-radius:0.3125rem;
  }
  .mask_top i{
   font-size:1rem;
    vertical-align: middle;
    padding-left: 1rem;
    margin-right: 0.5rem;
  }
  /*商家属性*/
  .mask_bottom{
    background: white;
    font-size: 0.85rem;
  }
  .mask_bottom li{
    display: inline-block;
    margin:0;
    margin-bottom: 0.5rem;
  }
  .mask_bottom li:nth-of-type(3n+1){
    margin-left: 1rem;
  }
  .mask_bottom div{
    height: 2.05rem;
    line-height: 2.05rem;
    margin-left: 0.3rem;
    font-size: 0.625rem;
    border-radius:0.3125rem;
    /*margin-bottom: 0.5rem;*/
    width:6.875rem;
    border: 0.0625rem solid #e4e4e4;
  }
  .mask_bottom span:nth-child(1){
    width: 2rem;
    line-height:1.5rem;
    display: inline-block;
    text-align: center;
    margin-left: 0.5rem;
    font-size:0.75rem;
  }

/*按钮*/
  .mask_bottom  .sub{
    width: 100%;
    height:3.515rem;
    background: #e4e4e4;
    font-size: 0.85rem;
    line-height:3.515rem;
    background: #f1f1f1;
    margin: 0;
    margin-top: 0.5rem;
    border-radius: 0;
  }
  .sub button{
      width: 10rem;
      height: 2.625rem;
      line-height: 2.625rem;
      border:0.0625rem solid #e4e4e4;
      margin-right: 0.5rem;
      border-radius: 0.2rem;
      font-size: 1rem;
  }
  .sub button:nth-child(1){
    color:#000;
    background:white;
    margin-left: 1rem;
  }
  .sub button:nth-child(2){
    background:#56d176;
    color:white;
  }
  .deleteB{
    border: 0;
  }
</style>
