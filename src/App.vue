<template>
  <div id="app">
    <!-- 导航栏 -->
    <NavBar v-show="navBarShow" />
    <!-- 路由 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      
    }
  },
  computed: {
    navBarShow() {
      return this.$store.state.homeNavBarShow
    }
  }
}
</script>

<style>
  @import url("./assets/css/normalize.css");
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
