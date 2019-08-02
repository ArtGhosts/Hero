<template>
  <!--外卖-->
    <div class="fastFood">
      <div class="head">
        <van-nav-bar title="标题" right-text="登录|注册" right-arrow  @click-left="onClickLeft" @click-right="onClickRight">
          <van-icon name="search" slot="left" />
        </van-nav-bar>
      </div>
      <!--轮播图-->
      <div calss="lunbo">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide><div>1</div></swiper-slide>
          <swiper-slide><div>2</div></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FastFood_dyx",
      data(){
          return{
            address:"杭州",
            swiperOption:{
              direction:'horizontal',
            }
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
  /*轮播*/
 .lunbo{
  width: 100%;
}
</style>
