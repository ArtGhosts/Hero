<template>
    <div>
      <transition name="fade" mode="out-in">
        <RouterView></RouterView>
      </transition>
      <Foot></Foot>
    </div>
</template>

<script>
  import FastFood from './FastFood_dyx'
  import Foot from './Foot_dyx'
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
