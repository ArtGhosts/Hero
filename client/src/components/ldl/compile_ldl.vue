<!--新增地址-->

<template>
  <div>
    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/account_ldl'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/account_ldl'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/account_ldl'}">新增地址</h4>
      </div>
    </div>
    <!--新增地址-->
    <div class="baba">
      <!--填写姓名-->
      <input type="text" placeholder="请填写你的姓名" class="input_L" :class="{'input_L1':A_class}" @input="A_input()" v-model="A_model">
      <p v-show="A1">请填写您的姓名</p>
      <!--地址-->
      <router-link  :to="{path:'/member/SearchCity_lgl_one'}"> <input type="text" placeholder="小区/写字楼/学校等" class="input_L" @click="tiaozhuan" v-model="this.cityGeohash_one[0].name"></router-link>
      <!--送餐地址-->
      <input type="text" placeholder="请填写详细送餐地址"  class="input_L" :class="{'input_L1':B_class}" @input="B_input()" v-model="B_model">
      <p  v-show="B1">请详细填写送餐地址</p>
      <p  v-show="B2">送餐地址太短了.不能辨识</p>

      <!--能联系到的手机号-->
      <input type="text" placeholder="请填写能够练习到您的手机号"  class="input_L" :class="{'input_L1':C_class}" @input="C_input()" v-model="C_model">
      <p  v-show="C1">请输入正确的手机号</p>
      <!--备用练习电话-->

      <input type="text" placeholder="备用联系电话(选填)"  class="input_L" :class="{'input_L1':D_class}" @input="D_input()" v-model="D_model">
      <p style="margin-bottom: 0rem"  v-show="D1">请输入正确的手机号</p>
    </div>






    <div style="text-align: center">
      <van-button   type="info" class="xxan_L1"   v-show="F1"  @click="dianji">
        <span>确认修改</span>
      </van-button>
      <van-button   type="info" class="xxan_L"  :to="{path:'/member/consignee_ldl',}" v-show="F2" >
        <span>确认修改</span>
      </van-button>
    </div>



    <!--即将消息的标签-->
    <transition enter-active-class="animated bounceIn" leave-active-class="">
      <div class="click_1_div" v-show="baba">
        <img src="../../assets/jinggaokuang.png" height="100" width="100" />
        <p>{{AA}}</p>
        <button class="btn btn-success btn-group btn-block" @click="baba1" style="margin-top: 1rem">确认</button>
      </div>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "compile_ldl",
    data(){
      return{
        //万能牌
        AA:"",


        A_class:false,
        A1:false,
        //双向数据绑定}
        A_model:"",

        B_class:false,
        B1:false,
        B2:false,
        //双向数据绑定}
        B_model:"",

        C_class:false,
        C1:false,
        //双向数据绑定}
        C_model:"",

        D_class:false,
        D1:false,
        //双向数据绑定}
        D_model:"",

        mingzi1:"",
        // 点击按钮
        F1:true,
        F2:false,
        baba: false,
      //  id名字
        ID_ldl:"",
        
      //  用一个对象接受传过来的用户名和账号
        id_ldl:{},
      //  接受外来的值
        cityGeohash_one:"",
      //  经纬度
        geohash_ldl:"",
      }
    },
    //方法
    methods:{
      tiaozhuan(){
          this.$router.push({
            path: './member/SearchCity_lgl_one'
          });
  },
      baba1(){
        this.baba=false;
      },
      //点击事件
      dianji(){
        this.baba=true;
        Vue.axios.post("https://elm.cangdu.org/v1/users/37109/addresses",{
          // 地址
          address:this.cityGeohash_one[0].name,
          // 地址详情
          address_detail:this.B_model,      
          // 经纬度
          geohash:this.geohash_ldl,
          // 收货人姓名
          name:this.A_model,
          // 电话号码
          phone:this.C_model,
          // 标签
          tag:"标签",
          // 性别
          sex:1,
          // 备注电话
          phone_bk:this.D_model,
          // 家
          tag_type:1,
          }
        ).then((result) => {
            console.log(result.data.message)
          if(result.data.message="详细地址信息错误"){
              console.log("aishdaishdaisd")
            this.AA="详细地址信息错误"
          }
          
          
        })
        // console.log("点击到按钮")
        // if(this.A_model.length>0||this.B_model.length>2||this.C_model.length<11){
        //   // console.log(this.A_model,"获取到A的值");
        //   // console.log(this.B_model,"获取到B的值");
        //   console.log(this.C_model,"获取到C的值");
        //   // console.log(this.D_model,"获取到D的值")
        //
        // }
      },


      A_input(){
        if(this.A_model.length>0){
          this.A1=false;
          this.A_class=false;
        }else{
          this.A1=true;
          this.A_class=true;
        }
      },
      B_input(){
        if(this.B_model.length<=2){
          console.log("小于等于2的时候");
          //颜色不变,文字转换一下
          // 太短不能辨识
          this.B2=true;
          this.B_class=true;
          this.B1=false;
          if(this.B_model.length<=0){
            console.log("等于0的时候,填写详细地址");
            // 填写详细的地址
            this.B1=true;
            this.B2=false;
            this.B_class=true;
          }
          // 如果等于零
        }else{
          this.B_class=false;
          this.B1=false;
          this.B2=false
        }
      },
      C_input(){
        if(this.C_model.length==0){
          this.C1=false
          this.C_class=false;
        }else if(!(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/).test(this.C_model)){
          this.C1=true;
          this.C_class=true;
        }else if(this.C_model.length>11){
          this.C1=true;
          this.C_class=true;
        }else {
          this.C1=false
          this.C_class=false;
        }
      },
      D_input(){
        if(this.D_model.length==0){
          this.D1=false
          this.D_class=false;
        }else if(!(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/).test(this.D_model)){
          this.D1=true;
          this.D_class=true;
        }else if(this.D_model.length>11){
          this.D1=true;
          this.D_class=true;
        }else {
          this.D1=false
          this.D_class=false;
        }
        }
      },

    created(){
      // console.log();
      this.id_ldl=this.$store.state.shopsInfor.userInfor;
      this.ID_ldl=this.id_ldl.user_id;
      console.log(this.ID_ldl);
      this.cityGeohash_one=JSON.parse(localStorage.getItem('name'));
      console.log(this.cityGeohash_one);
      this.geohash_ldl=this.cityGeohash_one[0].geohash
      console.log(this.geohash_ldl);
      console.log(this.name = this.$store.state.shopsInfor.userInfor);
    }
    }

