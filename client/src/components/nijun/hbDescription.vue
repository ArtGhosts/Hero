<template>
  <div class="hbDescription">
    <div class="head">
      <van-nav-bar  left-arrow  title="红包说明" @click-left="onClickLeft"/>
    </div>
    <!--红包内容部分-->
    <div class="duan">
      <div>
        <div v-for="(item,i) in bbb" :key="i">
          <h3>{{item[1]}}{{item[2]}}</h3>
          <div v-for="(a,i) in item.slice(2)" :key="i">
            <p>{{a}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  Vue from 'vue';
    export default {
        name: "hbDescription",
        methods: {
        onClickLeft() {
          this.$router.push({path:'/hongbao'})

        }
      },
      data() {
        return {
          yue:'',
          arr:[],
          arry:[],
        }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((response) =>{
            // console.log(response.data.hongbaoContent);
            this.yue= response.data.hongbaoContent;
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
            for(var i=0; i<b.length;i++){
              if(b[i]=="*"){
                b.splice(i,1,'')
              }
              if(b[i]=='在个人中心'){
                b.splice(i+1,3,'我的红包>')
              }
            }
          })
          // console.log(this.arry)
          return this.arry;
        }
      }
    }
</script>

<style scoped>
  .hbDescription{
    background-color: #fff;
  }

  .duan{
    padding:1rem;
  }
  .duan h3{
    margin:0.5rem 0;
    line-height: 1.2rem;
    font-size: 1.17rem;
  }
  .duan p{
    line-height: 1rem;
    margin: .5rem 0;
    color: #666666;
    font-size: .9rem;
  }
</style>
