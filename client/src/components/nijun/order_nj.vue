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

      <div class="aa">

        <button class="btn" @click="HideBox()">去支付还剩0.00秒</button>
        <PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></PromptBox>
      </div>

      <!--底部-->
      <Foot></Foot>
    </div>


</template>

<script>
  import PromptBox from "./PromptBox"
  import Foot from "../../components/dyx/Foot_dyx"
  export default {
        name: "order_nj",
    components:{PromptBox,Foot},
    data(){
      return {
        isHide:false,
        SetTxt:'暂不开放支付接口'
      }
    },
    methods: {
      HideBox() {
        this.isHide = true;
      },
      Show(e) {
        this.isHide = e;
      }
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

  .aa{
    margin: 13rem auto;
    text-align: center;
  }

  button{
    width: 100%;
    height: 3rem;
    color: white;
    font-size: 1.4rem;
    color: lightcoral;
    font-weight: 500;
    background: #fe6;
    outline:none ;
  }
</style>
