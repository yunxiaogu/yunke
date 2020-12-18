<template>
  <div class="user-menu-box">
    <el-dropdown :hide-timeout="300" placement="bottom">
      <!-- 头像 -->
      <div class="navbar-user">
        <el-link href="javascript:;" :underline="false" class="user-name">用户名</el-link>
        <el-avatar shape="square" :size="40"></el-avatar>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user-solid">我的主页</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-tools">设置</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: 'UserMenuBox'
  }
</script>

<style scoped>
  .navbar-user {
    display: flex;
    align-items: center;
  }
  
  .navbar-user .user-name {
    padding: 0 10px;
  }
</style>
