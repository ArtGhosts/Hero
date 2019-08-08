<template>
  <div>
    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/mine'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/mine'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/mine'}">服务中心</h4>
      </div>
    </div>
    <!--中部操作-->
    <!--分成两份用来放图片-->
    <div class="zhong">
      <!--左边的客户服务-->
      <div class="zhong_left">
        <img src="../../assets/imgs/kefu.png" height="25rem" width="25rem" />
        <p style="margin-top: 0.5rem">客户服务</p>
      </div>
      <!--右边的电话-->
      <div class="zhong_right">
        <img src="../../assets/imgs/dianhua.png" height="25rem" width="25rem" />
        <p style="margin-top: 0.5rem">在线客服</p>
      </div>

    </div>
    <div style=" background: white;margin-top: 6rem;border-top: 0.05rem solid rgba(0,0,0,0.1) ">
      <h4 style="line-height: 4.5rem;padding-left: 1rem;color: black">热门问题</h4>
    </div>
    <ul style="background: white; ">
      <router-link v-for="(a,index) in content" :key="index" :to="{name:'mybaba',query:{ID:a,RN:content1[index-1]}}">
        <li>
          <span>{{a}}</span>
          <van-icon name="arrow" class="vant_top"></van-icon>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "service_ldl",
    data() {
      return {
        content: [],
        content1: [],

      }
    },
    methods: {
      //跳转页面
      momo() {
        this.$router.push({
          path: '/mybaba'
        });
      }
    },
    mounted() {
      Vue.axios.get("https://elm.cangdu.org/v3/profile/explain").then((err) => {
        // console.log(err.data);
        // this.content=err.data;
        let arr = [];
        for(let i in err.data) {
          arr.push(err.data[i]);
        }
        console.log(arr);
        arr.splice(24, 1);
        arr.splice(17, 4);
        console.log(arr);
        for(let j = 0; j <= arr.length; j++) {
          // arr.length
          this.content.push(arr[2 * j - 1]);
          // this.content1.push(arr[2 * j])
        }
        console.log(this.content1);
        console.log(this.content);
      })
    }
  }
</script>

<style scoped>
  body,
  html {
    background: white;
    height: 100%;
    width: 100%;
  }

  .search i {
    color: white;
  }
  /*顶部外围div*/

  .top_L {
    width: 100%;
    height: 3rem;
    background: rgb(49, 144, 232);
  }
  /*用插件做的样式*/

  .vant_top1 {
    line-height: 3rem;
    position: absolute;
    left: 0.8rem;
    font-size: 1.3rem
  }
  /*数据库首页传来的值的样式*/

  .cityNa {
    display: inline-block;
    width: 80%;
    position: absolute;
    top: 1rem;
    text-align: center;
    left: 10%;
    color: white;
    z-index: 10;
    font-weight: bold;
  }
  /*中部div操作*/

  .zhong {
    position: relative;
  }

  .zhong_left {
    width: 50%;
    background: white;
    height: 6rem;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    padding: 1.5rem;
  }

  .zhong_right {
    width: 50%;
    height: 6rem;
    background: white;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    padding: 1.5rem;
    /*border-bottom: 0.05rem solid rgba(0,0,0,0.1);*/
    border-left: 0.05rem solid rgba(0, 0, 0, 0.1);
    /*line-height: 0;*/
  }
  /*ul*/

  ul li {
    padding-left: 1rem;
    line-height: 3rem;
    border-top: 0.05rem solid rgba(0, 0, 0, 0.1);
  }

  span {
    color: #666666;
    font-size: .9rem
  }

  .vant_top {
    line-height: 3rem;
    position: absolute;
    /*margin-left: 21rem;*/
    font-size: 1.2rem;
    right: 0.8rem;
    color: #333;
  }
</style>
