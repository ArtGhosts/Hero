<template>
    <div class="home">
      <!--头部-->
      <div class="top">
        <span class="leftText">ele.me</span>
        <span class="pull-right login" v-if="Object.keys(name).length == 0 " @click="loginOrUser(1)">登录|注册</span>
        <span class="pull-right login" v-else><i class="iconfont" @click="loginOrUser(2)">&#xe608;</i></span>
        <div class="empty clearfix"></div>
      </div>

      <!--定位城市-->
      <div class="currentCity">
        <span class="leftCity">当前定位的城市：</span>
        <span class="pull-right">定位不准时，请在城市列表中选择</span>
      </div>

      <!--当前城市-->
      <div class="cityTxt">
        <router-link :to="{name:'city',params:{cityID:currentCity.id,cityName:currentCity.name}}" class="cityLink">
          {{currentCity.name}}
          <span class="pull-right jiantou">></span>
        </router-link>
      </div>

      <!--热门城市-->
      <div class="hotCity">
        <h4>热门城市</h4>
        <div class="hot">
          <ul v-for="(val,index) in hotCity" :key="index">
            <li class="pull-left" @click=" changePage(val)"><span>{{val.name}}</span></li>
          </ul>
        </div>
      </div>

      <!--全部城市-->
      <div class="allCity">
          <ul>
            <li v-for="(val,index) in upperA" :key="index" class="uppcity">
              <h4>{{index}}</h4>
              <ul v-for="(value,index) in val" :key="index" class="address">
                <li class="pull-left" @click=" changePage(value)"><span>{{value.name}}</span></li>
              </ul>
              <div class="clearfix"></div>
            </li>
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
            currentCity:{},
          //  热门城市
            hotCity:[],
          //  所有城市头字母大写
            upperA:{},
          //城市首字符，城市数组
            upperACity:[],
          //
            name:{},
          }
      },
      methods:{

      //    字母排序
        upperSort(obj){
          let keys=Object.keys(obj).sort();
          let newObj={};
          for(let i=0;i<keys.length;i++){
            let index=keys[i];
            newObj[index]=obj[index];
          }
          return newObj
        },
      //  获取城市
        changePage(value){
          localStorage["selectCityName"]=value.name;
          this.$router.push({name:'city',params:{cityID:value.id,cityName:value.name}})
        },
      //  点击跳转
        loginOrUser(v){
          if(v==1){
            this.$router.push({path:'/login'})
          }else{
            this.$router.push({path:'/mine'})
          }
        },
      },

        created(){
          this.name=this.$store.state.shopsInfor.userInfor;
          //获取当前城市
          Vue.axios.get("https://elm.cangdu.org/v1/cities?type=guess").then((result)=>{
            this.currentCity={name:result.data.name,id:result.data.id};
            console.log(result.data.id,result.data.name,this.currentCity);
          }).catch((err)=>{
            console.log(err)
          });

          //获取热门城市
          Vue.axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((result)=>{
            for(let i=0;i<result.data.length;i++){
              let DN={
                id:result.data[i].id,
                name:result.data[i].name
              };
              this.hotCity.push(DN);
              // console.log(this.hotCity)
            }
            // console.log(result.data,this.hotCity)
          }).catch((err)=>{
            console.log(err)
          });

          //    获取所有城市
          Vue.axios.get("https://elm.cangdu.org/v1/cities?type=group").then((result)=>{
            // console.log(result.data);
            let a=this.upperSort(result.data);
            console.log(a);
            this.upperA=a
        })
        }
    }
</script>

<style scoped>

  /*ele.me部*/
.top{

  color: white;
  background:royalblue;
  line-height:2.85rem;
}
.leftText,.leftCity{
  margin-left: 0.625rem;
}
.login{
  font-size: 0.9375rem;
  margin-right: 0.5rem;
}

/*当前城市*/
.leftCity{
  color:#666;
}
.top a{
  color: white;
  margin-right: 0.625rem;
}
.currentCity{
  font-size: 0.75rem;
  line-height: 1.8125rem;
  padding: 0.5625rem auto;
  color:#9f9f9f;
  border-bottom: 0.06rem solid #e4e4e4;
  background: white;
  padding-top: 0.625rem;
}

  /*当前城市跳转*/
  .cityTxt{
    width:100%;
    line-height: 2.636rem;
    padding: 0 0.5625rem;
    font-size: 1.0625rem;
    color:#3190e8;
    border-bottom: 0.125rem solid #e4e4e4;
    margin-bottom:0.625rem;
    background: white;
  }
  .cityLink{
    width: 100%;
    color:#3190e8;
  }
  .jiantou{
    width:0.75rem;
    color:#9f9f9f;
    margin-right: 0.625rem;
  }


  /*热门城市*/
  .hotCity{
    border-top: 0.125rem solid #e4e4e4;
    background-color: white;
    font-size: 0.75rem;
  }
  .hotCity h4{
    margin: 0;
    font-size: 0.75rem;
    line-height: 2.25rem;
    margin-left: 0.625rem;
  }
  .hotCity ul{
    width: 100%;
    line-height:2.56rem;
    margin: 0;
  }
  .hot{
    text-align: center;
    background: white;
    height: 5.125rem;
    margin-bottom:0.625rem;
  }
  .hotCity li{
    width: 5.859rem;
    height:2.56rem;
    border: 0.025rem solid #e4e4e4;
    color: #3190e8;
  }

  /*全部城市*/
  .allCity{
    width: 100%;
    font-size: 0.875rem;
  }
  .allCity .uppcity{
    background: white;
    margin-bottom:0.625rem;
    border-bottom: 0.125rem solid #e4e4e4;
    border-top: 0.125rem solid #e4e4e4;
  }
  .allCity h4{
    margin: 0;
    line-height: 2rem;
    font-size: 0.75rem;
    margin-left: 0.625rem;
  }
.address{
  text-align: center;
}
  .address>li{
    width: 5.859rem;
    line-height:2.3125rem;
    height:2.3125rem;
    border: 0.025rem solid #e4e4e4;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /*.address>li {*/
     /*color:black;*/
  /*}*/
</style>
