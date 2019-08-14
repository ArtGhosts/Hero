<template>
  <div class="exchangeHB" style= "width: 100%;height: 100%">
    <!--小兰头-->
    <div class="topnj">
      <router-link :to="{path:'/Hongbao'}">
         <span class="pull-left">
       <i class="iconfont" style="font-size: 1.5rem;color: white;padding-left: .5rem">&#xe60c;</i>
        </span>
      </router-link>
      <div class="denglu">
        兑换红包
      </div>
      <div class="clearfix"></div>
    </div>

    <!--111111111111111111111111111111111111111-->
    <div class="text-center" style="margin-top: 1rem; padding: 0 0.4rem;">
      <input type="text" class="input_nj"placeholder="请输入兑换码" v-model="txtIN" @input="ifIn">

      <div style="margin-top: 1.5rem" class="clearfix">
        <input type="text" maxlength="4" placeholder="验证码" class="pull-left input_nj_A" v-model="CodeIn" @input="ifIn">

        <div class="pull-right clearfix div_nj">
          <img  :src="Code" alt="" class="pull-left img_nj">
            <a class="AuthCode" style="display: inline-block;" @click="ChangeCode()">
            <span style="color: gray;">看不清</span>
            <p class="btn-link">换一张</p>
          </a>
        </div>
      </div>
    </div>

    <div class="text-center" style="margin-top: 1rem">
      <button  :style="BackBtn" :class="{btn:true}" @click="under()"
      style="width: 22rem;height: 2.4rem;color: white;border-radius: .3rem;border: 0; outline: none;"
      >兑换</button>
    </div>
    <PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></PromptBox>
  </div>
</template>

<script>
  import Vue from 'vue'
  import PromptBox from "./PromptBox"
  export default {
    name: "exchangeHB",
    components:{PromptBox},
    data() {
      return {
        isHide: false,
        Code: '',
        txtIN: '',
        CodeIn: '',
        SetTxt: '无效的验证码',
        BackBtn: {
          background: '#ccc'
        },
      }
    },
    methods: {
      ChangeCode() {
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
          this.Code = res.data.code;
        })
      },
      ifIn() {
        let one = this.txtIN.length;
        let tow = this.CodeIn.length
        if (one >= 1 && tow == 4) {
          this.BackBtn.background = '#4cd964';
        } else if (one < 1 && tow < 4) {
          this.BackBtn.background = '#ccc';
        }
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
    mounted() {
      Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
        this.Code = res.data.code;
        // console.log(this.Code);
      }).catch((error) => {
        console.log(error);
      });
      this.ChangeCode();
    },
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
  .AuthCode {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
  .input_nj,.input_nj_A{
    border: 0;
    height: 3.2rem;
    padding-left: 1rem;
    font-size:.8rem;
    border-radius: .3rem;
  }
  .input_nj_A{
    width: 12rem;
  }
  .input_nj{
    width: 100%;
  }
  .img_nj{
    width: 5rem;
    height: 2.7rem;
    /*border: 1px solid;*/
  }
  .div_nj{
    width: 9rem;
    height: 3.2rem;
    background: white;
    padding: .2rem;
    border-radius: .3rem;
  }
  .btn-link{
    font-size: 1rem;
  }
</style>
