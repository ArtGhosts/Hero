<template>
  <!--警告框组件-->
    <div class="box_nj">
      <div class="tsbox mint-msgbox-btn text-center bounceIn">
        <img src="../../assets/imgs/警告.png"/>
        <p class="mint-cell mint">{{childCom}}</p>
        <button class="underbtn  btn btn-success" @click="SendHide($event)">{{under}}</button>
      </div>
    </div>
</template>

<script>
  export default {
        name: "PromptBox",
      data(){
          return{
            isHide:'',
            under:'确认',
        }
      },
      props:{
          childCom:{
            type:String,
            default:""
          }
      },
      methods:{
          SendHide(e){
            this.$emit("childEvent",this.isHide)
          }
      }
    }
</script>

<style scoped>
  .tsbox img {
    margin-top: 2rem;
    width: 5rem;
    height: 5rem;
  }

  .tsbox p{
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-bottom: -.5rem;
  }

  .tsbox {
    width: 16rem;
    height: 11rem;
    border-radius: 0.5rem;
    position: absolute;
    top: 12rem;
    left: 3.9rem;
    background-color: white;
  }
  .underbtn {
    line-height: 2rem;
    width: 100%;
    background-color: #4cd964;
    color: white;
    border-radius: 0 0 0.5rem 0.5rem;
    outline: none!important;
    border: 0;
    margin-top: 1.8rem;
    font-size: 1rem;
  }
</style>
