<template>
  <div>
    <!--顶部页面-->
    <div class="search">
      <div @click-right="asd" class="top_L">
        <van-icon name="arrow-left" @click="asd" class="vant_top"></van-icon>
        <span class="cityNa">搜索地址</span>
        <span @click="asd" class="qhcs_L">切换城市</span>
      </div>

    </div>
    <!--中部页面-->
    <div>
      <div class="zhong_L">
        <input type="text" name="username" placeholder="请输入小区/写字楼/学校等" v-model="inputRef" class="zhong_input_L" :class="{'changeborder':bianlian}">
        <van-button type="info" @click="input_L" class="xxan_L">确认</van-button>
      </div>
    </div>
    <van-notice-bar :scrollable="false" style="background: #fff6e4;color: #ff883f">
      为了满足商家的送餐要求,建议你从列表中选择地址
    </van-notice-bar>
    <!--下部历史记录页面-->
    <div v-if="mama" class="ssls_L">
      <div>
        <ul>
          <li v-for="(b,index) in shopping1" :key="index" class="ul_li_L" @click="changePage(index)">
            <p>{{b.name}}</p>
            <span>{{b.address}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!--搜索到值的页面-->
    <div class="button_L">
      <div v-if="baba">
        <ul>
          <li v-for="(a,index) in CitySearch" :key="index" class="ul_li_L" @click="shopping(index)">
            <span class="ul_span_L">{{a.name}}</span>
            <p class="ul_p_L">{{a.address}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div style="width: 80%;margin: 8rem auto;color: #969696;text-align: center;" class="botton" v-show="div_p">
      <p>找不到地址?</p>
      <p>请尝试输入小区,写字楼或学校名</p>
      <p>详细地址(如门牌号)可稍后输入哦.</p>
    </div>
  </div>

</template>
<script>
  import Vue from 'vue'
  export default {
    name: "SearchCity_lgl_one",
    data() {
      return {
        //隐藏的下方的p标签

        div_p:true,
        //home页传过来的城市id和城市名
        cityI: "",
        //传来的值
        cityN: "",
        cityN_L: "",
        //输入框的值
        inputRef: "",
        CitySearch: [],
        key_L: {},
        key1_L: [],
        //默认搜索出来的值为隐藏
        baba: false,
        //默认搜索历史为显示
        mama: true,
        //创建变量
        bianlian: false,
        //获取历史纪录
        shopping1: [],
        //接收点击事件的信息
        shuzu: [],
      }
    },
    methods: {


      //点击获取信息
      shopping(v) {
        let one = this.CitySearch[v];
        console.log(this.CitySearch);
        let result = this.shopping1.find((err) => {
          //如果全部内容里面的名字跟点击后获取的名字一样。
          return err.name == one.name;
        });
        //如果没有走上面的代码就运行这个
        if(!result) {
          this.shopping1.push(one);
          localStorage.setItem("name", JSON.stringify(this.shopping1))
        }
        //  路由传值
        this.$router.push({
          path: "/member/compile_ldl",
          query: {
            cityGeohash: this.CitySearch[v]
          }
        });
        console.log(this.CitySearch[v]);
      },
      //路由传值
      changePage(v) {
        this.$router.push({
          path: "/fastFood",
          query: {
            cityGeohash: this.shopping1[v].geohash
          }
        })
      },
      //获取输入框内部的值
      input_L() {
        if(this.inputRef == "" || this.inputRef == null || this.inputRef == undefined) {
          alert("请输入正确的值")
        } else {
          this.baba = true;
          this.mama = false;
          this.div_p=false;
        }
        console.log(this.inputRef);
        Vue.axios.get("https://elm.cangdu.org/v1/pois?city_id=" + this.cityI + "&keyword=" + this.inputRef).then((result) => {
          // this.CitySearch = result.data;
          this.CitySearch = result.data;
          console.log(result);
        }).catch((err) => {
          console.log(err)
        })
      },

      asd() {
        this.$router.push({
          path: '/member/compile_ldl'
        });
      },
    },
    created() {
      let one = JSON.parse(localStorage.getItem("name")) || {};
      this.shuzu.push(one);
      console.log(this.shuzu);
      //这是从首页传来的id值
      this.cityI = this.$route.params.cityID;
      console.log(this.cityI);
      //这是从首页传来name值
      this.cityN = this.$route.params.cityName;

      if(this.cityI) {
        JSON.stringify(localStorage.setItem("id1", this.cityI));
      } else {
        this.cityI = JSON.parse(localStorage.getItem("id1"));
      }
      if(this.cityN) {
        JSON.stringify(localStorage.setItem("name1", this.cityN));
      } else {
        this.cityN = JSON.parse(localStorage.getItem("name1"));
      }
      console.log(this.cityN)
    },
    mounted() {

      // this.shopping1 = JSON.parse(localStorage.getItem("name")) || [];
      console.log(this.shopping1);


    }
  }
</script>
<style scoped>
.botton{

}
  .botton p{
    font-size: 1rem;
    line-height: 2rem;
  }
  /*顶部切换城市样式*/

  .qhcs_L {
    color: white;
    position: absolute;
    right: 0.5rem;
    line-height: 3rem;
    font-size: 1rem
  }
  /*顶部外围div*/

  .top_L {
    width: 100%;
    height: 3rem;
    background: rgb(49, 144, 232);
  }
  /*用插件做的样式*/

  .vant_top {
    line-height: 3rem;
    position: absolute;
    left: 0.8rem;
    font-size: 1.3rem
  }

  .search i {
    color: white;
  }
  /*百度搜的*/

  input[type="text"] {

    box-sizing: border-box;
    font-size: 1rem;
    height: 2.7rem;
    border-radius: 4px;
    color: #6a6f77;
    -moz-appearance: none;
    outline: 0;
    padding: 0 1rem;
    text-decoration: none;
  }

  /*中间div设置*/

  .zhong_L {
    height: 4rem;
    width: 100%;
    background: white;
    padding: 0.7rem;
  }
  /*信息按钮*/

  .xxan_L {
    height: 2.6rem ;
    width: 5rem;
    border-radius: 10%;
  }
  /*里面的input*/

  .zhong_input_L {
    width: 70%;
    height: 1rem;
    background: #f2f2f2;
    border: 0.02rem solid rgba(0,0,0,0.6);
  }
  /*:class里面的设置*/

  .changeborder {
    border: 0.1rem solid sandybrown
  }
  /*下部操作*/

  .button_L {
    width: 100%;
  }
  /*下部搜索历史*/

  .ssls_L {
    line-height: 2rem
  }

  .ssls_L ul>li>span {
    font-size: 0.75rem;
    color: #999;
  }
  /*ul里面li的设置*/

  .ul_li_L {
    width: 100%;

    padding: 1rem;

  }
  /*ul里面span标签*/

  .ul_span_L {
    line-height: 2rem
  }
  /*ul里面p标签*/

  .ul_p_L {
    font-weight: 300;
    font-size: 0.7rem
  }
</style>
