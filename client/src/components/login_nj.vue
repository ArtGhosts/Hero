<template>
  <!--小蓝头-->
  <div class="nav">
    <!--密码登录-->
    <div class="topnj">
      <router-link :to="{}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
      <div class="denglu">
        密码登录
      </div>
      <div class="clearfix"></div>
    </div>

    <!--账号密码-->
    <!--<div class="input_nj">-->
      <!--<van-cell-group>-->
        <!--<van-field v-model="value" placeholder="请输入用户名" type="text" />-->
      <!--</van-cell-group>-->
      <!--<van-cell-group>-->
        <!--<van-field v-model="value" placeholder="密码" type="password" />-->
      <!--</van-cell-group>-->
      <!--<van-cell-group>-->
        <!--<van-field v-model="value" placeholder="验证码" type="text" maxlength="4" />-->
      <!--</van-cell-group>-->
    <!--</div>-->
    <div class="LmPass">
      <input type="text" placeholder="账号" v-model="LmV">
      <input :type="isPass" placeholder="密码" v-model="LmP">
      <div class="LmShowPass" @click="Showpass">
        <span :style="LmSpan2"></span>
        <span :style="LmSpan1">abc...</span>

      </div>
      <input type="text" placeholder="验证码" v-model="LmY">
      <div id="coad">
        <img :src="isStr" alt="" class="img">
      </div>
      <span @click="getD" class="Lcantsee">
          看不清<br><span class="text-primary">换一张</span>
        </span>

      <p>温馨提示:未注册过的账号,登陆时将被自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <div></div>
      <button class="btn btn-success btn-group btn-block " @click="login">登录</button>
    </div>
    <router-link :to="{path:'/resetpassword'}"><h6 class="text text-primary pull-right" style="margin-right:0.5rem ">重置密码?</h6></router-link>
    <!--这是个警告框-->
    <div class="alert alert-warning text-center LmAlert bounceIn" v-if="isShow">
      <!--<img src="../L-imgs/感叹号.png" height="100" width="100"/>-->
      <p>请输入手机号/邮箱/用户名</p>
      <button class="btn btn-success btn-group btn-block" @click="isShow=false">确认</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login_nj"
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html,body{
    width: 100%;
    height: 100%;
    font-size: 12px;
  }
  /*背景色*/
.nav{
  background: #3333;
}
/*小蓝头*/
.topnj{
  height: 50px;
  background-color:#3190e8;
  text-align: center;
  line-height: 50px;
}
.denglu{
  color: white;
  font-size: 2rem;
  font-weight: 900;
}
  .back{
    font-size: 2rem;
    color: white;
    margin-top:-10px ;
  }
  /*账号密码框*/
  input_nj{
  }
  .input_zh{
    font-size:0;
  }
</style>
