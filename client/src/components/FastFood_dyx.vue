<template>
  <!--外卖-->
    <div class="fastFood">
      <!--头部导航-->
      <div class="head">
        <van-nav-bar right-text="登录|注册" right-arrow  @click-left="onClickLeft" @click-right="onClickRight">
          <van-icon name="search" slot="left" />
        </van-nav-bar>
        <router-link :to="{path:'/'}"><span class="cityNa">{{cityNa}}</span></router-link>
      </div>
      <!--轮播图-->
      <div class="lunBo">
        <van-swipe :autoplay="3000" indicator-color="blue">
          <van-swipe-item>
            <van-grid :column-num="4">
              <ul class="productCategory">
                <li v-for="(val,index) in perProductCategory" :key="index">
                  <router-link :to="{path:'/FastFoodCategroy',query:{}}">
                    <img :src="'https://fuss10.elemecdn.com/'+
                    val.image_url" alt="">
                    <p>{{val.title}}</p>
                  </router-link>
                </li>
              </ul>
            </van-grid>
          </van-swipe-item>
          <van-swipe-item>
            <ul class="productCategory">
              <li v-for="(val,index) in afterProductCategory" :key="index">
                <router-link :to="{}">
                  <img :src="'https://fuss10.elemecdn.com/'+
val.image_url" alt="">
                  <p>{{val.title}}</p>
                </router-link>
              </li>
            </ul>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!--商品信息-->
      <div class="productInform">
        <header><i class="iconfont">&#xe69e;</i><span>附近商家</span></header>
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
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import Vue from 'vue'
    export default {
      name: "FastFood_dyx",
      data(){
          return{
            address:"杭州",
          //  前8个商品分类
            perProductCategory:[],
            //后8个商品分类
            afterProductCategory:[],

          //  搜索城市页面传来的城市名字
            cityNa:"",

          //  附近商家列表
            listOfNearbyMerchants:[],
          }
      },
      methods: {
        onClickLeft() {
          this.$router.push({path:'/login'});
        },
        onClickRight() {
          this.$router.push({path:'/searchCity'});
        }
      },
      created(){
        this.cityNa=this.$route.query.cityInfor;
        //获取商品分类轮播的信息
        Vue.axios.get("https://elm.cangdu.org/v2/index_entry").then((result)=>{
          console.log(result.data);
          this.perProductCategory=result.data.slice(0,8);
          this.afterProductCategory=result.data.slice(8);
          // console.log(this.perProductCategory,this.afterProductCategory)
        }).catch((err)=>{
          console.log(err)
        });

      //获取附近商家的信息
        Vue.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762").then((result)=>{
          // console.log(result.data)
          this.listOfNearbyMerchants=result.data;
          console.log(this.listOfNearbyMerchants[0])
        }).catch((err)=>{
          console.log(err)
        })

      //  根据传过来的经纬度确定城市名字
        console.log(this.$route.query.cityGeohash);
        Vue.axios.get("https://elm.cangdu.org/v2/pois/"+this.$route.query.cityGeohash).then((result)=>{
          console.log(result.data);
          this.cityNa=result.data.name;
        }).catch((err)=>{
          console.log(err)
        })

      }
    }
</script>

<style scoped>
  /*头部导航*/
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
  color: white;
  font-size: 1.2rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

 /*轮播*/
 .lunBo{
  width: 100%;
  height: 10.785rem;
   background: white;
   border-bottom:0.0625rem solid #e4e4e4;
}

  .productCategory li{
  width: 5.859rem;
  padding:0.4325rem;
  display: inline-block;
}
  .productCategory img{
    width: 2.6368rem;
    height: 2.6368rem;
    margin-bottom: 0.4325rem;
    margin-left: 1.3rem;
  }
  .productCategory a{
    color: black;
    font-size:0.8rem;
    text-align: center;
  }


  /*商品信息*/
.productInform{
  width: 100%;
  background: white;
  margin-top:0.95rem;
  color: #999;
  font-size: 0.75rem;
}
  .nearbyShops img{
    width: 3.955rem;
    width: 3.955rem;
  }
  .productInform>header{
    height: 2.375rem; ;
    line-height: 2.375rem;
    margin-bottom: 0.375rem;
  }
.productInform i{
  font-size:1rem;
  line-height: 2.375rem;
  margin-left:0.875rem;
  margin-right: 0.25rem;
  }
.productInform ul{
  width: 100%;
  border-bottom: 0.036rem solid #e4e4e4;
}
  .productInform ul li{
    width:22.265rem;
    height:4.474rem;
    margin: 1.025rem  0.5859rem;
  }
  .productInform .right{
    width: 17.7243rem;
    display: inline-block;
  }
  /*第一行*/
  .infroms .pBrand{
    display: inline-block;
    background: #ffd930;
    font-size:0.2925rem;
    color: #000;
    margin-right: 0.146rem;
  }
  .infroms h4{
    width: 12.45rem;
    font-size: 0.9525rem;
    color:#000;
    display: inline-block;
    margin-right:2rem;
    font-weight: bolder;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /*第二行*/
  .salesVolume{
    margin-top:0.8rem;
    margin-bottom:0.8rem ;
  }
  /*评分*/
  .rate{
    color: #ff6000;
    font-size: 0.75rem;
    margin-right: 0.3rem;
  }
  /*五角星*/
  .salesVolume>div{
    display: inline-block;
    margin-top: -2rem;
    margin-right: 0.5rem;
  }
  .salesVolume i{
    width: 0.2rem;
    height: 0.2rem;
    font-size: 0.2rem;
    margin: 0.1rem;
  }
   /*送*/
  .salesVolume .send{
     background: #3190e8;
    border:0.0625rem solid #3190e8;
     font-size: 0.75rem;
     color:white;
    margin-left:2.5rem;
   }
  /*到达*/
  .salesVolume .arrive{
    border:0.0625rem solid #3190e8;
    font-size: 0.75rem;
    color:#3190e8;
  }

  /*第三行配送*/
  .money{
font-size: 0.75rem;
  }
  .money span:nth-child(1){
    display: inline-block;
    color: #000;
    margin-right: 0.5rem;
  }
  .money span:nth-child(3){
    color: #3190e8;
  }
</style>
