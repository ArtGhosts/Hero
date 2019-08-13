<template>
    <div class="order">
      <!--小兰头-->
      <div class="topnj">
        <router-link :to="{path:'/mine'}"><span class="glyphicon glyphicon-menu-left pull-left back" style="color: white;"></span></router-link>
        <div class="denglu">
          我的订单
        </div>
        <div class="clearfix"></div>
      </div>

      <!--<div class="aa">-->
        <!--<button class="btn" @click="HideBox()">去支付还剩0.00秒</button>-->
        <!--<PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></PromptBox>-->
      <!--</div>-->
      <div class="order">
        <!--订单信息-->
        <div class="indent" v-for="(pro,index) in allOrder" v-if="isShowAll">
          <img :src="'//elm.cangdu.org/img/'+pro.restaurant_image_url" alt="">
          <div class="indent_right pull-right" @click="ToOrderDetail(index)">
            <div class="indent_top">
              <p>{{pro.restaurant_name}}<van-icon name="arrow" /><span class="pull-right">{{pro.status_bar.title}}</span></p>
              <p>{{pro.formatted_created_at}}</p>
            </div>
            <p class="eat">{{pro.basket.group[0][0].name}}<span class="pull-right">￥{{Math.floor(pro.total_amount)}}.{{pro.total_amount-Math.floor(pro.total_amount)}}0</span></p>
            <div class="pay">
              <span class="pull-right">再来一单</span>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <Foot></Foot>
    </div>
</template>

<script>
  import  Vue from 'vue'
  import Foot from "../../components/dyx/Foot_dyx"
  export default {
        name: "order_nj",
    components:{PromptBox,Foot},
    // data(){
    //   return {
    //     isHide:false,
    //     SetTxt:'暂不开放支付接口'
    //   }
    // },
    // methods: {
    //   HideBox() {
    //     this.isHide = true;
    //   },
    //   Show(e) {
    //     this.isHide = e;
    //   }
    // }
    // }
      data(){
        return{
          allOrder:[],
          imgUrl:"//elm.cangdu.org/img/",
          isShowAll:true,
        }
      },
      //方法
      methods: {
        onClickLeft() {
          this.$router.back(-1);
        },
        ToOrderDetail(index){
          this.$store.commit("setDingDan",this.allOrder[index]);
          this.$router.push("/order/orderDetail");
          // this.$router.push({name:"orderDetail",params:this.allOrder[index]});
        }
      },
      // computed:{
      //   users(){
      //     return this.$store.state.shopsInfor.userInfor;
      //   }
      // },
      created()
      {
        // let userId=this.$store.state.shopsInfor.userInfor.user_id;
        Vue.axios.get(`https://elm.cangdu.org/bos/v2/users/11/orders?limit=10&offset=0`).then((result) => {
          this.allOrder = result.data;
          console.log(this.allOrder);
        }).catch((error) => {
          console.log(error);
        });
        if (this.$route.path == "/order1/order") {
          this.$store.commit("setActive", 2);

        }
        // if (Object.keys(this.$store.state.shopsInfor.userInforc).length == 0) {
        //   this.isShowAll = false;
        // } else {
        //   this.isShowAll = true;
        // }
      }

    }
</script>

<style scoped>
  /*小蓝头*/
  .topnj{
    background-color:#3190e8;
    text-align: center;
    line-height: 2.85rem;
  }
  /*返回按钮*/
  .back{
    font-size: 1.4rem;
    line-height: 2.856rem;
    margin-left:.5rem;
  }
  /*登录头*/
  .denglu{
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
  }
  /*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/

  /*.aa{*/
    /*margin: 13rem auto;*/
    /*text-align: center;*/
  /*}*/

  /*button{*/
    /*width: 100%;*/
    /*height: 3rem;*/
    /*color: white;*/
    /*font-size: 1.4rem;*/
    /*color: lightcoral;*/
    /*font-weight: 500;*/
    /*background: #fe6;*/
    /*outline:none ;*/
  /*}*/

  /*订单列表*/
  .indent{
    width: 100%;
    background: white;
    padding: .62rem;
    border-bottom: 0.1rem solid #d9d9d9;
  }
  .indent:nth-child(2){
    padding-top: 3.125rem;
  }
  /*图片*/
  .indent>img{
    width: 13%;
  }
  /*所有的商品信息*/
  .indent_right{
    width: 85%;
    display: inline-block;
  }
  /*店名和支付状态*/
  .indent_top{
    border-bottom: 0.01rem solid #f1f1f1;
    padding-bottom: 0.062rem;
  }
  /*店名*/
  .indent_top p:nth-child(1),.indent_top p:nth-child(1) i{
    font-size: 1.1rem;
    line-height: 1.875rem;
  }
  /*店名后的箭头*/
  .indent_top p:nth-child(1) i{
    color: #d9d9d9;
    vertical-align: -0.2rem;
  }
  /*支付状态*/
  .indent_top p:nth-child(1) span{
    font-size: 0.85rem;
  }
  .indent_top p:nth-child(2){
    font-size: 0.75rem;
    line-height: 0.93rem;
    color: #999;
  }
  /*支付金额*/
  .eat{
    border-bottom: 0.01rem solid #f1f1f1;
    font-size: 0.9375rem;
    line-height: 2.5rem;
  }
  /*支付额度*/
  .eat span{
    color: #ff6600;
  }
  /*按钮*/
  .pay span{
    width: 4.37rem;
    height: 1.5rem;
    font-size: 1rem;
    border-radius: 0.3rem;
    line-height: 1.3rem;
    background: none;
    border: 0.1rem solid #3190e8;
    color: #3190e8;
    margin-top: 1rem;
  }
</style>
