<template>
    <div class="home">
      <!--头部-->
      <div class="top">
        <span class="leftText">ele.me</span>
        <span class="pull-right">
          <div class="empty clearfix"></div>
          <router-link :to="{}">登录|注册</router-link>
        </span>
      </div>

      <!--定位城市-->
      <div class="currentCity">
        <span class="leftCity">当前定位的城市：</span>
        <span class="pull-right">定位不准时，请在城市列表中选择</span>
      </div>

      <!--当前城市-->
      <div class="cityTxt">
        <router-link :to="{}" class="cityLink">
          {{currentCity}}
          <span class="pull-right jiantou">></span>
        </router-link>
      </div>

      <!--热门城市-->
      <div class="hotCity">
        <span>热门城市</span>
        <ul v-for="(val,index) in hotCity" :key="index">
            <li>{{val}}</li>
        </ul>

      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Home",
      data(){
          return{
            //当前城市
            currentCity:"",
          //  热门城市
            hotCity:[],
          }
      },

        created(){
          //获取当前城市
          Vue.axios.get("https://elm.cangdu.org/v1/cities?type=guess").then((result)=>{
            this.currentCity=result.data.name
          }).catch((err)=>{
            console.log(err)
          });

          //获取热门城市
          Vue.axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((result)=>{
            for(let i=0;i<result.data.length;i++){
              this.hotCity.push(result.data[i].name)
            }
            console.log(result.data,this.hotCity)
          }).catch((err)=>{
            console.log(err)
          });
        }
    }
</script>

<style scoped>
  /*ele.me部*/
.top{
  color: white;
  height: 39px;
  background:royalblue;
  line-height: 39px;
}
.leftText,.leftCity{
  margin-left: 10px;
}

/*当前城市*/
.leftCity{
  color:#666;
}
.top a{
  color: white;
  margin-right: 10px;
}
.currentCity{
  font-size: 12px;
  line-height: 29px;
  padding: 9px auto;
  color:#9f9f9f;
  border-bottom: 1px solid #9f9f9f;
}
  /*当前城市跳转*/
  .cityTxt{
    width:100%;
    line-height: 39px;
    padding: 0 9px;
    font-size: 15px;
    color:#3190e8;
    border-bottom: 2px solid #9f9f9f;
  }
  .cityLink{
    font-size: 15px;
    color:#3190e8;
  }
  .jiantou{
    width: 12px;
    color:#9f9f9f;
    margin-right: 10px;
  }
  /*热门城市*/
  .hotCity ul{
    width: 100%;
    line-height:35px;
    list-style: none;
  }
  .hotCity li{
    display: flex;
    width: 80px;
    height: 32px;
    text-align: center;
    border: 0.5px solid #9f9f9f;
    float: left;
    font-size: 12px;
  }
</style>
