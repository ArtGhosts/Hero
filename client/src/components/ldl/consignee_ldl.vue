<template>
  <div>
    <!--顶部操作-->
    <div class="search">
      <div class="top_L">
        <router-link :to="{path:'/account_ldl'}">
          <van-icon name="arrow-left" class="vant_top1" :to="{path:'/account_ldl'}"></van-icon>
        </router-link>
        <h4 class="cityNa">编辑地址</h4>
        <h3 class="bj" v-show="A_show" @click="click_no_ldl">编辑</h3>
        <h3 class="bj" v-show="B_show" @click="click_ok_ldl">完成</h3>
      </div>
    </div>
    <!--循环设置-->
<div style="margin-top: 0.7rem">
    <ul>
      <li v-for="(a,index) in Id" :key="index" class="li_ldl">
        <div class="li_div1_ldl">
  <p >{{a.address_detail}}</p>
  <span >{{a.phone}}</span>
        </div>
        <div  class="li_div2_ldl">
          <span @click="shanchu(a,index)" class="li_div2_span_ldl" v-show="C_show">X</span>
        </div>
      </li>
    </ul>
</div>

    <hr class="hr_ldl">
    <router-link :to="{path:'/member/compile_ldl'}">
    <van-cell is-link style="border-top: 0.06rem solid rgba(0,0,0,0.2);border-bottom: 0.06rem solid rgba(0,0,0,0.2);">
      <template slot="title">
        <span class="custom-title">新增地址</span>
      </template>
    </van-cell>
    </router-link>
  </div>

</template>

<script>
  import Vue from 'vue'

  export default {
    name: "consignee_ldl",
    data(){
      return{
        //判断编辑完成页面是否展现


        one:true,
        //接受传过来的值
        Id:[],
        ID_ldl:"",
        id_ldl:{},
      //  用两个值来接受大数据中的id进行删除
        user_id_l:"",
        address_id:"",
      //  两个隐藏或者显示
        A_show:true,
        B_show:false,
        C_show:false,
      }
    },
    methods:{
      //点击删除的时候
      shanchu(index,i) {
     this.Id.splice(i,1);
        Vue.axios.delete(`https://elm.cangdu.org/v1/users/${index.user_id}/addresses/${index.id}`).then((result) => {
          console.log(result.data);
        })
      },
    // 当点击编辑页面的时候
      click_no_ldl(){
      //  当点击编辑页面的时候,编辑页面消失f,完成页面为显示,并且x显示,
            this.A_show=false;
            this.B_show=true;
            this.C_show=true;
      //  当点击完成页面的时候,完成字符小时,变异字符显示,x小时
      },
      click_ok_ldl(){
        this.A_show=true;
        this.B_show=false;
        this.C_show=false;
      }
    },
    //挂载的时候
    created(){
      this.id_ldl=this.$store.state.shopsInfor.userInfor;
      this.ID_ldl=this.id_ldl.user_id;
      // console.log(this.ID_ldl);
      // console.log(this.id_ldl);
      Vue.axios.get("https://elm.cangdu.org/v1/users/"+this.ID_ldl+"/addresses").then((result) => {
        // console.log();
        this.Id=result.data;
        console.log(this.Id);
        // this.Id.reverse();
        // let it=this.Id.reverse;
        // console.log(this.Id.reverse())
      });

    }
  }
</script>

<style scoped>
  li:nth-child(1){
    background: lavenderblush;
  }
  /*<!--几个循环的样式-->*/
  .li_ldl{
    background: white;padding: 1rem;border-bottom: 0.02rem solid rgba(0,0,0,0.9)
  }
  .li_div1_ldl{
    display: inline-block;line-height: 1.1rem
  }
  .li_div2_ldl{
    display: inline-block;line-height: 2.5rem;position: absolute;right: 1.5rem
  }
  .li_div2_span_ldl{
    display: inline-block;
  }
  .hr_ldl{
    margin-bottom: 0.6rem;margin-top: 0.01rem;background: rgba(0,0,0,0.4);
  }






  /*<!--编辑-->*/
  .bj{
    color: white;
    position: absolute;
    right: 0.5rem;
    line-height: 3rem;
    font-size: 1rem
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

  .LmPass input{
    padding-left: 0.6rem;
    margin: 0.7rem 0 0.7rem 0;
    border: 0.02rem solid rgba(0,0,0,0.3);
    font-size: 1rem;
    width: 90%;
    background: #f2f2f2;
    line-height: 2.6rem;
  }

  .LmPass button{
    width: 90%;
  }
  /*信息按钮*/

  .xxan_L span{
    font-weight: 500;
    font-size: 1.1rem;
  }
</style>
