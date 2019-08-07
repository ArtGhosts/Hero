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
      <div v-if="isShow" class="history">
        <span class="search">搜索历史</span>
        <ul class="searchHistory" v-for="(val,index) in history" :key="index">
          <li class="list">
            <span class="pull-left">{{val.name}}</span><span @click="deleteOne(val)" class="pull-right"><i class="iconfont">&#xe602;</i></span>
          </li>
        </ul>
        <span @click="deleteHistory" class="del">清除历史</span>
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
          this.isShow=true;
          //  将数据存储
          let name={
            name:this.value
          };
          localStorage["inputValue"]=JSON.stringify(name);
          this.$store.commit("saveValue",name);
          //根据关键字获取食品信息
          // Vue.axios.get("https://elm.cangdu.org/v1/pois?geohash=31.22967,121.4762&keyword="+this.value).then((result)=>{
          //   console.log(result.data);
          //   this.valData=result.data;
          // }).catch((err)=>{
          //   console.log(err)
          // });
          },
        //删除所有
        deleteHistory(){
          this.isShow=false;
          localStorage["inputValue"]=[]
        },
        //删除某一个
        deleteOne(v){
          this.$store.commit("deleteOnes",v);
          }
        },
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
    padding-left: 0.5rem;
  }
  .bottom button{
    width:4.8125rem;
    height:2.1975rem;
    line-height:2.1975rem;
  }
  .history .search{
    display: inline-block;
    width: 100%;
    background: #f5f5f5;
    height: 2.875rem;
    line-height: 2.875rem;
    font-size: 0.875rem;
    color: #666;
   padding-left: 0.625rem;
  }
  .history .del{
    display: inline-block;
    width: 100%;
    height: 2.875rem;
    line-height: 2.875rem;
    text-align: center;
    color:#3190e8;
    font-weight: bolder;
    background: white;
  }
  .searchHistory .list{
    width: 100%;
    height: 2.875rem;
    /*line-height: 2.875rem;*/
    background: white;
    border-bottom: 0.0625rem solid #e4e4e4;

  }
  .list span{
    display:inline-block;
    margin-left: 0.625rem;
    line-height: 2.875rem;

  }
</style>
