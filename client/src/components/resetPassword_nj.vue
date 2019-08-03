<template>
  <div class="nav">
    <!--密码登录-->
    <div class="topnj">
      <router-link :to="{path:'/login'}"><span class="glyphicon glyphicon-menu-left pull-left back" style="color: white;"></span></router-link>
      <div class="denglu">
        重置密码
      </div>
      <div class="clearfix"></div>
    </div>

    <!--账号密码-->
    <div class="njpassword">
      <input type="text" placeholder="账号" v-model="LmV">
      <input :type="isPass" placeholder="旧密码" v-model="LmW">
      <input :type="isPass" placeholder="请输入新密码" v-model="LmP">
      <input :type="isPass" placeholder="请确认新密码" v-model="LmP">

      <!--验证码-->
      <input type="text" placeholder="验证码" v-model="LmY" maxlength="4">
      <div id="coad">
        <img :src="isStr" alt="" class="img">
      </div>
      <span @click="getD" class="Lcantsee">
          看不清<br><span class="text-primary">换一张</span>
      </span>
      <button class="btn btn-success btn-group btn-block success_nj" @click="login">确认修改</button>
    </div>
    <!--修改按钮-->

  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "resetPassword_nj",
      data(){
          return{
            isPass:"text",
            LmV: '',
            LmP:'',
            LmY:'',
            LmW:'',
            LmCoad: '',
            LmLP:'',
            isTrue: false,
            isFalse:true,
            isShow:false,
            isStr:'',
            alertTxt:''

          }
      },
      methods:{
          login(){
            Vue.axios.post('https://elm.cangdu.org/v2/changepassword',{
              username:this.LmV,
              oldpassWord:this.LmLP,
              newpassword:this.LmP,
              confirmpassword:this.LmP,
              captcha_code:this.LmY
            }).then((res)=>{
              if (res.data.success==='密码修改成功'){
                this.isShow=!this.isShow;
                this.alertTxt='密码修改成功'
              }
            })
          },
        getD(){
            this.isFalse=!this.isFalse;
            Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
              this.isStr = res.data.code
            })
        },
        created(){
            this.isFalse=!this.isFalse;
            Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
              this.isStr = res.data.code
            })
        }
      }
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
  /*返回按钮*/
  .back{
    font-size: 1.4rem;
    line-height: 2.856rem;
    margin-left:.5rem;
  }
  .denglu{
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
  }
  /*账号外观*/
  .njpassword{
    margin: 0.8rem  0;
  }
  .njpassword input{
    height: 3rem;
  }
  /*按钮大小*/
.njpassword button{
  width: 85%;
  margin: 1.5rem 1.5rem;
}
  input{
   line-height: 2rem;
    font-size: .7rem;
    width: 100%;
    border: 0;
    padding-left: .6rem;
    margin-top: .05rem;
    outline: none;
    border-bottom: 0.0625rem solid #e4e4e4;
  }

  /*验证码*/
  #coad{
    width: 5rem;
    line-height: 1rem;
    text-align: center;
    position: absolute;
    background: white;
    top: 16.2rem;
    right: 3rem;
    color:darkred;
    display: inline-block;
  }

  /*验证码图片大小*/
  .img{
    width: 4rem;
    height: 2.2rem;
  }
  /*眼瞎换一张*/
  .Lcantsee{
    position: absolute;
    top: 16.5rem;
    right: 0.5rem;
  }
  /*确认按钮*/
  .success_nj{
    line-height: 2.1rem;
  }
</style>
