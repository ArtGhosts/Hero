
<template>
  <div id="app">
<Home></Home>
  </div>
</template>

<script>
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
export default {
  name: 'App',
  components: {Home}
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }

body,html{
 width: 100%;
  height: 100%;
}
</style>
