<template>
  <!--外卖-->
    <div class="fastFood">
      <!--头部导航-->
      <div class="allhead">
        <div class="head">
          <van-nav-bar  @click-left="onClickLeft">
            <van-icon name="search" slot="left" />
          </van-nav-bar>
          <router-link :to="{path:'/'}"><span class="cityNa">{{cityNa}}</span></router-link>
          <span class="login" v-if="Object.keys(name).length == 0 " @click="loginOrUser(1)">登录|注册</span>
          <span class="login" v-else @click="loginOrUser(2)"><i class="iconfont">&#xe608;</i></span>
        </div>
      </div>

      <!--轮播图-->
      <div class="lunBo">
        <van-swipe :autoplay="3000" indicator-color="blue">
          <van-swipe-item>
            <van-grid :column-num="4">
              <ul class="productCategory">
                <li v-for="(val,index) in perProductCategory" :key="index"  @click="changeFast(val)">
                    <img :src="'https://fuss10.elemecdn.com/'+
                    val.image_url" alt="">
                    <p>{{val.title}}</p>
                </li>
              </ul>
            </van-grid>
          </van-swipe-item>
          <van-swipe-item>
            <ul class="productCategory">
              <li v-for="(val,index) in afterProductCategory" :key="index" @click="changeFast(val)">
                  <img :src="'https://fuss10.elemecdn.com/'+
val.image_url" alt="">
                  <p>{{val.title}}</p>
              </li>
            </ul>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!--商品信息-->
      <div class="productInform">
        <header><i class="iconfont">&#xe69e;</i><span>附近商家</span></header>
        <ul v-for="(val,index) in  listOfNearbyMerchants" :key="index" class="nearbyShops">
          <li @click="ToProductDetails(val)">
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
                <span class="arrive pull-right">准时达</span>
                <span class="send pull-right">蜂鸟专送</span>

              </div>
              <!--商品第三行-->
              <div class="money">
                <span>￥{{val.float_minimum_order_amount}}起送/配送费约￥{{val.float_delivery_fee}}</span>
                <span class="pull-right">{{val.order_lead_time}}</span>
                <span class="pull-right">{{val.distance}}/</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!--foot-->
     <Foot></Foot>
    </div>
</template>

<script>
  //附近商家样式
  import  "../../assets/css/NearbyShopsStyle.css"
  import Foot from './Foot_dyx'
  import Vue from 'vue';
    export default {
      name: "FastFood_dyx",
      components:{Foot},
      data(){
          return{
          //  前8个商品分类
            perProductCategory:[],
            //后8个商品分类
            afterProductCategory:[],

          //  搜索城市页面传来的城市名字
            cityNa:"",

          //  城市的经纬度
            cityGeohash:"",
          //  用户信息
            name:{},
          }
      },
      computed:{
        listOfNearbyMerchants(){
          return this.$store.state.shopsInfor.pInfor;
        }

      },
      methods: {
        onClickLeft() {
          this.$router.push({path:'/searchProduct'});
        },
      //  登录页面和我的页面跳转
        loginOrUser(v){
          if(v==1){
            this.$router.push({path:'/login'})
          }else{
            this.$router.push({path:'/mine'})
          }
        },
      //  点击跳转传值
        changeFast(val){
          this.$router.push({path:'/FastFoodCategroy',query:{Geohash:this.cityGeohash,title:val.title,cityFood:val.id}});
          localStorage["title"]=val.title;
          this.$store.commit("saveTitle",val.title)
        },
      //  点击跳转食品详情页
        ToProductDetails(val){
          // console.log(val);
          this.$router.push({path:'/ProductDetails',query:{Geohash:this.cityGeohash,id:val.id}});
          //商品的全部信息
          localStorage["proDetails"]=JSON.stringify(val);
          this.$store.commit("productDetails",val)
        }
      },
      created(){
        this.cityNa= JSON.parse(localStorage.getItem('name'))[0].name;
        //获取商品分类轮播的信息
        Vue.axios.get("https://elm.cangdu.org/v2/index_entry").then((result)=>{
          // console.log(result.data);
          this.perProductCategory=result.data.slice(0,8);
          this.afterProductCategory=result.data.slice(8);
          // console.log(this.perProductCategory,this.afterProductCategory)
        }).catch((err)=>{
          console.log(err)
        });
      //  获取用户信息
        this.name=this.$store.state.shopsInfor.userInfor;

      },
      mounted(){
        this.$store.dispatch('getShopsInfor');
      }
    }
</script>

<style scoped>
  /*头部导航*/
  .allhead{
    width: 100%;
    height: 2.5rem;
    position: fixed;
    left:0;
    top:0;
    z-index: 10;
  }
.head>div{
 height: 2.875rem;
}
.head div{
  background:#3190e8;
  color: white;
  line-height:2.875rem;
  font-size: 1.125rem;
}
  .head span, .head i{
    color: white;
  }
.cityNa{
  display: inline-block;
  width: 11.718rem;
  position: absolute;
  top: 1rem;
   left:20%;
  color: white;
  z-index: 10;
  font-size: 1.2rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
 /*登录注册*/
  .login{
    display: inline-block;
    position: absolute;
    top: 1rem;
    right:5%;
    color: white;
    z-index: 10;
    font-size: 1.2rem;
    text-align: center;
  }

 /*轮播*/
 .lunBo{
  width: 100%;
  height: 10.785rem;
   background: white;
   border-bottom:0.0625rem solid #e4e4e4;
   font-size: 0.75rem;
   margin-top: 2.5rem;
}

  .productCategory li{
  width: 5.859rem;
  padding:0.4325rem;
    text-align: center;
  display: inline-block;
}
  .productCategory img{
    width: 2.6368rem;
    height: 2.6368rem;
    margin-bottom: 0.4325rem;
    margin-left: 0.5rem;
  }
  .productCategory a{
    color: black;
    font-size:0.8rem;
    text-align: center;
  }

</style>
