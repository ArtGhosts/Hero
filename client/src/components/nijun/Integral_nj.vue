<template>
    <div class="integral">
      <!--小兰头-->
      <div class="topnj">
        <router-link :to="{path:'/mine'}">  <span class="pull-left">
       <i class="iconfont" style="font-size: 1.5rem;color: white;padding-left: .5rem">&#xe60c;</i>
        </span></router-link>
        <div class="denglu">
          我的积分
        </div>
        <div class="clearfix"></div>
      </div>
      <!--1111-->
      <div class="InteMD">
        <div class="bgs">
        <div class="InteBox">
          <div class="InteTxt_one clearfix">
            <span class="pull-left">当前积分</span>
            <span class="pull-right">
            <img src="../../assets/imgs/description.png"/>
            <router-link :to="{path:'/jifenspeak'}">积分说明</router-link>
          </span>
          </div>
          <p class="InteTxt_tow">
            <span>{{nuMber}}</span>
            <span>分</span>
          </p>
          <button class="btn" @click="HideBox()">积分兑换商品</button>
        </div>
      </div>
      </div>
      <div class="footer_MD clearfix">
        <span class="pull-left">最近30天积分记录</span>
      </div>
      <section class="footer text-center">
        <img src="../../assets/imgs/no-log.png"/>
        <p>最近30天无积分记录</p>
        <p>快去下单赚大量积分吧</p>
      </section>
      <PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></PromptBox>
    </div>
</template>

<script>
  import PromptBox from "./PromptBox"
    export default {
        name: "Integral_nj",
      components:{PromptBox},
      data(){
        return {
          nuMber:-9999999999999,
          isHide:false,
          SetTxt:'快去下单赚取大量积分吧'
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


  .footer p:nth-child(3){
    font-size: 0.5rem;
    color: #aaaaaa;
    margin-top: .5rem;
  }
  .footer p:nth-child(2){
    font-size: 0.7rem;
    margin-top: 1rem;
  }
  .footer img{
    width:15rem;
    height: 7rem;
  }
  .footer_MD{
    width: 100%;
    padding: 1rem;
    color: #aaaaaa;
  }
  button{
    width: 100%;
    height: 3rem;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    background: #fe6d47;
    outline:none ;
  }
  .InteTxt_tow span:nth-child(1){
    line-height: 4rem;
    font-size: 2.3rem;
  }
  .InteTxt_one img {
    width: 0.6rem;
    height: 0.6rem;
  }

  .InteTxt_one {
    font-size: 0.55rem;
  }

  .InteBox {
    margin: 0 auto;
    height: 100%;
    width: 95%;
    background: white;
    padding: 0.4rem;
    border-radius: .4rem;
  }

  .InteMD {
    width: 100%;
    height: 10rem;
  }

  .header img {
    width: 0.8rem;
    height: 0.8rem;
  }
.bgs{
  background: #3190e8;
  padding: .5rem 0;
}
</style>
