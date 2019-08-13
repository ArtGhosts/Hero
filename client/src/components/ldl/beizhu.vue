<template>
  <div>
    <!--顶部设置-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/Indent'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/Indent'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/mine'}">订单备注</h4>
      </div>
    </div>
    <!--快速备注-->
    <div class="one">
      <h4 class="one_h4">快速备注</h4>
      <ul class="one2">
        <li v-for="(pro ,indea) in baba" class="one1">
          <span v-for="(arr,index) in pro" @click="A1(index,arr,pro,indea)" class="one1_span" :class="{active:index==pro.currentIndexA}" >{{arr}}</span>
        </li>
      </ul>
    </div>
    <!--其他备注-->
    <div class="two">
      <p class="two_p">其他备注</p>
      <textarea placeholder="请输入备注内容(可不填)" class="two_text" v-model="textdesc">
      </textarea>
    </div>
    <div style="text-align: center">
      <van-button type="primary" class="two_button" @click="yes()" >确认</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "beizhu",
    data() {
      return {
        id_ldl: {},
        sunzi:[],
        baba: [
          ["不要辣", "少点辣", "多点辣"],
          ["不要香菜"],
          ["不要洋葱"],
          ["多点醋"],
          ["多点葱"],
          ["去冰", "少冰"]
        ],
        textdesc:'',
        less:{},
        str:'',
      }
    },
    //事件
    methods: {
      //点击之后传值
      yes(){
        for(var key in this.less){
          // console.log(key);
          this.str+=this.less[key]+","
        }
        if(this.textdesc){
          this.str+=this.textdesc;
        }else{
        }
        console.log(this.str);
        this.$router.push({path:'/Indent',query:{hcuanzhi:this.str}});
      },
      A1(index,arr,pro,indea){
        console.log(index,);
        console.log(arr);
        this.$set(pro,"currentIndexA",index);
        this.less[indea]=pro[pro["currentIndexA"]];
        console.log(this.str);
      },
    },
    created() {
      this.id_ldl = this.$store.state.shopsInfor.userInfor;
      console.log(this.id_ldl);
      console.log(this.$store.state.shopsInfor.addProductCount);
      console.log(this.$store.state.shopsInfor.addProductCount);
    }
  }
</script>

<style scoped lang="less">
  /*<!--中间的快速备注-->*/
  .active{
    background: blue;
    color: white;
  }
  .one {
    /*height: 10rem;*/
    width: 100%;
    background: white;
    margin: 0;
    padding: 1rem;
    .one1 {
      border: 0.04rem solid blue;
      display: inline-block;
      border-radius: 3%;
      margin-right: 1rem;
      margin-bottom: 0.6rem;
      .one1_span{
        display: inline-block;border: 1px solid blue
      }
      .one1_span1 {
        /*padding: ;*/
        border-right: 0.02rem solid blue;
        padding: 0.4rem 1rem;
        line-height: 2.1rem;
      }
      .one1_span2 {
        border-right: 0.02rem solid blue;
        padding: 0.4rem 1rem;
      }
    }
    .one2 {
      line-height: 2rem;
      display: inline;
      .one2_span1 {
        margin-left: 1rem;
        background: white;
        border: 0.043rem solid blue;
        border-radius: 6%;
        display: inline-block;
      }
      .one2_span2 {
        background: white;
        border: 0.043rem solid blue;
        border-radius: 6%;
        margin: 0.4rem 0;
        display: inline-block;
      }
      .one2_span3 {
        margin: 0 1rem;
        background: white;
        border: 0.043rem solid blue;
        border-radius: 6%;
        /*margin: 0.4rem  0;*/
        display: inline-block;
      }
      .one2_span4 {
        margin-right: 2rem;
        background: white;
        border: 0.043rem solid blue;
        border-radius: 6%;
        display: inline-block;
      }
    }
    .one3 {
      margin-top: 0.5rem;
      border: 0.043rem solid blue;
      display: inline-block;
      border-radius: 7%;
      .one3_span1 {
        border-right: 0.08rem solid blue;
        line-height: 2rem;
        padding: 0.32rem 1rem;
      }
      .one3_span2 {
        line-height: 2rem;
        padding: 0.32rem 1rem;
      }
    }
    .one_h4 {
      font-size: 0.9rem;
      margin-bottom: 0.7rem
    }
  }
  span {
    padding: 0 0.6rem;
  }

  .two {
    width: 100%;
    /*height: 10rem;*/
    background: white;
    padding: 0.7rem;
    .two_p {
      line-height: 2rem;
      color: black;
      font-size: 0.9rem;
      margin-bottom: 0.2rem;
    }
    .two_text {
      background: #f9f9f9;
      height: 6.2rem;
      width: 100%;
      padding: 1rem;
      border-radius: 2%;
      font-size: 0.9rem;
      margin-bottom: 1.1rem;
      border: 0.01rem solid #f9f9f9;
    }
  }
  /*下方的按钮*/

  .two_button {
    background: #4cd964;
    width: 90%;
  }

  .search i {
    color: white;
  }
  /*顶部外围div*/

  .top_L {
    width: 100%;
    height: 2.8rem;
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
</style>
