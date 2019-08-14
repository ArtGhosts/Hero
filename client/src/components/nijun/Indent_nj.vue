<template>
  <div class="indent">
    <!--小兰头-->
    <div class="topnj">
      <router-link :to="{path:'/ProductDetails'}">
       <span class="pull-left">
       <i class="iconfont" style="font-size: 1.5rem;color: white;padding-left: .5rem">&#xe60c;</i>
        </span>
      </router-link>
      <div class="denglu">
        确认订单
      </div>
      <div class="clearfix"></div>
    </div>
    <!--订单页面头部-->
    <!-- 添加新的收货地址 -->
    <div class="addSite">
    <router-link :to="{path:'/Shop_Address'}">
        <img src="../../assets/imgs/coord.png" alt="请升级浏览器">
        <span>{{addre1}}</span>
      <span style="margin-left: .5rem">{{addre2}}</span>
        <div class="addGoBack"></div>
      <div class="clearfix"></div>
    </router-link>
    </div>

    <!--分割线-->
    <div class="division"></div>
    <!--送达时间-->
    <div class="reach">
      <div class="reachVessel">
        <p class="clearfix">
          <span class="plan">尽快送达  |  预计  21:50</span>
        </p>

        <p class="toTime">送达时间</p>
        <div class="mango">
          <p>蜂鸟专送</p>
        </div>
      </div>
    </div>
    <!--支付方式-->
    <div class="rowspan_B">
      <van-cell title="支付方式" is-link value="在线支付" />
    </div>
    <div class="rowspan_A">
      <van-cell-group>
        <van-cell title="红包" value="展示只在饿了么中APP支持" />
      </van-cell-group>
    </div>

    <!--小头像-->
    <div class="imgtop">
      <header data-v-4e0d5034="">
        <img data-v-4e0d5034="" :src="'//elm.cangdu.org/img/'+shops.image_path" style="width: 2rem">
        <span class="spname">{{shops.name}}</span>
      </header>
    </div>
    <!-- 结算内容 -->
    <div class="total">
      <!-- 展示被结算的内容 -->
      <table class="shopping" >
        <tr class="shoppingSUM" v-for="(it) in  arderinfo">
          <!-- 商品名称 -->
          <td class="commom">{{it.name}}</td>
          <!-- 商品数量 -->
          <td class="count">x {{it.count}}</td>
          <!-- 商品价格 -->
          <td class="price">{{it.specfoods[0].price}}</td>
        </tr>

      </table>
    </div>
    <!-- 餐盒 -->
    <div class="lunchBox clearfix">
      <span>餐盒</span>
      <span class="lunchBox02" >{{postage}}</span>
    </div>

    <!--订单-->
    <div class="order">
      <span class="p">订单 {{allmoney}}</span>
      <!--待支付-->
      <div class="unpaid">
        <span>待支付
          <br>
          <b>￥{{allmoney}}</b>
        </span>
      </div>
    </div>

    <!-- 配送费 -->
    <div class="road clearfix">
      <span>配送费</span>
      <span class="roadBox02">¥ {{shops.float_delivery_fee}}</span>
    </div>
    <div class="clearfix"></div>
    <div class="division"></div>

    <!--订单备注-->
      <section  class="notes">
        <router-link :to="{path:'/beizhu'}">
          <span class="notes_span">订单备注</span>
          <div class="more_type pull-right">
            <span>{{beizhu}}</span>
            <img src="../../assets/imgs/右箭头灰色.png" alt="">
          </div>
          <div class="clearfix"></div>
        </router-link>
      </section>
    <!--发票-->
    <section  class="notes1">
      <router-link :to="{path:''}">
        <span class="notes_span">发票抬头</span>
        <div class="more_type pull-right">
          <span>不需要开发票</span>
          <img src="../../assets/imgs/右箭头灰色.png" alt="">
        </div>
        <div class="clearfix"></div>
      </router-link>
    </section>