</script>

<style scoped lang="less">
  .click_1_div {
    position: absolute;
    top: 10rem;
    left: 2rem;
    border-radius: 5%;
    background: white;
    width: 20rem;
    padding: 2rem;
    text-align: center;
  }



  p{
    margin-left: 2%;
    line-height: 0.7rem ;
    margin-top: 0.6rem;
    font-size: 0.4rem;
    /*color: red;*/
  }


  .input_L{
    height: 2.3rem;
    margin-top: 0.6rem;
    margin-left: 2%;
    border-radius:0.2rem;
    border: 0.05rem solid #ddd;
    font-size: 0.9rem;
    width: 96%;
    padding-left: 0.6rem;
    background: #f2f2f2;
    z-index: 10;
  }
  /*修改样式*/
  .input_L1{
    height: 2.3rem;
    margin-top: 0.6rem;
    margin-left: 2%;
    border-radius:0.2rem;
    border: 0.05rem solid red;
    font-size: 0.9rem;
    width: 96%;
    padding-left: 0.6rem;
    background: #f2f2f2;
    /*text-align: center;*/
    /*!*outline: none;*!*/
  }
  input {
    height: 2.3rem;
    margin-top: 0.6rem;
    border-radius:0.2rem;
    border: 0.05rem solid #ddd;
    font-size: 0.9rem;
    width: 96%;
    padding-left: 0.6rem;
    background: #f2f2f2;
  }
  .baba {
    background: white;
    /*height: 10rem;*/

    width: 100%;
    /*text-align: center;*/
    margin-top: 0.6rem;
    padding-bottom: 1rem;
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


  .xxan_L {
    border: red;
    border-radius: 0.2rem  ;
    width: 90%;
    margin-top: 0.8rem;
    height: 3rem;
    background:rgb(76,200,100);
  }
  .xxan_L span{
    font-weight: 500;
    font-size: 1.1rem;
  }
  .xxan_L1 {
    border: red;
    border-radius: 0.2rem  ;
    width: 90%;
    margin-top: 0.8rem;
    height: 3rem;
    background:rgb(76,200,100);
  }
  .xxan_L1 span{
    font-weight: 500;
    font-size: 1.1rem;
    color: rgb(181,240,193);
  }
</style>
