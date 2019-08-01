
<template>
  <div id="app">
   <RouterView></RouterView>
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
    list-style: none;
  }

body,html{
 width: 100%;
  height: 100%;
  font-size: 1rem;
  background:#f5f5f5;
}
</style>