<div class="fenge"></div>
    <!-- 结算栏 -->
    <div class="finally clearfix">
      <span class="fina01">待支付 :</span>
      <span class="finMoney">¥{{allmoney}}</span>
      <span class="finLogo"></span>
      <span class="thatSure" @click="sureOrder">确认下单</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "Indent_nj",
    data(){
      return{
        shops:{},
        arderinfo:[],
        postage:'10000000',
        allmoney:0,
        addre1:'请选择地址',
        addre2:'',
        beizhu:"",
      }
    },
    methods:{
      sureOrder(){
        this.$router.push({path:'/daojishi'})
      }
    },
   created(){
      this.shops=JSON.parse(localStorage["proDetails"]);
     // console.log(localStorage["proDetails"]);
   this.arderinfo = this.$store.state.shopsInfor.addProductCount;
     // console.log(this.$store.state.shopsInfor.addProductCount);
     let allPrice=0;
      for(let i in this.arderinfo){
        allPrice+=this.arderinfo[i].count*this.arderinfo[i].specfoods[0].price
     }
     this.allmoney=allPrice+Number(this.postage)+Number(this.shops.float_delivery_fee)
    },
    mounted() {
      this.addre1=localStorage["addressName"];
      console.log(this.$store.state.useraddr);
      let m = this.$store.state.shopid;
      Vue.axios.get(`https://elm.cangdu.org/shopping/restaurant/${m}`).then((res) => {
          console.log(res.data)
        }
      )
      if( this.$store.state.useraddr !== '' ){
        this.addre2 = this.$store.state.useraddr
      }else{
        this.addre2 = '请填写收货地址'
      }
      // 获取备注
      this.beizhu=this.$route.query.hcuanzhi;
    },

  }
</script>

