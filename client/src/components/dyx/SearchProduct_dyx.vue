<template>
    <div class="searchProduct">
      <div class="allhead">
        <van-nav-bar
          title="搜索"
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
      <!--搜索-->
      <div class="bottom">
        <input placeholder="请输入搜索关键词" v-model="value" />
        <van-button type="info" @click="present">提交</van-button>
      </div>

      <!--搜索的内容-->
      <ul class="search" v-for="(val,index) in valData" :key="index">
        <li>
          <img src="//elm.cangdu.org/img/"+val alt="">
          <span>{{val.name}}</span>
        </li>
      </ul>

      <!--搜索历史-->
      <div v-if="isShow">
        <span>搜索历史</span>
        <ul class="searchHistory" v-for="(val,index) in history" :key="index">
          <li>{{val.name}}</li>
          <span></span>
        </ul>
        <span>清除历史</span>
      </div>

    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "SearchProduct_dyx",
      data(){
          return{
            //输入框的值
            value:'',
          //  获取的数据
            valData:[],
            isShow:false
          }
      },
      computed:{
        //  历史记录
        history(){
          return this.$store.state.shopsInfor.saveFoodName;
        }
      },
      methods:{
        onClickLeft(){
          this.$router.go(-1)
        },
        present(){
          //  将数据存储
          let name={
            name:this.value
          }
          localStorage["inputValue"]=name;
          this.$store.commit("saveValue",name);
          //根据关键字获取食品信息
          // Vue.axios.get("https://elm.cangdu.org/v1/pois?geohash=31.22967,121.4762&keyword="+this.value).then((result)=>{
          //   console.log(result.data)
          //   this.valData=result.data;
          // }).catch((err)=>{
          //   console.log(err)
          // });
        },
        created(){
          this.value=localStorage["inputValue"];
        }
      }
    }
</script>

<style scoped>
  .searchProduct{
    width: 100%;
    height: 2.856rem;
  }
  .allhead div{
    background: #3190e8;
    color: white;
    font-size: 1.125rem;
    font-weight: bolder;
  }
  .allhead i{
    width:1.125rem;
    color:white;
  }
  .bottom{
    width: 100%;
    height: 3.6618rem;
    line-height:3.6618rem;
    margin-top: 2.8rem;
    background: white;
  }
  .bottom input{
    width:15rem;
    height:2.1975rem;
    line-height:2.1975rem;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.2rem;
    margin-left: 2rem;
    margin-top: 1rem;
    background:#f2f2f2;
  }
  .bottom button{
    width:4.8125rem;
    height:2.1975rem;
    line-height:2.1975rem;
  }
</style>
