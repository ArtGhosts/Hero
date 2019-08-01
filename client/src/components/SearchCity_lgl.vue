<template>

  <div class="search">
    <!--顶部页面-->
    <div>
    <van-nav-bar title="" style="background: royalblue" left-arrow>
      <span name="arrow-left" @click="asd" style="color: white"><</span>
      <span name="search" slot="right" @click="asd" style="color: white">切换城市</span>
    </van-nav-bar>
      <span class="cityNa">{{cityN}}</span>
    </div>
<!--中部页面-->
    <div>
    <div style="height: 8rem;width: 100%;background: white;text-align: center;margin-top: 0.5rem">
      <input type="text" name="username" placeholder="输入学校,商务楼，地址" style="margin-top: 1rem;width: 90%;height: 2rem;" v-model="inputRef">
      <p></p>
      <van-button type="info" style="width: 90%;margin-top: 0.8rem" @click="input_L">信息按钮</van-button>
    </div>
    </div>
    <!--下部搜索页面-->
    <div style="line-height: 2rem"><span>搜索历史</span></div>
    <div style="height: 10rem;width: 100%;background: wheat;">
      <div>
      </div>
    </div>
  </div>
  <!--输入页面-->

</template>
<script>
  import Vue from 'vue'
  export default {
    name: "SearchCity_lgl",
    data(){
      return{



        //home页传过来的城市id和城市名
        cityI:"",
        cityN:"",
        //输入框的值
        inputRef:"",

        //搜索城市

      }

    },
    methods: {
      input_L(){
        console.log(this.inputRef);
      },
      asd() {
        this.$router.push({path: '/'});
      },

    },
    created(){
      Vue.axios.get ("https://elm.cangdu.org/v1/pois?city_id=&keyword=郑州").then((result)=>{
      this.cityI=this.$route.params.cityID;
      this.cityN=this.$route.params.cityName;
      console.log( this.cityI,this.cityN);
      Vue.axios.get ("https://elm.cangdu.org/v1/pois?city_id=this.cityI&keyword=this.cityN").then((result)=>{
        this.CitySearch=result.data;
        console.log(result.data);
      }).catch((err)=>{
        console.log(err)
      })
    })
  }
  }
</script>
<style scoped>
  .search i{
    color:white;
  }
  /*百度搜的*/
  input[type="text"] {
    border: 1px solid rgba(232, 232, 232, 0.5);
    box-sizing: border-box;
    /*text-align:center;*/
    font-size: 1rem;
    height: 2.7rem;
    border-radius: 4px;
    color: #6a6f77;
    -moz-appearance: none;
    outline: 0;
    padding: 0 1rem;
    text-decoration: none;
    width: 100%;
  }
  /*设置顶部页面的样式*/
  .top {
    color: white;
    background: royalblue;
    line-height: 2.85rem;
    position: relative;
  }
  .cityNa{
    display: inline-block;
    width: 3rem;
    position: absolute;
    top:1rem;
    left:43%;
    color:white;
    z-index: 10;
  }

</style>
