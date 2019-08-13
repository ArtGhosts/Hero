<template>
  <div style="height: 100%">
    <!--小兰头-->
    <div class="topnj">
      <router-link :to="{path:'/Shop_Address'}"><span class="glyphicon glyphicon-menu-left pull-left back" style="color: white;"></span></router-link>
      <div class="denglu">
        添加地址
      </div>
    </div>

    <div class="clearfix"></div>
    <!--内容-->
    <div class="clearfix Box">
      <div class="one">
        <span class="pull-left tact contact">联系人</span>
        <div class="pull-left inPut">
          <div style="border-bottom: 0.1rem solid rgba(0,0,0,0.04);width: 17rem">
            <input type="text" class="nameInput" placeholder="名字(请先选择配送地点)" maxlength="7" v-model="UserName">
          </div>
          <div class="sexInput">
            <el-radio v-model="radio" label="1">先生</el-radio>
            <el-radio v-model="radio" label="2">女士</el-radio>
          </div>
        </div>
      </div>
      <div class="tow">
        <span class="pull-left tact tactPhone">联系电话</span>
        <div class="pull-left inPut">
          <input type="text" class="nameInput" placeholder="手机" v-model="InputPhone" maxlength="11">
        </div>
        <img src="../../assets/imgs/手机.png" style="width: 1.5rem;height: 1.5rem;margin-top: 0.6rem"/>
        <div class="clearfix"></div>
      </div>
      <div class="three">
        <span class="pull-left tact contact">送餐地址</span>
        <div class="pull-left inPut">
          <div style="border-bottom: 1px solid rgba(0,0,0,0.04);width: 100%;">
            <input type="text" class="nameInput" style="color: gray;" placeholder="您的地址" @click="seachPath" v-model="PathName">
          </div>
          <div style="width: 100%;">
            <input type="text" class="nameInput" placeholder="详细地址(如门牌号等)" v-model="detailed" maxlength="15" >
          </div>
        </div>
      </div>
      <div class="">
        <span class="pull-left tact tactPhone">标签</span>
        <div class="pull-left ">
          <input type="text" class="nameInput" placeholder="无/家/学校/公司(必填)" v-model="tag"  maxlength="15">
        </div>
      </div>
    </div>
    <button class="btn btn-default under" @click="under">确认</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "Select_Address",
    data(){
      return{
        isHide:false,
        SetTxt:'',
        // 存用户名id
        UserId:'',
        radio:'1',
        // 用户名
        UserName:'',
        // 手机号
        InputPhone:'',
        // 获取送餐地址
        PathName:this.$route.query.SelectPathname,
        // 获取详细地址
        detailed:'',
        // 获取标签
        tag:'',
        // 获取经纬度
        geohash: this.$route.query.SelectGeohash
      }
    },
      methods:{
      // 点击进入搜索地址
      seachPath(){
        this.$router.push({
          path:'/Select_Position'
        })
      },
      // 点击确认传递数据 , 增加收货地址
      under(){
        let radio = parseInt(this.radio)
        // console.log(this.geohash)
        Vue.axios.post(`https://elm.cangdu.org/v1/users/${this.UserId}/addresses`,{
          address:this.PathName,
          address_detail:this.detailed,
          geohash:this.geohash,
          name:this.UserName,
          phone:this.InputPhone,
          tag:this.tag,
          sex:radio,
          phone_bk:'123123',
          tag_type:2,
        }).then((res)=>{
          // console.log(res)
          if(res.data.success === "添加地址成功"){
            this.$router.push({
              path:'/Shop_Address'
            })
          }else if(res.data.message === '地址信息错误'){
            this.SetTxt = res.data.message
          }else if(res.data.message === '详细地址信息错误'){
            this.SetTxt = res.data.message
          }else if(res.data.message === '收货人姓名错误'){
            this.SetTxt = res.data.message
          }else if(res.data.message === '标签错误'){
            this.SetTxt = res.data.message
          }
        })
      },
    },
    mounted(){
      // 获取登录的用户名id
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
        console.log(res);
        this.UserId = res.data.user_id;
      })
    }
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
  /*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/
  .sexInput div{
    margin-top: 4.5rem;
  }
  .Box input  {
    font-size: 0.7rem;
  }
  .Box{
    background: white;
    margin-top: 2.8rem;
    padding-left: 1.5rem;
    padding-right: 1rem;
    line-height: 2rem ;
    }
  .under{
    background: #4cd964;
    color: white;
    width: 85%;
    line-height: 2.5rem;
    margin-top: 2rem;
    margin-left: 1.5rem;
  }
  .tactPhone{
    display: inline-block;
    font-size: 0.8rem;
    line-height: 3.5rem;
  }
  .three, .tow{
    width: 100%;
    border-bottom: .1rem solid rgba(0,0,0,0.04);
    display: inline-block;
    margin-bottom: 1rem;
  }
  .tow img{
    float: right;
  }
  .one{
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid rgba(0,0,0,0.04);
  }
  .sexInput{
    height: 2.5rem;
    line-height: 2.5rem;
  }

  .nameInput{
    width: 100%;
    border: 0;
    font-size: 0.8rem;
    outline: none;
    line-height: 3rem;
  }
  .contact{
    display: inline-block;
    font-size: 0.8rem;
    height: 5rem;
    line-height: 2.5rem;
  }
  .tact{
    width: 4rem;
  }
  .inPut{
    width: 9rem;
  }

</style>
