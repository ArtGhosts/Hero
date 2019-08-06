<template>
    <div class="details">
      <!--头部-->

    </div>
</template>

<script>
    export default {
        name: "ProductDetails_dyx",
      data(){
          return{
          //商品详情信息
            proDetails:{},
          }
      },
      created(){
        this.proDetails=JSON.parse(localStorage["proDetails"]);
        console.log(this.proDetails)
      }
    }
</script>

<style scoped>

</style>
