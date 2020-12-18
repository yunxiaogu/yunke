<template>
  <div id="navbar">
    <div class="navbar-warp">
      <!-- logo -->
      <el-image :src="logo" fit="cover" class="logo-box"></el-image>

      <!-- 选项 -->
      <el-menu class="navbar-menu" mode="horizontal" default-active="/home" @select="itemSelect">
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/find">发现</el-menu-item>
        <el-menu-item index="/hotspot">热点</el-menu-item>
      </el-menu>

      <!-- 搜索框 -->
      <el-input size="medium" class="navbar-input" placeholder="请输入内容">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>

      <!-- 用户栏 -->
      <UserMenuBox v-if="isToken" />
      <UserLoginBox loginLink="/login" registLink="/regist" else />
    </div>
  </div>
</template>

<script>
  import UserMenuBox from "../userMenuBox/UserMenuBox.vue"
  import UserLoginBox from "../userLoginBox/UserLoginBox.vue"

  export default {
    name: 'NavBar',
    data() {
      return {
        logo: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        isToken: false
      };
    },
    components: {
      UserMenuBox,
      UserLoginBox
    },
    methods: {
      /**
       * @param {Object} index 当前点击item的index值
       */
      itemSelect(index) {
        this.$router.replace(index)
      }
    }
  }
</script>

<style scoped>
  #navbar {
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    z-index: 10;
  }

  .navbar-warp {
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
  }

  .logo-box {
    width: 80px;
    height: 40px;
    border-radius: 5px;
  }

  .navbar-menu>li {
    height: 50px;
    line-height: 50px;
  }
  
  .navbar-menu >>> .el-menu--horizontal {
    border: none;
  }

  .navbar-input {
    width: 300px;
  }
</style>
