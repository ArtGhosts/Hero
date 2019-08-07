<template>
  <div class="detail">
    <!--小蓝头部-->
    <div class="head">
      <van-nav-bar  left-arrow  title="余额问题" @click-left="onClickLeft"/>
    </div>
    <div class="backgroundnj">
      <div class="duan">

        <div>
          <div v-for="(item,i) in bbb" :key="i">
            <h4>{{item[1]}}{{item[2]}}</h4>
            <p>{{item[3]}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  Vue from 'vue';
  import "../../assets/css/NavigationStyle.css"
  export default {
        name: "detail",
      methods: {
        onClickLeft() {
          this.$router.push({path:'/balance'})
        },
      },
      data(){
          return{
            yue:'',
            arr:[],
            arry:[],
          }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((response)=>{
            this.yue= response.data.balanceContent;
          })
      },
      computed:{

        bbb(){
          this.arr = this.yue.split('###')
          this.arr.map((a)=>{
            this.arry.push(a.split(' '))
          });
          this.arry.splice(0,1)
          this.arry.map((b)=>{
            if(b.length==4){
              b.splice(1,0,'')
            }
          })

          return this.arry;
          }
      }
    }
</script>

<style scoped>
/*----------------------上面是蓝色头部代码--------------------------*/
.head div{
   font-weight: bolder;
 }
  .backgroundnj{
    background: white;
    width: 100%;
    height: 36rem;
  }
.duan{
  padding: 0.5rem;
}
.duan p{
  line-height: 1.5rem;
  font-size: .9rem;
  color: #666666;
}
  h4{
    margin: 0.5rem 0;
    line-height: 1.2rem;
    color: #333333;
  }
</style>
