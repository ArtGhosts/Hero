<template>
  <div>
    <!--顶部页面-->
    <div class="search">
      <div @click-right="asd" class="top_L">
        <van-icon name="arrow-left" @click="asd" class="vant_top"></van-icon>
        <span class="cityNa">{{cityN}}</span>
        <span @click="asd" class="qhcs_L">切换城市</span>
      </div>

    </div>
    <!--中部页面-->
    <div>
      <div class="zhong_L">
        <input type="text" name="username" placeholder="输入学校,商务楼，地址" v-model="inputRef" class="zhong_input_L" :class="{'changeborder':bianlian}">
        <p></p>
        <van-button type="info" @click="input_L" class="xxan_L">信息按钮</van-button>
      </div>
    </div>
    <!--下部历史记录页面-->
    <div v-if="mama" class="ssls_L">
      <span v-if="qingchulishi">搜索页面</span>
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
      <button @click="eliminate" class="ClearHistory" v-if="qingchulishi">清除历史</button>
    </div>
  </div>

</template>
<script>
  import Vue from 'vue'
  export default {
    name: "SearchCity_lgl",
    data() {
      return {
        qingchulishi: false,
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
      // 清除历史纪录
      eliminate() {
        localStorage.clear(localStorage);
        this.shopping1 = [];
        this.qingchulishi = false;
      },

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
          path: "/fastFood",
          query: {
            cityGeohash: this.CitySearch[v].geohash
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
      //返回首页
      asd() {
        this.$router.push({
          path: '/'
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
      // localStorage.setItem("fafa", JSON.stringify(cityN1));
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
      this.shopping1 = JSON.parse(localStorage.getItem("name")) || [];
      console.log(this.shopping1);

      if(this.shopping1.length > 0 || (this.inputRef == null)) {
        this.qingchulishi = true;
      } else {
        this.qingchulishi = false;

      }
    }
  }
</script>
<style scoped>
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
    border: 1px solid rgba(232, 232, 232, 0.5);
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
  /*数据库首页传来的值的样式*/

  .cityNa {
    display: inline-block;
    width: 3rem;
    position: absolute;
    top: 1rem;
    left: 43%;
    color: white;
    z-index: 10;
  }
  /*中间div设置*/

  .zhong_L {
    height: 8rem;
    width: 100%;
    background: white;
    text-align: center;
    margin-top: 0.5rem
  }
  /*信息按钮*/

  .xxan_L {
    width: 90%;
    margin-top: 0.8rem
  }
  /*里面的input*/

  .zhong_input_L {
    margin-top: 1rem;
    width: 90%;
    height: 2rem;
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
    background: white;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
  /*清除历史按钮*/

  .ClearHistory {
    width: 100%;
    height: 3rem;
    background: white;
    border: 0rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
</style>
