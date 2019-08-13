<template>
    <div>
      <!--顶部操作-->
      <div class="search">
        <div class="top_L">
          <router-link :to="{path:'/account_ldl'}">
            <van-icon name="arrow-left" class="vant_top1" :to="{path:'/account_ldl'}"></van-icon>
          </router-link>
          <h4 class="cityNa" :to="{path:'/account_ldl'}">修改用户名</h4>
        </div>
      </div>
      <!--输入框-->
      <div class="LmPass">
      <input type="text" placeholder="输入用户名" v-model="name" @input="mama()" class="div_input" :class="{'div_input1':solo}">
    </div>
      <!--文字设置-->
      <div>
        <span v-show="one"  style="margin-left: 1rem">用户只能修改一次(5-24字符之间)</span>
        <span v-show="two" style="color: red;margin-left: 1rem">用户长度在5-24字符之间</span>
      </div>
      <!--点击按钮-->
      <div style="text-align: center">
        <van-button  disabled  type="info" class="xxan_L" @click="dianji" :to="{path:'/account_ldl',query:{ID:name}}" v-show="therr">
          <span>确认修改</span>
        </van-button>
          <van-button type="info" class="xxan_L" @click="dianji" :to="{path:'/account_ldl',query:{ID:name}}" v-show="four">
            <span>确认修改</span>
        </van-button>
      </div>
    </div>

</template>

<script>
    export default {
        name: "amend_ldl",
      data(){
          return{
            //用来设置边框的颜色
            one:true,
            two:false,
            solo:false,
            therr:true,
            four:false,
            //获取到输入框的值
            name:"",
            mingzi1:"",
          }
      },
      // 方法
      methods:{
        //  判断事件,判断输入框内部内容是否大于5小于24并且更改颜色
        mama() {
          if (this.name.length >= 5) {
            console.log("判断正确");
            this.one=true;
            this.two=false;
            this.solo=false;
            this.mingzi=this.name;
            this.four=true;
            this.therr=false;
          } else if(this.name.length <= 24) {
            console.log("判断错误");
            this.one=false;
            this.two=true;
            this.solo=true;
            this.therr=true;
            this.four=false
          }
          this.$store.commit("changeUserName",this.name)
        },
        //当点击按钮的时候,获取到值并传送给前面
        dianji(){
          this.mingzi1=this.mingzi;
          console.log(this.mingzi1);
        }

      },

      //计算属性
      computed: {

      },
      //创建完毕的时候
      created(){
        this.name=this.$store.state.shopsInfor.userInfor.username;
      },

      }




</script>

<style scoped>
  /*<!--input-->*/
 .div_input{
   padding-left: 0.6rem;
   margin: 0.7rem 0 0.7rem 0;
   border: 0.02rem solid rgba(0,0,0,0.3);
   font-size: 1rem;
   width: 90%;
   background: #f2f2f2;
   line-height: 2.6rem;
 }
  .div_input1{
    padding-left: 0.6rem;
    margin: 0.7rem 0 0.7rem 0;
    border: 0.02rem solid red;
    font-size: 1rem;
    width: 90%;
    background: #f2f2f2;
    line-height: 2.6rem;
  }

  body,
  html {
    height: 100%;
    width: 100%;
    background: white;
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
  .LmPass{
    text-align: center;
  }
  .LmPass input{

  }

  .LmPass button{
    width: 90%;
  }
  /*信息按钮*/

  .xxan_L {

    border-radius: 0.2rem;
    width: 90%;
    margin-top: 0.8rem;
    height: 3rem;
  }
  .xxan_L span{
    font-weight: 500;
    font-size: 1.1rem;
  }
</style>
