<template>
  <div class="recommend">
    <!--蓝色头部-->
    <div class="topnj">
      <router-link :to="{path:'/Hongbao'}"><span class="glyphicon glyphicon-menu-left pull-left back" style="color: white;"></span></router-link>
      <div class="denglu">
        推荐有奖
      </div>
      <div class="clearfix"></div>
    </div>

    <!--内容-->
    <div style="width: 23.4rem;height: 15rem">
      <img src="@/assets/imgs/activity.png" style="width: 100%;height: 100%"/>
    </div>
    <div class="invite text-center" style="padding: 1rem 0;background: white;">
      <span @click="HideBox()">
          <p><img src="@/assets/imgs/weixin.png" alt="" style="width: 3.6rem"></p>
        邀请微信好友
      </span>
      <span @click="HideBox()">
          <p><img src="@/assets/imgs/qq.png" alt="" style="width: 3.6rem"></p>
        邀请QQ好友
      </span>
      <span @click="HideBox()">
          <p><img src="@/assets/imgs/fenxiang.png" alt="" style="width: 3.6rem"></p>
        面对面邀请
      </span>
    </div>
    <!--截面-->
    <section class="text-center SecFont"style="display: flex;margin: 1rem;">
      <div style="display: inline-block;">
        <span>累计收益</span>
        <p>
          <b>0</b>
          <span>元</span>
        </p>
      </div>
      <div style="display: inline-block;width: 7.98rem;border-left: 0.1px solid gray">
        <span>累计收益</span>
        <p style="margin-bottom: 0"><b>0</b><span>元</span></p>
      </div>
    </section>
    <footer class="text-center"style="margin-top: 1rem">
      <span style="color:#4d4d4d;font-size: .5rem">-收益说明-</span>
      <div style="margin-top: 2rem">
        <img src="../../assets/imgs/qianbao.png" alt="" style="width: 1.5rem;">
        <div style="font-size: 0.5rem;margin-top: 0.5rem;color: #aaa;">还不赶紧去邀请好友</div>
      </div>
    </footer>
    <PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></PromptBox>
  </div>

</template>

<script>
  import PromptBox from "./PromptBox"
  export default {
    name: "Recommend",
    //引入警告框
    components:{PromptBox},
    data(){
      return{
        isHide: false,
        SetTxt:'请在饿了么APP中打开',
      }
    },
    methods:{
      HideBox(){
        this.isHide=true;
      },
      Show(e){
        this.isHide=(e);
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
  .invite span:nth-child(2){
    padding: 0 2rem;
  }
  .invite span{
    display: inline-block;
    font-size: 0.5rem;
  }
  b{
    color: red;
    font-size: 0.8rem;
  }
  .SecFont span{
    font-size: 0.55rem;
  }
  .SecFont{
    /*margin-left:3.5rem !important;*/

  }
  .recommend div{
    margin: 0 auto;
  }
  .recommend b{
    color: red;
    font-size: 1.5rem;
    font-weight: 500;
  }
</style>
