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

      <div class="background_nj">
        <div class="box" style="border: 1px solid red">

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
  /*我的*/

  /*返回按钮*/
  .back{
    font-size: 1.4rem;
    line-height: 2.856rem;
    margin-left:.5rem;
  }
  /*----------------------------上面是蓝色头部代码------------------------------------------*/
</style>
