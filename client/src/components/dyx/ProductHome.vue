<template>
  <transition name="fade" mode="out-in">
    <div>
        <RouterView></RouterView>
        <Loading v-show="isShow"></Loading>
    </div>
  </transition>

</template>

<script>
  import FastFood from './FastFood_dyx'
  import Loading from './LoadingPage_dyx'
    export default {
        name: "ProductHome",
      data(){
          return{
            isShow:true
          }
      },
      components: {
          FastFood,
        Loading,
        },
      computed:{
          loading(){
            setTimeout(()=>{
              this.isShow=false
            },2000)
          }
      },
      created(){
        this.loading
      }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
