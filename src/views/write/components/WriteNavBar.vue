<template>
  <div class="write-navbar">
    <div class="navbar-wrap">
      <!-- logo -->
      <el-image :src="logo" fit="cover" class="navbar-logo"></el-image>
      <h2>写文章</h2>
      <UserMenuBox />
    </div>
  </div>
</template>

<script>
  import UserMenuBox from '../../../components/userMenuBox/UserMenuBox.vue'
  
  export default {
    name: 'WriteNavBar',
    data() {
      return {
        logo: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      }
    },
    components: {
      UserMenuBox
    }
  }
</script>

<style scoped>
  .write-navbar {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    z-index: 10;
  }

  .navbar-wrap {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
  }

  .navbar-logo {
    width: 80px;
    height: 40px;
  }

</style>
