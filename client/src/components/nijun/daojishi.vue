<template>
  <div class="header">
    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/Indent'}">
          <van-icon name="arrow-left" class="vant_top1"></van-icon>
        </router-link>
        <h4 class="cityNa">在线支付</h4>
      </div>
    </div>
    <!--剩余时间-->
    <div class="content">
      <p class="pay">支付剩余时间</p >
      <van-count-down :time="time" class="time"/>
    </div>
    <div class="pay_way">选择支付方式</div>
    <div>
      <van-radio-group v-model="radio" class="group" >
        <div class="zfb">
          <van-cell title="支付宝"  class="van" />
          <van-radio name="1" class="fk" checked-color="#07c160"></van-radio>
        </div>
        <div class="zfb">
          <van-cell title="微信"  class="van" />
          <van-radio name="2" class="fk" checked-color="#07c160"></van-radio>
        </div>
      </van-radio-group>
    </div>
    <div class="alert  text-center LmAlert   button">
      <router-link :to="{path:'order_nj'}">
      <van-button type="primary"  class="click_1" :class="{btn:true}" @click="under()">确认支付</van-button>
      </router-link>

    </div>
    <PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></PromptBox>
  </div>

</template>



<script>
  import PromptBox from "../nijun/PromptBox"
  export default {
    name: "daojishi",
    components:{PromptBox},
    data() {
      return {
        time:15 * 60 * 1000,
        radio: '1',
        name:"",
        isHide: false,
        Code: '',
        txtIN: '',
        CodeIn: '',
        SetTxt: '当前环境无法支付!!',
      };
    },
    mounted(){

    },
    methods:{
      onClickLeft(){
        Toast("返回")
      },
      under() {
        this.isHide = true;
      },
      HideBox() {
        this.isHide = true;
      },
      Show(e) {
        this.isHide = e;

      }
    },

  }
</script>

<style scoped>
  /*<!--顶部操作-->*/
  .search i {
    color: white;
  }
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
  .vant_top1 {
    line-height: 3rem;
    position: absolute;
    left: 0.8rem;
    font-size: 1.3rem
  }
  .top_L {
    width: 100%;
    height: 3rem;
    background: rgb(49, 144, 232);
  }
  .box4 img{
    width: 0.4699rem;
    height: 0.4699rem;;
    margin-left: 5%;
    margin-top: 5%;
    /*vertical-align: middle;*/


  }
  /*计时器*/
  .content{
    background: white;
    text-align: center;
    padding-top: 2rem;
    height: 8rem;
  }
  .pay{
    margin-bottom: 1rem;
  }
  .time{
    font-size: 2rem;
  }
  /*选择支付方式*/
  .pay_way{
    line-height: 3rem;
  }
  /*支付宝微信*/
  .zfb{
    display: flex;
    background: white;
    height: 3rem;
    padding-right: 1rem;
  }


  /*确认支付*/

  .click_1 {
    width: 95%;
    border-radius: .2rem
  }
</style>
