<template>
  <!--小蓝头-->
  <div class="nav">
    <!--头部-->
      <div class="top">
        <router-link :to="{}"> < </router-link>
        <h2>密码登录</h2>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login_nj"
    }
</script>

<style scoped>
  .top{
    color: white;
    height: 39px;
    background:royalblue;
    line-height: 39px;
  }
</style>
