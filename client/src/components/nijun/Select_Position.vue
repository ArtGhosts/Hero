<template>

  <!-- 增加地址的搜索地址 -->
  <div style="list-style: none;">
    <!--小兰头-->
    <div class="topnj">
      <router-link :to="{path:'/Select_Address'}"><span class="glyphicon glyphicon-menu-left pull-left back" style="color: white;"></span></router-link>
      <div class="denglu">
        搜索
      </div>
    </div>

    <div class="clearfix"></div>
    <!--内容-->
    <div style="width: 100%;background: white;padding: 0.45rem;margin-top: 3rem" class="clearfix">
      <input type="text" class="pull-left" placeholder="请输入小区/写字楼/学校等" v-model="Input">
      <button class="btn btn-default pull-right" @click="getadd()" style="outline: none;">确认</button>
    </div>
    <div class="text-center notSeach" style="margin-top: 10rem;" v-show="notSeach">
      <p>找不到地址?</p>
      <p>请尝试输入小区 , 写字楼 或 用户名</p>
      <p>详细地址(如门牌号)可稍后输入哦.</p>
    </div>
    <ul>
      <li class="Forin" v-for="(per , index) in ForArr" :key="index">
        <router-link :to="{path:'/Select_Address',query:{SelectPathname:per.address,SelectGeohash:per.geohash}}">
          <p>{{per.name}}</p>
          <p>{{per.address}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "Select_Position",
    components: {},
    data() {
      return {
        ForArr:'',
        Input:'',
        notSeach:true,

      }
    },
    methods: {
      getadd() {
        this.notSeach = false
        let b = this.$store.state.addid
        let a = 'https://elm.cangdu.org/v1/pois?city_id=' + b + '&keyword=' + this.Input + '&type=search'
        Vue.axios.get(a).then((response) => {
          // console.log(response);
          this.ForArr = response.data

        });
      }
    },
    mounted(){
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
        // console.log(res);
      })
    }
  }
</script>

<style scoped>
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
    font-size: 1.4rem;
    line-height: 2.856rem;
    margin-left:.5rem;
  }
  /*登录头*/
  .denglu{
    color: white;
    font-size: 1.3rem;
    font-weight: 500;
  }
  /*11111111111111*/
  .Forin p{
    margin: 0;
  }
  .Forin{
    padding: 0.4rem;
    color: rgba(0,0,0,0.5);
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .notSeach p {
    font-size: 1.2rem;
    color: #aaa;
    margin-bottom: .5rem;
  }

  button {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 15%;
    background: rgb(49, 144, 232);
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
    outline: none;
  }

  input {
    padding: .8rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 80%;
    border-radius: 0.1rem;
    height: 2.2rem;
    background: #ebebeb;
    outline: none;
  }
</style>
