<template>
  <div>
    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/service'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/service'}"></van-icon>
        </router-link>
        <h4 class="cityNa" :to="{path:'/mine'}">{{id}}</h4>
      </div>
    </div>
    <div class="zhong" v-html="nr">
      <!--<span style="line-height: 1.5rem">{{nr}}</span>-->

    </div>

  </div>
</template>

<script>
  export default {
    name: "Mybaba_ldl",
    data() {
      return {
        id: {},
        nr: {}
      }
    },
    // methods(){
    //   preg_match_all('/<img[^>]+>/is',$s,$m);
    //   print_r($m);
    // },
    created() {
      //   this.id 获取传来的标题名字
      this.id = this.$route.query.ID;
      /* 定义一个正则定律  前面  (  ?<=\( )是筛选内部开头为 ( ,
        后面  ?=\)  是筛选内部结尾为  ) 的,这个正则的意思就是筛选出来获取的值里面()里面的东西 */
      var reg = /((?<=\().*?(?=\)))/g;
      /*获取传来的内容的值用正则处理一下,reg就是正则,把reg里面的东西替换到img的src里面,所以得到的值就会把img和内容分离开*/
      this.nr = this.$route.query.RN.replace(reg, "<img src='$1'>");
      // 这个也是筛选,意思是替换掉获取到的值里面的多余的标点符合(可以试着吧这个注掉看一下效果就懂了)
      this.nr = this.nr.replace(/(\!\[\]\()|(\))/g, "");

      console.log(this.nr);
      // console.log(this.$route.query.RN)
      // ”jpg|bmp|gif|ico|png”; arr=str.split(”|”);

    }
  }
</script>

<style scoped>
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
</style>
