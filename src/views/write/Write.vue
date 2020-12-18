<template>
  <div id="write">
    <!-- 导航栏 -->
    <WriteNavBar />
    <!-- 写文章区 -->
    <div class="write-container">
      <!-- 工具栏容器 -->
      <div class="toolbar-wrap">
        <div id="toolbar-container" class="toolbar" ref="writeToolbar"></div>
      </div>
      <!-- 标题编辑区 -->
      <input type="text" id="title-input" class="text-title" placeholder="输入标题" ref="writeTitleInput" />
      <!-- 文章编辑区 -->
      <div id="text-container" class="text"></div>
    </div>
    <!-- 提交文章 -->
    <div class="submit-wrap">
      <el-button type="primary" size="medium" plain :disabled="btnFlag"  icon="el-icon-thumb">发表</el-button>
    </div>
  </div>
</template>

<script>
  import WriteNavBar from "./components/WriteNavBar.vue"
  import E from 'wangeditor'
  export default {
    name: 'Write',
    data() {
      return {
        editor: null,
        isToolbarFixed: false,
        btnFlag: true
      }
    },
    components: {
      WriteNavBar
    },
    beforeCreate() {
      // 修改home首页显示状态为false不显示
      this.$store.commit('homeNavBarShow', false)
    },
    mounted() {
      // 初始化wangEditor富文本编辑器
      this.editor = new E('#toolbar-container', '#text-container')
      this.editor.config.zIndex = 10
      // 创建编辑器
      this.editor.create()
      
      // 监听屏幕滚动
      window.addEventListener('scroll', this.scrollHandle)
    },
    methods: {
      // 工具栏滚动监听
      scrollHandle() {
        // 标题栏距离顶部距离
        if(!this.isToolbarFixed && this.$refs.writeTitleInput.getBoundingClientRect().top <= 65) {
          // 工具栏固定住，脱离容器
          this.$refs.writeToolbar.classList.add('toolbar-fixed')
          this.isToolbarFixed = true
          return ;
        }
        if(this.isToolbarFixed && this.$refs.writeTitleInput.getBoundingClientRect().top > 65) {
          // 工具栏接触固定，回到容器
          this.$refs.writeToolbar.classList.remove('toolbar-fixed')
          this.isToolbarFixed = false
          return ;
        }
      }
    }
  }
</script>

<style scoped>
  .write-container {
    width: 1000px;
    min-height: 500px;
    margin: 70px auto 10px;
  }

  .toolbar-wrap {
    width: 1000px;
    height: 40px;
  }

  .toolbar {
    width: 1000px;
    height: 40px;
  }

  .toolbar-fixed {
    position: fixed;
    top: 5px;
  }
  
  .text {
    min-height: 600px;
    margin-top: 5px;
    background-color: #ffffff;
  }

  .text-title {
    width: 1000px;
    height: 50px;
    border: none;
    text-indent: 10px;
    margin-top: 20px;
    background-color: #f6f6f6;
    font-size: 25px;
  }
  
  .submit-wrap {
    width: 1000px;
    height: 40px;
    margin: 10px auto;
  }
</style>
