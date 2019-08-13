<template>
  <!--选择收获地址-->
  <div class="bgs">
    <!--小蓝头-->
    <div class="allhead">
      <div class="head dz">
        <van-nav-bar  left-arrow  title="选择地址" @click-left="onClickLeft"/>
      </div>
    </div>
    <!--内容层-->
    <div class="biaoshi">
      <!--v-for循环数据-->
      <router-link :to="{query:{addName:add.name,addGeohash:add.geohash}}" v-for="(add, index) in dataArr" :key="index" class="inFor clearfix">
        <div class="pull-left" @click="xuan(add.name)" :class="{'ms':selectName === add.name ?true:false}">
          <p style="margin: 0;"><b style="font-size: 0.8rem; font-weight: 700">{{add.name}}</b><span
            style="margin:01rem">{{add.sex == '1' ? '男' : '女'}}</span><span>{{add.phone}}</span></p>
          <p style="margin: 0.4rem 0 0 0"><span
            class="Home">{{add.tag}}</span><span>{{add.address}}{{add.address_detail}}</span></p>
          <div class="" style="margin: 0.3rem 0.5rem 0 0 ;">
            <div class="shanchu">
              <img src="../../assets/imgs/选中.png" class="dui" style="width: 1.5rem; vertical-align: middle"/>
              <span class="delet " @click="deletePer(index,add)">删除本条信息</span>
            </div>
          </div>

        </div>
      </router-link>

      <!--按钮-->
      <div class="yesbtn">
        <button class="que btn btn-success" @click="myque()">确认</button>
      </div>

      <!--新增收货地址-->
      <p class="Footer text-center">
        <router-link :to="{path:'/Select_Address'}">
          <img src="../../assets/imgs/add_address.png" alt="" style="width: 1.5rem;height: 1.5rem;vertical-align: middle">新增收货地址
        </router-link>
      </p>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';

  export default {
    name: "Shop_Address",
    data(){
      return{
        dataArr:'',
        selectName:"",
      }
    },
    mounted(){
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((respons)=>{
        let userId = respons.data.user_id;
        Vue.axios.get(`https://elm.cangdu.org/v1/users/${userId}/addresses`).then((res)=>{
          this.dataArr = res.data;
          console.log(res.data)
        })
      })
    },
    methods: {
      onClickLeft() {
        this.$router.push({path:'/Indent'})
      },
      xuan(cName){
        this.selectName = cName;
        console.log(cName);
        localStorage["addressName"]=cName;
        // return this.selectName
      },
      myque(){
        for (let i = 0;i <this.dataArr.length; i++) {
          if (this.dataArr[i].name === this.selectName){
            this.$store.state.usname = this.selectName;
            this.$store.state.useraddr = this.dataArr[i].address;
            this.$store.state.useraddrs = this.dataArr[i].address_detail;
            this.$store.state.userph = this.dataArr[i].phone;
          }
        }
        if (this.selectName !== ""){
          this.$router.push({path:'/Indent'})
        }
      },
      deletePer(i,add){
        // this.dataArr.splice(i,1);
        let userId = this.$store.state.shopsInfor.userInfor.user_id;
        this.$http({
          method:"delete",
          url:`https://elm.cangdu.org/v1/users/${userId}/addresses/${add.id}`,
          params: {
            user_id: userId,
            address_id: add.id
          }
        }).then(()=>{
          this.dataArr.splice(i,1);
        })
      }
    },

  }
</script>

<style scoped>
  .bgs{
    background-color: white ;
    width: 100%;
    height: 100%;
  }
.yesbtn{
  text-align: center;
}
.que{
  width: 50%;
  height: 2rem;
  display: inline-block;
  font-size:.5rem;
  color: white;
  margin-top: 5rem ;
  margin-bottom: 8rem;
}
.biaoshi {
  margin-top: 2.5rem;
}

.Footer a {
  width: 100%;
  height: 100%;
  display: inline-block;
  font-size: 1rem;
  background: white;
}
/*页脚*/
.Footer {
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  display: inline-block;
  line-height: 2.5rem;
  padding: 0;
}

.inFor {
  color: black;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
}

.inFor span {
  font-size: 0.7rem;
}

.biaoshi .ms .dui {
  opacity: 1;

}

.dui {
  opacity: 0.1;
}

.inFor .Home {
  display: inline-block;
  background: #ff5722;
  font-size: 0.2rem;
  border-radius: 0.1rem;
  padding: 0 0.3rem;
  margin-right: 0.4rem;
  color: white;
}

.delet {
  width: 100%;
  color: white;
  font-size: 1rem;
  margin-top: 1rem;
  vertical-align: middle;
  margin-left: 12rem;
  background: red;
  padding: .2rem;
  border-radius: .3rem;
  border: .1rem solid red;
}
.shanchu{
  margin-top: 1.5rem;
  display: inline-block;
}
</style>