<style scoped>
  /*小蓝头*/
  .topnj{
    width: 100%;
    background-color:#3190e8;
    text-align: center;
    line-height: 2.85rem;
    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
  }
  /*返回按钮*/
  .back{
    font-size: 1rem;
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
  /* 添加收货地址 */
  .indent {
    width: 100%;
  }
  .addSite{
    width: 100%;
    background-color: white;
    line-height: 4.5rem;
    box-sizing: border-box;
    padding-left: 1rem;
    color: rgb(73,73,73);
    font-size: 1rem;
    margin-top: 2.85rem;
  }
  .addSite img{
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: middle;
  }
  .addSite> .addGoBack{
    width: 1rem;
    height: 1rem;
    background: url("../../assets/imgs/右箭头.png")no-repeat;
    background-position:center center ;
    background-size: cover;
    float: right;
    margin-right: 1rem;

  }
  /* 分割线 */
  .division {
    width: 100%;
    height: .2rem;
    background: url('../../assets/imgs/address_bottom.png') repeat-x;
    background-size: contain;
  }
  /*配送时间*/
  .reach{
    margin-top: .5rem;
    width: 100%;
    height: .8%;
    background: white;
    border: .01rem solid transparent;
  }
  .reachVessel{
    width: 100%;
    background: white;
    padding: 2% 2% .5rem .5rem ;
    border-left: .2rem solid rgb(49,144,232);
  }
  .plan{
    color: #3190e8;
    display: inline-block;
    float: right;
    margin-right: .5rem;
    margin-top: .5rem;
  }
  .toTime{
    color: #333;
    font-size: 1.4rem;
    margin-left: 1.5rem;
    font-weight: 800;
    margin-bottom: 2.5rem;
  }
  /*送达时间*/
  .mango{
    font-size: .8rem;
    width: 4rem;
    height: 2rem;
    background-color: #3190e8;
    float: right;
    text-align: center;
    line-height: 1.5rem;
    border: .2rem double white;
    border-radius: .4rem;
    color: white;
    position: relative;
    right: 1rem;
    top: -2.5rem;
    bottom: 1rem;
  }
  .rowspan_B span{
    line-height: 2rem;
  }
  .rowspan_A span{
    line-height: 2rem;
    color: #AAAAAA;
  }
  .rowspan_B span:nth-child(1){
    color: #666666;
  }
  .rowspan_B  span:nth-child(2){
    font-size: 1.1rem;
    color: #AAAAAA;
  }
  .imgtop{
    margin-top: .4rem;
    background-color: white;
    padding: 1rem;
    border-bottom: .01rem solid #f5f5f5;
  }
  .imgtop img{
    vertical-align: middle;
  }
  .spname{
    font-size: 1.11rem;
    line-height: 2rem;
  }
  /*结算`内容-----------活数据暂时写死*/
  .total{
    background-color: white;
    /*border: .1rem solid red;*/
  }
  .shopping{
    width: 100%;
    padding-left:2rem;
    font-size: .6rem;
    color: #666;
    box-sizing: border-box;
    margin-bottom: 0;
    padding-left: 1rem;

  }
  .shoppingSum .common {
    display: inline-block;
  }
  .shopping .count{
    margin-left: 7rem ;
  }
  .shoppingSum .price {
    margin-left: 1.6rem;
    font-size: .4rem;
  }
  .commom{
    width: 50%;
    box-sizing: border-box;
    font-size: .8rem;
    padding: 1rem;
  }
  .count, .price {
    width: 25%;
    text-align: center;
  }
  /*餐盒*/
  .lunchBox {
    width: 100%;
    font-size: .9rem;
    color: #666;
    background-color: white;
    padding: 1rem;
    border-bottom: .01rem solid #f5f5f5;


  }

  .lunchBox02 {
    float: right;
    margin-right: 1rem;
    font-size: .4rem;
  }
  /*订单*/
  .order{
    background-color: white;
    color: #666;
    padding-left: 1rem;
  }
  .p{
    width: 5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 4rem;
  }
  /*待支付*/
  .unpaid{
    display: inline;
    width: 5rem;
    color: goldenrod;
    line-height: 2rem;
  }
  .unpaid span{
    margin-left: 9rem;
    line-height: 1.5rem;
  }
  .unpaid b{
    margin-left: 15rem;
  }
  /*配送费*/
  .road{
    width: 100%;
    padding-top: 1rem;
    font-size: 1rem;
    color: #666;
    padding-left: 1rem;
    background-color: white;
    line-height: 2rem;
  }
  .roadBox02{
    float: right;
    margin-right: 2rem;
    font-size: .8rem;
  }
  /*订单备注*/
  .notes{
       margin-top: .5rem;
       background-color: white;
       padding: 0 1rem;
       vertical-align: middle;
       line-height: 3rem;

     }
  .notes1{
    background-color: white;
    padding: 0 1rem;
    vertical-align: middle;
    line-height: 3rem;
    /*margin-bottom: 5rem;*/

  }
  .notes_span{
    width: 30%;
    color: #666666;
    font-size: 1rem;
  }
  .more_type{
    font-size: 1rem;
    color: #AAAAAA;
    display: inline;
  }
  .more_type img{
    width: 1.5rem;
    height: 1.5rem;
    background-position: right center;
    background-size:cover;
    vertical-align: middle;
  }

  .fenge{
    height: 10rem;
  }
  /*结算栏*/
  .finally{
    width: 100%;
    height: 3rem;
    background: rgb(80,66,66);
    position: fixed;
    bottom: 0;
    left: 0 ;
    right: 0;
  }
  .fina01{
    color: white;
    display: inline-block;
    position: relative;
    left: .8rem;
    line-height: 3rem;
    font-size: 1.3rem;
  }

  .finMoney{
    color: white;
    position: relative;
    left: 1rem;
    line-height: 3rem;
    font-size: 1.1rem;
  }

  /*结算确认按钮*/
  .thatSure{
    width: 32%;
    height: 100%;
    display: inline-block;
    background: linear-gradient(to right,rgb(82,212,117) 0% ,#6be67f 100%);
    border-radius: .2rem;
    float: right;
    text-align: center;
    line-height: 3rem;
    color: white;
    font-size: 1.2rem;
  }
</style>


