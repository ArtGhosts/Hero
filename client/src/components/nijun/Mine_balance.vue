<template>
  <div class="balance">
    <!--小蓝头-->
    <div class="topnj">
      <router-link :to="{path:'/mine'}"><span class="glyphicon glyphicon-menu-left pull-left back" style="color: white;"></span></router-link>
      <div class="denglu">
        我的余额
      </div>
      <div class="clearfix"></div>
    </div>
    <!--小白框-->
    <div class="two">
      <div class="zhong clearfix">
        <div>
          <div class="left">当前余额<br>
            <span>0.00</span>
            元
          </div>
          <div class="right">
            <img src="../assets/imgs/description.png"/>
            <router-link :to="{path:'/Detail'}">余额说明</router-link>
          </div>
        </div>
        <button class="btn">提现</button>
      </div>

    </div>
    <div class="there">
      交易明细
      <div class="lu">
        <img src="../assets/imgs/no-log.png"/>
        <p>暂无明细记录</p>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: "Mine_balance"
  }
</script>

<style scoped>
  /*小蓝头*/
  .topnj{
    /*height: 2.85rem;*/
    background-color:#3190e8;
    text-align: center;
    /*line-height: 2.856rem;*/
    line-height: 2.9rem;

  }
  .denglu{
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
  }
  /*返回按钮*/
  .back{
    font-size: 1.4rem;
    line-height: 2.856rem;
    margin-left:.5rem;
  }
  /*----------------------------上面是蓝色头部代码------------------------------------------*/

.two{
  background: #3190e8;
  padding-bottom:.5rem ;
}
  .two .zhong{
    width: 96%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 0.2rem;
    padding: 0.4rem;
  }
  .left{
    float: left;
    width: 50%;
  }
  .left span{
    margin-left: .5rem;
    line-height: 4rem;
    font-size: 2.4rem;
  }
  .right{
    text-align: right;
  }
  .right img {
    width:0.7rem;
    vertical-align: top;
  }
  .btn{
    width: 100%;
    height: 3rem;
    background-color: #CCC;
    color: white;
    font-size: 1rem;
    margin-top: 2rem;
  }
  .there{
    padding: 0.4rem;
  }
  .there div{
    padding: 3em 0;
    text-align: center;
  }
.there div img {
  width: 9rem;
  margin: 0.6rem 0;
}
</style>
