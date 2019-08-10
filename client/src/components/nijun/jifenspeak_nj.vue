<template>
  <div class="jfspack">
    <!--小蓝头部-->
    <div class="head">
      <van-nav-bar  left-arrow  title="余额问题" @click-left="onClickLeft"/>
    </div>
    <div class="duan">

      <div>
        <div v-for="(item,i) in bbb" :key="i">
          <h4>{{item[1]}}{{item[2]}}</h4>
          <div v-for="(a,i) in item.slice(2)" :key="i">
            <p>{{a}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "jifenspeak_nj",
    methods: {
      onClickLeft() {
        this.$router.push({path:'/Integral'})
      }
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
        this.yue = response.data.pointtextContent;
      })
    },
    computed:{

      bbb(){
        this.arr = this.yue.split('###');
        this.arr.map((a)=>{
          this.arry.push(a.split(' '))
        });
        this.arry.splice(0,1);
        this.arry.map((b)=>{
          for(var i=0; i<b.length;i++){
            if(b[i]=="*"){
              b.splice(i,1,'')
            }
          }
        });
        return this.arry;
      }

    }

  }
</script>

<style scoped>
  .jfspack{
    background: white;
    height: 40rem;
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
    line-height: 1.2rem;
    margin: .5rem 0;
    color: #666666;
    font-size: .9rem;
  }

</style>
