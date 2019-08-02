<template>
  <!--外卖-->
    <div class="fastFood">
      <div class="head">
        <van-nav-bar title="标题" right-text="登录|注册" right-arrow  @click-left="onClickLeft" @click-right="onClickRight">
          <van-icon name="search" slot="left" />
        </van-nav-bar>
      </div>
      <!--轮播图-->
      <div class="lunBo">
        <van-swipe :autoplay="3000" indicator-color="blue">
          <van-swipe-item>
            <van-grid :column-num="4">
              <ul class="productCategory">
                <li v-for="(val,index) in perProductCategory" :key="index">
                  <router-link :to="{}">
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
            swiperOption:{
              direction:'horizontal',
            },
          //  前8个商品分类
            perProductCategory:[],
            //后8个商品分类
            afterProductCategory:[],
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
        Vue.axios.get("https://elm.cangdu.org/v2/index_entry").then((result)=>{
          console.log(result.data);
          this.perProductCategory=result.data.slice(0,8);
          this.afterProductCategory=result.data.slice(8);
          console.log(this.perProductCategory,this.afterProductCategory)
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
</script>

<style scoped>

.head div{
  background: blue;
  color: white;
  font-size: 1.125rem;
}
  .head span, .head i{
    color: white;
  }
 .lunBo{
  width: 100%;
  height: 10.785rem;
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
</style>
