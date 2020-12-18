<template>
  <div class="user-login-box">
    <el-link type="primary" :href="loginLink" :underline="false" class="user-link">登录</el-link>
    <el-link type="info" :href="registLink" :underline="false" class="user-link">注册</el-link>
  </div>
</template>

<script>
  export default {
    name: 'UserLoginBox',
    props: {
      loginLink: '',
      registLink: ''
    }
  }
</script>

<style scoped>
  .user-link {
    padding-left: 10px;
    font-size: 16px;
  }
</style>
