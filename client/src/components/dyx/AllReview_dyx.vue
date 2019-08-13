<template>
    <div class="review">
      <!--头部-->
      <ul class="top">
        <li class="pull-left overReview">
          <p class="color">{{overall_score}}</p>
          <p>综合评价</p>
          <p>高于周边商家{{compare_rating}}%</p>
        </li>
        <li class="pull-right otherReview">
          <p class="star">
            <span>服务态度</span>
            <van-rate v-model="service_score" allow-half void-icon="star"  void-color="#eee" :count="5"/>
            <span class="color">{{service_score}}</span>
          </p>
          <p class="star">
            <span>菜品评价</span>
            <van-rate v-model="food_score" allow-half void-icon="star"  void-color="#eee" :count="5"/>
            <span class="color">{{food_score}}</span>
          </p>
          <p class="star">
            <span>送达时间</span>
            <span>{{time}}分钟</span>
          </p>
        </li>
      </ul>
      <!--用户评论-->
      <ul class="bottom">
        <!--全部评价-->
        <li>
          <ul class="nav">
            <li v-for="(val,index) in reviewTage" :key="index" @click="clickChange(val,index)" :class="{'changeBgc':index==current}">{{val.name}}({{val.count}})</li>
          </ul>
        </li>
        <li v-for="(val,index) in allReview" :key="index" class="list">
          <!--头像-->
          <img src="../../assets/imgs/8.png" alt="" class="img1">
          <!--用户评论-->
          <div class="userReview pull-right">
            <header>
              <span class="pull-left">{{val.username}}</span>
              <span class="pull-right">{{val.rated_at}}</span>
            </header>
              <div class="star">
                <van-rate v-model="val.rating_star" allow-half void-icon="star"  void-color="#eee" :count="5"/>
                <span>按时送达</span>
              </div>
            <!--商品图片-->
            <ul class="foodImage">
              <li v-for="(value,i) in val.item_ratings" :key="i"  v-if="value!=''">
                <img :src="getImgPath(value.image_hash)" alt="">
                <span>{{value.food_name}}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "AllReview",
      data(){
        return{
        // 评价的全部信息
          allReview:[],
        //服务评价
          service_score:"",
        //菜品评价
          food_score:"",
        // 送达时间
          time:"",
        //综合评价
          overall_score:'',
        //  百分数
          compare_rating:"",
        // 评价分类
          reviewTage:[],
        // 当前点击的品论类型
          current:0,
        }
      },
      methods:{
        //对分类图片做的处理
        getImgPath(path) {
          //传递过来的图片地址需要处理后才能正常使用
          let suffix;
          if (!path) {
            return '//elm.cangdu.org/img/default.jpg'
          }
          if (path.indexOf('jpeg') !== -1) {
            suffix = '.jpeg'
          } else {
            suffix = '.png'
          }
          let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
          return 'https://fuss10.elemecdn.com' + url
        },
      //点击切换背景颜色
        clickChange(v,i){
          console.log(v);
          v.unsatisfied=!v.unsatisfied;
          this.current=i;
        }
      },
      created(){
          let id=JSON.parse(localStorage["proDetails"]).id;
          console.log(id);
          //获取评价内容的全部信息
          Vue.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/"+id+"/ratings").then((result)=>{
            // console.log(result.data);
            this.allReview=result.data;
            // console.log(this.allReview)
          }).catch((err)=>{
            console.log(err)
          });
      //获取评价分数
        Vue.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/"+id+"/ratings/scores").then((result)=>{
          // console.log(result.data)
          let reviewScores=result.data;
          this.service_score=(reviewScores.service_score).toFixed(1)
         this.food_score=(reviewScores.food_score).toFixed(1);
          this.time=reviewScores.deliver_time;
          this.overall_score=Math.ceil(reviewScores.overall_score);
          this.compare_rating=Number(reviewScores.compare_rating*100).toFixed(1)
          // console.log(reviewScores)
        }).catch((err)=>{
          console.log(err)
        })
      // 评价分类
        Vue.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/"+id+"/ratings/tags").then((result)=>{
          console.log(result.data)
          this.reviewTage=result.data
        }).catch((err)=>{
          console.log(err)
        })
      },
    }
</script>

<style scoped lang="less">
  .review{
    width: 100%;
  }
  //头部
  .top{
    width: 100%;
    height:6rem;
    padding:1.17rem;
    margin-bottom:0.76rem;
    background: white;
    li{
      display: inline-block;
      width:50%;
      text-align: center;
    }
    li:nth-child(2){
      font-size: 0.93rem;
    }
    .overReview p:nth-child(1){
      font-size:1.75rem;
    }
    .overReview p:nth-child(2){
      font-size:0.93rem;
      margin: 0.5rem 0;
    }
    .overReview p:nth-child(3){
      font-size:0.75rem;
    }
    .color{
      color:#ff6000;
    }
  }
  .otherReview p{
    text-align: left;
    margin: 0.5rem 0;
  }
  .nav{
    width:22.06rem;
    height:12rem;
    border-bottom: 0.0625rem solid #e4e4e4;
    margin: 0 auto;
  }
  .nav li{
    display: inline-block;
   border-radius: 0.5rem;
    font-size: 0.85rem;
    padding:0.7rem;
    background:#ebf5ff;
    margin: 0.3rem 0.2rem;
  }
  .nav .changeBgc{
    background: #3190e8;
  }
  //用户评论
  .bottom{
    width: 100%;
   background: white;
    font-size: 0.75rem;
  }
  .bottom .list{
    width:22.06rem;
    height:10.125rem;
    padding: 0.75rem 0.7rem;
    border-bottom: 0.0625rem solid #e4e4e4;
    margin: 0 auto;
  }
  .bottom div，.bottom ul{
    display: inline-block;
    width:17rem;
  }
  .img1{
    width:2.19rem;
    border-radius: 50%;
  }
  .userReview{
    width:17rem;
  }
  header{
    width:100%;
    height:1rem;
    margin-bottom: 0.25rem;
  }
  .foodImage{
    margin-top: 0.5rem;
  }
  .foodImage li{
    width:4.37rem;
    height:6rem;
    display: inline-block;
    margin-right: 0.5rem;
  }
  .foodImage li img{
    width:4.37rem;
    margin-bottom: 0.5rem;
  }
  .foodImage li span{
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /*五角星*/
  .star>div{
    display: inline-block;
    margin-top: -2rem;
    margin-right: 0.5rem;
  }
  .star i{
    width: 0.2rem;
    height: 0.2rem;
    font-size: 0.2rem;
    margin: 0.1rem;
  }

</style>
