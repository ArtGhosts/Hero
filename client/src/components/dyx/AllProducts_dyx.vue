<template>
  <div class="AllProducts">
    <div class="search">
      <div class="shop">
        <!-- 左边 -->
        <div class="menu-wrapper">
          <div class="cart" :class="{'changeBgc':!isChang1}">
            <span class="cartCount" v-if="!isChang1">{{allProductPrice.num}}</span>
          </div>
          <ul>
            <!-- current -->
            <li
              class="menu-item"
              v-for="(goods,index) in searchgoods"
              :key="index"
              :class="{current: index === currentIndex}"
              @click="clickList(index)"
              ref="menuList"
            >
              <span>{{goods.name}}</span>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="shop-wrapper">
          <ul ref="itemList">
            <li class="shops-li" v-for="(goods, index1) in searchgoods" :key="index1">
              <div class="shops-title">
                <h4>{{goods.name}}</h4>
                <span>{{goods.description}}</span>
              </div>
              <ul class="phone-type">
                <li v-for="(value,index) in goods.foods" :key="index" class="lists">
                  <!--新品-->
                  <div  class="newPro" v-if="value.attributes[0] && value.attributes[0].icon_name==='新'">{{value.attributes[0].icon_name}}品</div>
                  <img :src="'//elm.cangdu.org/img/'+value.image_path" alt="" class="picture" @click="productInfor(value)">
                  <div class="list">
                    <h4 id="texts">
                      <span>{{value.name}}</span>
                      <span class="shopSign pull-right" v-if="value.attributes[1] && value.attributes[1].icon_name==='招牌'">{{value.attributes[1].icon_name}}</span>
                      </h4>
                    <!--第二行-->
                    <div class="sale">
                      <span>月售{{value.month_sales}}份</span>
                      <span>好评率{{value.satisfy_rate}}%</span>
                    </div>

                    <p>11</p>
                    <!--最后一行-->
                    <div class="last">
                      <span class="price">￥{{value.specfoods[0].price}}</span>
                      <div class="cut" v-if="value.isShow">
                        <span @click="cutProducts(value)"><i class="iconfont changeColor">&#xe657;</i></span>
                        <span>{{value.count}}</span>
                      </div>
                      <span class="pull-right standard" v-if="value.specifications[0]||value.specifications[0]==='规格'" @click="selectStandard(value)">选{{value.specifications[0].name}}</span>
                      <span @click="addProducts(value)" class="pull-right" v-else><i class="iconfont changeColor" >&#xe64e;</i></span>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--购物车-->
    <div class="shopCart">
      <!--购物车图标和总价-->
      <div class="footLeft pull-left">
        <div class="cart" :class="{'changeBgc':!isChang1}" @click="isShowShopInfor">
          <span class="cartCount" v-if="!isChang1" >{{allProductPrice.num}}</span>
          <i class="iconfont" >&#xe606;</i>
        </div>
        <div class="text">
          <p class="p1">￥{{allProductPrice.allFee}}</p>
          <p class="p2">配送费￥{{float_delivery_fee}}</p>
        </div>
      </div>
      <div class="footRight pull-right" :class="{'newFoot':!isChang1}">
        <span v-if="isChang1">还差￥20起送</span>
        <span v-else @click="payMoney">去结算</span>
      </div>
    </div>
    <!--购物车蒙板-->
    <transition enter-active-class="animated fade" leave-active-class="animated fade" mode="out-in">
      <div class="mask" v-if="isShowShop">
        <!--购物车蒙板-->
            <ul v-if="isShowShopCartProduct">
              <li v-if="isShopCart">
                <span>购物车</span>
                <div class="pull-right" @click="makeShopCartEmpty">
                  <span><i class="iconfont">&#xe619;</i></span>
                  <span>清空</span>
                </div>
              </li>
              <li class="productInShop" v-for="(val,index) in shopCartProduct" :key="index">
                <span>{{val.name}}</span>
                <div class="pull-right">
                  <span class="price">￥{{val.specfoods[0].price}}</span>
                  <div>
                    <div class="cutCount">
                      <span @click="cutProducts(val)"><i class="iconfont changeColor" v-if="!isChang1">&#xe657;</i></span>
                      <span v-if="!isChang1">{{val.count}}</span>
                    </div>

                    <span @click="addProducts(val)"><i class="iconfont changeColor" >&#xe64e;</i></span>
                  </div>
                </div>
              </li>
            </ul>
        <!--选规格的蒙板-->
           <div class="select" v-if="isShowStandard">
              <header>
                <span>{{productStandard.name}}</span>
                <span class="cross pull-right" @click="exit"><i class="iconfont" >&#xe602;</i></span>
              </header>
             <h5>{{productStandard.specifications[0].name}}</h5>
             <div class="selectStandard">
               <span @click="selectFood(index)" :class="{'changeColor':index==current}" v-for="(val,index) in productStandard.specfoods" :key="index">{{val.specs_name}}</span>
             </div>
             <div class="money">
               <span v-if="isShowPrice" class="textColor">￥{{productStandard.specfoods[0].price}}</span>
               <span v-else class="textColor">￥{{productStandard.specfoods[1].price}}</span>
               <span class="addCart pull-right">加入购物车</span>
             </div>
           </div>
      </div>
    </transition>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import Vue from 'vue'
    export default {
        name: "AllProducts",
      data(){
          return{
            //是否展示新品
            isShow:false,
            // 所有商品
            searchgoods:[],
            //右侧列表滑动的y轴坐标
            scrollY:0,
            //所有分类头部位置
            rightLiTops:[],
          //配送费
            float_delivery_fee:'',
          //结算切换
            isChang1:true,
          //减号和商品数量
            isShowCut:false,
          //是否展示购物车数量
            isShowShopCartProduct:false,
            //购物车中商品
            shopCartProduct:[],
          //是否展示购物车第一行
            isShopCart:true,
          // 是否展示规格蒙板
            isShowShop:false,
          //获取点击规格商品信息
            productStandard:{},
          //显示不同规格的价钱
            isShowPrice:true,
          //当前点击的规格
            current:0,
            isShowStandard:false
          }
      },
      methods:{
        //结算
        payMoney(){
          this.$router.push({path:'/Indent'})
        },
        //点击获取商品详情
        productInfor(value){
          console.log(value);
          localStorage["EveryProductInfor"]=JSON.stringify(value);
          this.$router.push({path:"/EveryProductInfor"})
        },
        //点击减少商品数量
        cutProducts(v){
              if(v.count==1){
                v.isShow=false;
                // this.shopCartProduct.splice(v)
                //不显示蒙板
                this.isShowShop=false;
                this.isShowShopCartProduct=false;
              }
          this.$store.commit("cutProduct",v)
        },
        //点击添加商品数量
        addProducts(v) {
          v.isShow = true;
          //点击某个商品获取商品的信息，并添加一个count属性，记录商品的数量
          if (!v.count) {
            this.$set(v, "count", 1);
          } else {
            v.count++
          }
          // console.log(v.this.proDetails.item_id);
          this.$store.dispatch("addProduct", v);
        },
        //点击清空购物车
        makeShopCartEmpty(){
          //商品为空
          this.$store.commit("emptyShopCart");
          //不显示购物车信息中购物车该列
          this.isShopCart=false;
          //不显示蒙板
          this.isShowShop=false;
          this.isShowShopCartProduct=false;
        // 不显示左边热销榜的数量，底部购物车的颜色和数量以及结算
          this.isChang1=true;
          this.shopCartProduct=[]
        },
        //点击展示购物车商品
        isShowShopInfor(){
          this.isShowStandard=false;
          // console.log(this.shopCartProduct);
          if(this.shopCartProduct.length==0){
            this.isShowShop=false;
            this.isShowShopCartProduct=false
          }else{
            //显示购物车信息中购物车该列
            this.isShopCart=true;
            this.isShowShopCartProduct=!this.isShowShopCartProduct;
            this.isShowShop=true
          }
        },
        //商品滚动
        _initBScroll(){
          //左边滚动
          this.leftBscroll = new BScroll('.menu-wrapper',{
            click:true
          });
          //右边滚动
          this.rightBscroll = new BScroll('.shop-wrapper',{
            click:true,
            //在滚动中触发scroll 事件
            probeType: 3
          });
        },
        clickList(index){
          // alert(1)
          this.scrollY = this.rightLiTops[index];
          this.rightBscroll.scrollTo(0,-this.scrollY,200,)
        },
        //求出右边列表的高度
        _initRightHeight(){
          let itemArray=[]; //定义一个伪数组
          let top = 0;
          itemArray.push(top);
          //获取右边所有li的礼
          let allList = this.$refs.itemList.getElementsByClassName('shops-li');
          //allList伪数组转化成真数组
          Array.prototype.slice.call(allList).forEach(li => {
            top += li.clientHeight; //获取所有li的每一个高度
            itemArray.push(top)
          });
          this.rightLiTops = itemArray;
          // console.log(this.rightLiTops)
        },
        //左右联调
        _initLeftScroll(index){
          let menu = this.$refs.menuList;
          let el = menu[index];
          this.leftBscroll.scrollToElement(el,300,0,-300)
        },
      //添加并计算购物车数量的方法
        addAndCount(shopCartInfor){
          let allProInfor=shopCartInfor;
          // console.log(allProInfor);
          //所有数量
          let num=0;
          //所有费用
          let allFee=0;
          for(let val in allProInfor){
            num+=allProInfor[val].count;
            allFee+=(allProInfor[val].count*allProInfor[val].specfoods[0].price)
          }
          return {num:num,allFee:allFee}
        },
      //点击选规格获取商品
        selectStandard(value){
          console.log(value);
          //显示蒙板
          this.isShowShop=true;
          this.isShowStandard=true;
        //点击商品信息
          this.productStandard=value
        },
        //退出选规格
        exit(){
          this.isShowShop=false;
          this.isShowStandard=true;
        },
      //点击获取商品规格
        selectFood(v){
          this.current=v
        },
      //点击添加
      //   addProductToCart() {
      //     console.log(this.productStandard.specfoods[this.current]);
      //   },
      },
      watch:{
        searchgoods(){
          //监听数据
          this.$nextTick(() =>{
            //左右两边滚动
            this. _initBScroll();
            //右边列表高度
            this._initRightHeight()
          })
        }
      },
      computed: {
        //动态绑定class类名
        currentIndex(index) {
          const {scrollY,rightLiTops} = this;
          return rightLiTops.findIndex((tops,index )=>{
            this._initLeftScroll(index);  //调用左右联调滚动效果
            return scrollY >= tops && scrollY < rightLiTops[index + 1]
          })
        },

        //获取添加到购物车中的信息
        allProductPrice(){
          let shopCartInfor=this.$store.state.shopsInfor.addProductCount;
          if(shopCartInfor.length!=0){
            this.isChang1=false;
          }else{
            this.isChang1=true;
          }
          return this.addAndCount(shopCartInfor)
        },

      },

      created(){
        //获取店铺信息
        this.proDetails=JSON.parse(localStorage["proDetails"]);
        // console.log(this.proDetails)
        this.float_delivery_fee=this.proDetails.float_delivery_fee;

        //获取店铺中加购的商品的数据
        this.shopCartProduct=this.$store.state.shopsInfor.addProductCount;
        // console.log(this.shopCartProduct)

        //获取商品
        Vue.axios.get("https://elm.cangdu.org/shopping/getcategory/"+this.proDetails.id).then((result)=>{
          console.log(result.data.category_list);
          this.searchgoods=result.data.category_list;
        }).catch((err)=>{
          console.log(err)
        });
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    width 100%
    height 100%
    background-color #f5f5f5
    overflow hidden

    .shop
      display flex
      position absolute
      top 8.8rem
      bottom 3.125rem
      width 100%
      overflow hidden
      .menu-wrapper
        background-color #f5f5f5
        width 5rem
        .cartCount
          width 1rem
          height 1rem
          color: white
          text-align center
          background #ff461d
          border-radius 50%
          position absolute
          top 0rem
          left 3.9rem
          z-index 5

        .menu-item
          width 100%
          height 3.75rem
          background #f5f5f5
          display flex
          justify-content center
          align-items center
          font-family lighter
          color #666
          position relative
        .current
          /*color #e02e24*/
          background #ffffff
        .current::before
          content ''
          background-color #3190e8
          /*color #000*/
          width 0.25rem
          height 3.7468rem
          position absolute
          left 0
      .shop-wrapper
        flex 1
        background #fff
        .shops-title
          line-height 3.106rem
          display flex
          flex-direction row
          padding 0 0,0625rem
          height 3.106rem
          align-items center
          justify-content space-between
          color #9999
          background #f5f5f5
          h4
            color:#000
          span
            font-size 0.85rem
            margin-left -4rem
        a
          text-decoration none
          color #9c9c9c
          font-size 0.875rem
        .shops-items
          display flex
          flex-wrap wrap
          li
            display flex
            flex-direction column
            width 33.3%
            height 5.625rem
            justify-content center
            align-items center
            img
              width 60%
              height 60%
              margin-bottom 0.3125rem
            span
              color #151516
              font-size 0.8125rem
              margin-top 1rem
        .phone-type
          width 100%

          .lists
            padding 1rem 0
            border-bottom 0.0625rem solid #e4e4e4 !important
          .list
            width 68%
            display inline-block
            .cut
              display inline-block
              margin-left 1.5rem
            p
              width 1.5em
              height 0.99em
              color (#f1884f)
              border 0.0625rem solid #f1884f
              text-align center
              line-height 0.99em
              border-radius 0.4rem
              font-size 0.75rem
              margin-bottom 0.8rem


            .sale
              display inline-block
              font-size 0.75rem
              margin 0.5rem 0

            .price
              font-size 1rem
              color #f1884f
              font-weight bold
              margin-right 5.2rem

            #texts
              width 100%
              font-weight bold

          .picture
            width 2.93rem
            height 2.93rem
            margin-left 1rem
            vertical-align top

          .changeColor
            color #3190e8

  /*购物车*/
  .shopCart
    width 100%
    height 2.93rem
    color white
    position absolute
    left 0
    bottom 0
    .footLeft
      width 60%
      height 2.93rem
      background #333
      /*text-align center*/
      display inline-block !important
      position relative
      .text
        margin-top 0.5rem
        width 3.575rem
        margin-left 7rem
        text-align left
        p:nth-child(1)
         font-size 1.25rem
        p:nth-child(2)
          font-size 0.75rem

      .cart
        display inline-block !important
        width 3.4568rem
        height 3.4568rem
        background #3d3d3f
        text-align center
        border-radius 50%
        border 0.18rem solid #444
        position absolute
        top -1rem
        left 2rem
        z-index 20

        .changeBgc
          background #3190e8
        .cartCount
          width 1rem
          height 1rem
          color: white
          background #ff461d
          border-radius 50%
          position absolute
          top -0.5rem
          right 0
        i
          display inline-block
          margin-top 0.5rem
          font-size 2rem


      .changeBgc
        background #3190e8

    .footRight
      width 40%
      height 2.93rem
      background #535356
      text-align center
      line-height 2.93rem
      display inline-block !important

    .newFoot
      background #4cd964

  /*蒙板*/
  .mask{
    width: 100%;
    height:38.76rem;
    background: rgba(0,0,0,0.3);
    position: absolute;
    top:0;
    left:0;
    z-index 10
  }
  /*选规格*/
  .select
    height 12.43rem
    width  16.56rem
    background white
    margin 12rem auto
    border-radius 0.5rem
    .selectStandard
      width 100%
      padding 0 0.5rem
      margin-top 2rem
      .changeColor
          color #3190e8
          border 0.0625rem solid #3190e8
      span
        border 0.0625rem solid #ddd
        padding 0.6rem 0.7rem
        color #333
        margin-left 0.5rem
        border-radius 0.3rem

    .money
        width 100%
        height 3.375rem
        line-height 3.375rem
        background #f9f9f9
        font-size 1rem
        border-radius 0 0 0.5rem 0.5rem
        margin-top 3rem
    .addCart
      display inline-block
      height 1.875rem
      text-align center
      line-height 1.875rem
      width 5.625rem
      background #3190e8
      color  white
      font-size 0.75rem
      border-radius 0.3rem
      margin-right 0.5rem
      margin-top 0.8rem
    .textColor
        margin-left 1rem
        color #ff6000
        font-size 1.25rem
        font-weight bold


    header
      width 100%
      text-align center
      padding 1rem
      margin-bottom 0.8rem
      font-size 1rem
    h5
     margin 1rem 1rem


  /*购物车蒙板*/
  .mask ul{
    width: 100%;
    background: #eceff1;
    color:#333;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .mask ul div{
    display: inline-block;
  }
  .mask ul li{
    width: 100%;
    height:2.8125rem;
    /*line-height:2.8125rem;*/
    padding: 0.85rem;
  }

  .productInShop{
    width: 100%;
    height:2.8125rem;
    /*line-height:2.8125rem;*/
    font-weight: bold;
    background: white;
  }
  .price{
    display: inline-block;
    margin-right: 1rem;
    color:#ff461d;
    font-weight: bold;
  }
  .changeColor{
    color:#3190e8;
  }


//新品
.lists{
  position :relative;
  overflow:hidden;
}
  .newPro{
    width:3rem;
    text-align:center;
    background:#5ec452;
    padding-top:2rem;
    color:white;
   transform:rotateZ(-45deg);
    font-size:0.75rem;
    position:absolute;
    top:-1.5rem;
    left:-1.5rem;
  }
.shopSign
  display inline-block
  width 2.5rem
  text-align center
  font-size 0.75rem
  color #f07373
  border 0.0625rem solid #f07373
  border-radius 0.8rem
.standard
  display inline-block
  width 3.125rem
  height 1.48rem
  line-height 1.48rem
  color white
  background #3190e8
  border-radius 0.3rem
  text-align center
  font-size 0.75rem



</style>
