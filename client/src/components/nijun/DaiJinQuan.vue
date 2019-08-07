<template>
    <div class="DaiJinQuan">
      <div class="clearfix">
        <span style="font-size: 0.5rem; padding: 0.5rem 0.6rem;;display: inline-block" class="pull-right">
          <img src="@/assets/imgs/description.png" class="des"/>
          <router-link :to="{path:'/daimoneyspaek'}">商家代金券说明</router-link>
        </span>
      </div>

      <div class="text-center"style="margin-top: 4rem">
        <img src="@/assets/imgs/voucher.png" class="voucher"/>
        <div style="margin-top: 1rem">
          <p style="font-size: 1rem">无法使用代金券</p>
          <p style="font-size: .5rem ; color:#aaa">非客户端或客户端版本过低</p>
          <p>
            <router-link :to="{path:'/download'}" class="btn" style="background:#56d176;color: white;">
              下载或升级客户端
            </router-link>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DaiJinQuan"
    }
</script>

<style scoped>
  .des{
    width: .6rem;
  }
  .DaiJinQuan{
    width: 100%;
    line-height: 2rem;
  }
  .voucher{
    width: 6rem;
    height: 3.4rem;
  }
</style>
