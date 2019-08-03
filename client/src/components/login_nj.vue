<template>
  <!--小蓝头-->
  <div class="nav">
    <!--密码登录-->
    <div class="topnj">
      <router-link :to="{path:'/'}"><span class="glyphicon glyphicon-menu-left pull-left back" style="color: white;"></span></router-link>
      <div class="denglu">
        密码登录
      </div>
      <div class="clearfix"></div>
    </div>

    <!--这是账号密码-->
    <div class="LmPass">
      <input type="text" placeholder="账号" v-model="LmV">
      <input :type="isPass" placeholder="密码" v-model="LmP">
      <div class="LmShowPass" @click="Showpass">
        <span :style="LmSpan2"></span>
        <span :style="LmSpan1">abc...</span>
      </div>
      <input type="text" placeholder="验证码" v-model="LmY" maxlength="4">
      <div id="coad">
        <img :src="isStr" alt="" class="img">
      </div>
      <span @click="getD" class="Lcantsee">
          看不清<br><span class="text-primary">换一张</span>
      </span>
      <div class="Alert">
        <p>温馨提示:未注册过的账号,登陆时将被自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
      </div>

      <div></div>

      <button class="btn btn-success btn-group btn-block enter " @click="login">登录</button>
    </div>
    <router-link :to="{path:'/resepassword'}"><h6 class="text text-primary pull-right" style="margin-right:0.5rem ">重置密码?</h6></router-link>
    <!--这是个警告框-->
    <div class="alert alert-warning text-center LmAlert bounceIn" v-if="isShow">
      <!--警告框的图标-->
      <img src="../assets/jinggaokuang.png" height="100" width="100"/>
      <p>请输入账号/密码/验证码</p>
      <button class="btn btn-success btn-group btn-block" @click="isShow=false">确认</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "L-login",
    data(){
      return{
        //这是span标签的样式
        LmSpan1:{
          background:'#9f9f9f',
          borderRadius: '0.5rem',
          padding:' 0 0.4rem',
          color:'white',
          fontSize:'0.65rem'
        },
        LmSpan2:{
          display:"inline-block",
          width:'0.9rem',
          height:'0.9rem',
          borderRadius: '50%',
          background:'rgb(241,241,241)',
          position:'relative',
          top:'0.2rem',
          right:'-0.9rem'
        },
        isPass:"password",
        LmV:'',
        LmP:'',
        LmY:'',
        LmCoad:'',
        isTrue:false,
        isShow:false,
        isStr:'',
        loginReturn:''

      }
    },
    methods:{
      Showpass(){
        if(this.isPass ==='password'){
          this.LmSpan1.background='lightgreen';
          this.LmSpan2.right='-2.9rem';
          this.isPass='text'
        }else{
          this.LmSpan1.background='#9f9f9f';
          this.LmSpan2.right='-0.9rem';
          this.isPass ='password'
        }
      },
      login(){
        if(this.LmV!='' && this.LmP !='' && this.LmY!=''){
          Vue.axios.post('https://elm.cangdu.org/v2/login',{
            username:this.LmV,
            password:this.LmP,
            captcha_code:this.LmY
          }).then((res)=>{
            this.loginReturn = res.data.message
            if (this.loginReturn==='密码错误') {
              this.isShow=true;
            }else {
              this.$router.push({path:'/nmine_load'})
              // this.$store.state.LmPersonInfor=res.data
            }
          }).catch((err)=>{
            console.log(err)
          })
        }else if (this.LmV==='' && this.LmP ==='' && this.LmY==='') {
          this.isShow=true;
        }
      },
      getD(){
        this.isFalse=!this.isFalse
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
          this.isStr = res.data.code
        })
      }
    },
    created(){
      this.isFalse=!this.isFalse
      Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
        this.isStr = res.data.code
        // console.log(this.isStr);
      })
    }
  }
</script>

<style scoped>



  /*背景色*/
  .nav{
    /*background: #3333;*/
  }
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
  .L_head span{
    font-size: 0.8rem;
    font-weight: bold;
  }
  .LmPass{
    margin:0.8rem 0;
  }
  .LmPass input{
    height: 3rem;
  }
  input{
    line-height: 2.3rem;
    font-size: 0.7rem;
    width: 100%;
    border: 0;
    padding-left: 0.6rem;
    margin-top: 0.05rem;
    outline: none;

  }
  .LmPass button{
    width: 80%;
    margin: 0.5rem 1.5rem;
  }
  .LmPass p,p:first-child{
    margin-top: 0.3rem;
    color: red;
    font-size: 0.6rem;
  }
  /*防偷窥密码*/
  .LmShowPass{
    padding: 0 0.5rem;
    position: absolute;
    top: 8rem;
    right: 0.8rem;
  }
  /*提示信息*/
  .Alert{
    padding:.2rem 0;
    padding-left: .5rem;
  }
  .Alert p{
    font-size: .9rem;
    margin: .8rem 0;
  }
  /*验证码*/
  #coad{
    width: 5rem;
    line-height: 1rem;
    text-align: center;
    position: absolute;
    background: white;
    top: 10.2rem;
    right: 3rem;
    color:darkred;
    display: inline-block;
  }
  /*啥都没输的提示*/
  .LmAlert{
    background: white;
    position: absolute;
    top:30%;
    left:20%;
  }
  /*验证码图片大小*/
  .img{
    width: 3.2rem;
    height: 2.2rem;
  }
  /*眼瞎换一张*/
  .Lcantsee{
    position: absolute;
    top: 10.3rem;
    right: 0.5rem;
  }
  /*登录*/
  .enter{
    line-height: 2.3rem;
  }
</style>
