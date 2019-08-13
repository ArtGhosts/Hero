<template>
  <div>
    <!--顶部设置-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/mine'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/mine'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/mine'}">账户信息</h4>
      </div>
    </div>

    <!--头像设置-->
    <div>
      <div class="ka">
        <van-uploader class="qing1" >
          <van-cell is-link title="头像" style="width: 23.48rem;height: 4.5rem;line-height: 3rem" id="touxiang">
            <template>
              <span class="custom-title">
                <img src="../../assets/imgs/default.jpg" height="47" width="47" style="border-radius: 50%" />
              </span>
            </template>
          </van-cell>
        </van-uploader>
      </div>
      <div><img id="tou" style="margin-left: 0.3rem" src="" /></div>
      <van-icon name="arrow" class="fei" />
    </div>
    <!--用户名-->
    <div class="yonghuming">
      <van-cell is-link title="用户名" :to="{path:'/member/amend_ldl'}"  class="custom">
        <template >
          <span class="custom">{{name.username}}</span>
        </template>
      </van-cell>
      <!--收货地址-->
      <van-cell is-link class="shouhuo" :to="{path:'/member/consignee_ldl'}">
        <template slot="title">
          <span class="custom">收货地址</span>
        </template>
      </van-cell>
    </div>
    <span class="span_one">账号绑定</span>
    <!--手机-->
    <van-cell is-link @click="mama1" class="biankuang">
      <template slot="title" v-show="mama" class="click_1">
        <img src="../../assets/imgs/shouji.png" height="22" width="20" />
        <span class="custom-title">手机</span>
      </template>
    </van-cell>
    <span class="span_one">安全设置</span>
    <!--安全设置-->
    <van-cell is-link title="登录密码" class="biankuang">
      <template>
        <span class="custom-title">修改</span>
      </template>
    </van-cell>
    <!--点击按钮-->
    <div class="alert text-center LmAlert button">
      <van-button type="primary" v-show="mama_one" @click="mama1_one" class="click_1">退出登录</van-button>
      <!--即将消息的标签-->
      <transition enter-active-class="animated bounceIn" leave-active-class="">
        <div class="click_1_div" v-show="baba">
          <img src="../../assets/jinggaokuang.png" height="100" width="100" />
          <p>ISO用户请前往AppStore下载</p>
          <button class="btn btn-success btn-group btn-block  anniu" @click="baba1">确认</button>
        </div>
      </transition>
    </div>
    <div v-if="yes" class="conceal">
      <transition enter-active-class="animated bounceIn">
        <div class="click_1_div" v-show="baba_one">
          <img src="../../assets/jinggaokuang.png" height="100" width="100" />
          <h1>是否退出登录</h1>
          <button class="btn btn-success btn-group this_button" @click="baba1_one">再等等</button>
          <button class="btn btn-success btn-group this_button1" @click="baba1_two">退出登录</button>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
  import Vue from "vue"
  import "../../../node_modules/animate.css/animate.css"
  export default {
    name: "account_ldl",
    data() {
      return {
        show: true,
        mama: true,
        baba: false,
        show_one: true,
        mama_one: true,
        baba_one: false,
        yes: false,
        // 用户名
        name: "",

      }

    },
    methods: {
      mama1() {
        this.baba = true

      },
      baba1() {
        this.baba = false
      },
      mama1_one() {
        this.baba_one = true;
        this.yes = true
      },
      baba1_one() {
        this.baba_one = false;
        this.yes = false;

      },
      baba1_two() {
        this.baba_one = false;
        this.yes = false;
        Vue.axios.get("https://elm.cangdu.org/v2/signout").then((result)=>{
          console.log(result);
        });
        this.$router.push({path:"/mine"});
        this.$store.commit("deleteUsername")
      },


    },
    created() {
      this.span_id = this.$route.query.ID;
      // console.log(this.span_id)
      this.name=this.$store.state.shopsInfor.userInfor;
    }
  }
</script>

<style scoped lang="less">
  /*设置用户名,收货地址等的行高*/
  .custom{
    line-height: 1.75rem;
  }
  /*是否退出登录设置*/
  h1 {
    margin-top: 1rem
  }
  /*头像*/
  .touxiang {
    width: 23.48rem;
    height: 5rem;
    line-height: 5
  }
  /*用户名*/

  .yonghuming {
    border-top: 0.06rem solid rgba(0, 0, 0, 0.2)
  }
  /*收货地址*/

  .shouhuo {
    border-top: 0.06rem solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.06rem solid rgba(0, 0, 0, 0.2)
  }
  /*<!--边框-->*/

  .biankuang {
    border-top: 0.03rem solid rgba(0, 0, 0, 0.3);
    border-bottom: 0.03rem solid rgba(0, 0, 0, 0.3);
  }

  .qing1 i {
    line-height: 4.4em;
  }

  i {
    line-height: 1.6rem;
  }

  .ka [data-v-4f5d381e]:before {
    margin-top: 0.1rem;
    width: 100%;
  }

  .qing1 {
    line-height: 5rem;
    width: 100%;
    margin-top: 0.5rem;
    border-top: 0.06rem solid rgba(0, 0, 0, 0.4);
  }

  #tou {
    border-radius: 50%;
    width: 0.6rem;
    position: absolute;
    z-index: 1;
    top: 0.6rem;
    left: 2.5rem;
  }
  /*按钮*/

  .anniu {
    margin-top: 1rem
  }

  .fei {
    position: absolute;
    right: 0.15rem;
    top: 0.8rem;
    z-index: 1;
    font-size: 0.24rem;
  }
  /*<!--确认取消按钮样式-->*/

  .conceal {
    background: rgba(0, 0, 0, 0.2);
    height: 46rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center
  }
  /*<!--两个确认取消按钮-->*/

  .this_button {
    margin: 3rem 1rem 0 1rem;
    width: 5rem;
    background: #c1c1c1;
    border: #c1c1c1
  }

  .this_button1 {
    margin: 3rem 1rem 0 1rem;
    width: 5rem;
    background: #dd6b55;
    border: black
  }
  /*两个span标签*/

  .span_one {
    line-height: 2.4rem;
    padding-left: 1rem;
    font-size: 0.6rem;
  }

  img {
    vertical-align: middle;
  }

  .search i {
    color: white;
  }
  /*顶部外围div*/

  .top_L {
    width: 100%;
    height: 3rem;
    background: rgb(49, 144, 232);
  }
  /*用插件做的样式*/

  .vant_top1 {
    line-height: 3rem;
    position: absolute;
    left: 0.8rem;
    font-size: 1.3rem
  }
  /*数据库首页传来的值的样式*/

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
  /*图片*/

  .tp img {
    border-radius: 10%
  }
  /*d点击按钮外面div*/

  .button {
    text-align: center;
    margin-top: 1rem;
  }
  /*点击按钮*/

  .click_1 {
    width: 100%;
    border-radius: 0.4rem;
    background: #db584a;
    border: #db584a;
    height: 2.1rem;
    line-height: 2.1rem;
  }
  /*里面的div*/

  .click_1_div {
    position: absolute;
    top: 10rem;
    left: 4%;
    border-radius: 5%;
    background: white;
    width: 92%;
    padding: 2rem 2rem 0.9rem 2rem;
  }
</style>
