<template>
  <div id="app">
    <menuburger/>
    <router-view></router-view>

  </div>
</template>

<script>
import menuburger from "./components/menuburger";
export default {
  name: 'App',
  components: {
    menuburger
  },

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  overflow: hidden !important;
}
</style>
