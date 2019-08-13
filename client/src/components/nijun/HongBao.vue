<template>
  <div class="Voucher">
    <div class="discountsBox">
      <div class="discountsMD clearfix" v-if="Object.keys(name).length!= 0">
        <span class="pull-left">有 <b>{{nums}}</b>个红包即将到期</span>
        <span class="pull-right">
        <img src="../../assets/imgs/description.png"/>
          <router-link :to="{path:'/hbDescription'}">红包说明</router-link>
      </span>
      </div>
      <div class="packet clearfix" v-for="(pack, index) in disArr" :key="index" v-if="Object.keys(name).length!= 0">
        <div class="packet_left pull-left">
          <span>￥</span><span>{{pack.amount}}</span>
          <p>{{pack.description_map.sum_condition}}</p>
        </div>
        <div class="packet_right pull-left clearfix">
          <div class="packet_right_left pull-left" style="width: 100%;">
            <h4>{{pack.name}}</h4>
            <p style="color: #aaa;">{{pack.description_map.validity_periods}}</p>
            <p style="color: #aaa;">{{pack.description_map.phone}}</p>
          </div>
        </div>
        <div class="pull-right">
          <div style="color:#ff5340;font-size: 0.8rem;">{{pack.description_map.validity_delta}}</div>
        </div>
      </div>
      <!--<p class="leip">限品类:快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>-->
      <div class="text-center historia" v-if="Object.keys(name).length!= 0">
        <router-link :to="{path:'/passhongbao'}">
          查看历史红包
          <img src="../../assets/imgs/右箭头灰色.png" class="link_img"/>
        </router-link>
      </div>
    </div>
    <footer class="header_link header_link_a text-center" v-if="Object.keys(name).length!= 0">
      <router-link :to="{path:'/exchangeHB'}" style="border-right: 1px solid #f0f0f0">兑换红包</router-link>
      <router-link :to="{path:'/Recommend'}">推荐有奖</router-link>
    </footer>

  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "HongBao",
    data(){
      return {
        nums:'',
        disArr:[],
        flavor:'',
        name:'',
      }
    },
    mounted(){
      this.name=this.$store.state.shopsInfor.userInfor;
      console.log(this.$store.state.shopsInfor.userInfor);
      Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0').then((res)=>{
        console.log(res);
        this.nums = res.data.length;
        this.disArr = res.data;
        // console.log(this.disArr);
        localStorage["hongbaocount"]
      }).catch((error)=>{
        console.log(error);
      })
    }
  }
</script>

<style scoped>
  .header_link_a{

  }
  .header_link_a a{
    font-size: 0.7rem;
    color: #aaa;
  }
  .link_img{
    width: 0.8rem;
  }
  .packet_right_left h4:nth-child(1){
    margin-bottom:0 ;
  }
  .packet_right_left p:nth-child(2) ,
  .packet_right_left p:nth-child(3){
    font-size: 0.1rem;
    margin-bottom: 0;
  }
  .packet_right{
    padding-left: 1rem;
  }
  .packet_left{
    padding-right: 1rem;
    border-right: 1px dashed #aaaaaa;
    height: 100%;
  }
  .packet_left p:nth-child(3){
    font-size: 0.1rem;
    color: #aaaaaa;
  }
  .packet_left span:nth-child(1){
    font-size: 0.8rem;
  }
  .packet_left span{
    color: #ff5340;
    font-size: 2rem;
  }
  .packet{
    width: 100%;
    height: 6rem;
    background: url("../../assets/imgs/hongbao.png")repeat-x;
    background-size: 0.5rem;
    background-color: white;
    margin-top: .9rem;
    padding: .8rem;
    border-radius: 0.3rem;
    line-height: 2rem;
  }
  .discountsBox{
    padding: 0.5rem 0.6rem;
  }
  .discountsMD b{
    color: red;
  }
  .discountsMD img{
    width: 0.6rem;
  }
  .discountsMD{
    font-size: 0.5rem;
  }
  .discountsMD span{
    line-height: 2rem;
    font-size: .8rem;
  }
  .header_link{
    width: 100%;
    background: white;
    margin-top:1.3rem ;
    padding: 1rem 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

  }
  .header_link a{
    width: 7.9rem;
    height: 2rem;
    line-height: 2rem;
    display: inline-block;
    color: black;
  }
  .leip{
    color: #999999;
    margin-top: .5rem;
  }
  .historia a{
    color: #999999;
    font-size: 1rem;
  }
  .historia{
    margin-top: 2rem;
  }
  .historia img{
    width: 1.5rem;
    vertical-align: middle;
  }
</style>
