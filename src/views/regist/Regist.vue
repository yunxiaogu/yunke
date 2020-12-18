<!-- 登陆页面 -->
<template>
  <div id="regist">
    <div class="container">
      <div class="regist-box" @focusin="inputFocusinHandle" @focusout="inputFocusoutHandle">
        <form action="">
          <div class="regist-logo"><a href="/home"></a></div>
          <div class="input-group">
            <div class="icon">
              <i class="el-icon-user-solid"></i>
            </div>
            <div>
              <h5>用户名</h5>
              <input type="text" class="input-conn" />
            </div>
          </div>
          <div class="input-group">
            <div class="icon">
              <i class="el-icon-unlock"></i>
            </div>
            <div>
              <h5>密码</h5>
              <input type="password" class="input-conn">
            </div>
          </div>
          <div class="link-box">
            <a href="/login" class="login-link">已有账号? · 登录</a>
          </div>
          <input type="button" class="btn" value="REGIST">
        </form>
      </div>
    </div>
    <a href="javascript:;" target="_blank" class="copyright">&copy; Yun Ke · 云客</a>
  </div>
</template>

<script>
  import {
    request
  } from "../../network/request.js";

  export default {
    name: 'Regist',
    data() {
      return {
        labelPosition: 'top',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },
    methods: {
      // 禁止拖动图片事件
      imgDragHandle() {
        return false
      },
      // 输入框聚焦事件
      inputFocusinHandle($event) {
        $event.target.parentNode.parentNode.classList.add('focus')
      },
      // 输入框失去焦点事件
      inputFocusoutHandle($event) {
        if ($event.target.value == '') {
          $event.target.parentNode.parentNode.classList.remove('focus')
        }
      }
    },
    beforeCreate() {
      // 修改home首页显示状态为false不显示
      this.$store.commit('homeNavBarShow', false)
    }
  }
</script>

<style scoped>
  /*  .wave {
    position: fixed;
    left: 0;
    bottom: 0;
    -webkit-user-drag: none;
  } */

  .container {
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    background: url("../../assets/images/bg.png") 100% 100% no-repeat;
  }

  .regist-box {
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    text-align: center;
  }

  .regist-box form {
    width: 360px;
  }

  .regist-box form h2 {
    font-size: 2.9rem;
    text-transform: uppercase;
    margin: 15px 0;
    color: #000000;
  }

  .regist-logo {
    background: url("../../assets/logo.png") no-repeat center center;
    width: 360px;
    height: 100px;
    background-size: auto 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .regist-logo>a {
    display: flex;
    width: 8.625rem;
    height: 100%;
  }

  .input-group {
    position: relative;
    display: grid;
    grid-template-columns: 45px calc(100% - 45px);
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
  }

  .input-group:before,
  .input-group:after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #409eff;
    transition: .5s;
  }

  .input-group:after {
    right: 50%;
  }

  .input-group:before {
    left: 50%;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .icon i {
    color: #d9d9d9;
    transition: .5s;
  }

  .input-group>div {
    position: relative;
    height: 45px;
  }

  .input-group>div>h5 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #d9d9d9;
    font-size: 16px;
    transition: .3s;
  }

  /* input(聚焦)后，图标颜色 */
  .input-group.focus .icon i {
    color: #409eff;
  }

  /* input聚焦后，上移 */
  .input-group.focus div h5 {
    top: -5px;
  }

  .input-group.focus:after,
  .input-group.focus:before {
    width: 50%;
  }

  .input-conn {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    text-indent: 10px;
    font-size: 1.2rem;
    color: #555;
    font-family: 'Roboto', sans-serif;
  }

  /* 登陆链接 */
  .link-box {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
    color: #8c8c8c;
  }

  .link-box .login-link:hover {
    color: #000000;
  }

  .btn {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    background-size: 200%;
    background-image: linear-gradient(to right, #FF6666, #99CCCC, #0099CC);
    transition: .5s;
  }

  .btn:hover {
    background-position: right;
  }

  .copyright {
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }
</style>
