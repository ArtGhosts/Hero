<template>
    <div class="productpages">
      <transition name="fade"  mode="out-in">
        <RouterView></RouterView>
      </transition>
      <Foot></Foot>
    </div>
</template>

<script>
  import FastFood from  '../components/FastFood'
  import Foot from  '../components/Foot_dyx'
    export default {
        name: "ProductHome",
      components: {
          FastFood,
          Foot
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
