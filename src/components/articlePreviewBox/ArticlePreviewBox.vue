<template>
  <div class="article-prebox">
    <el-card :body-style="{ padding: '5px' }">
      <!-- 头部 -->
      <div slot="header" class="header">
        <el-avatar shape="square" :size="40" :fit="fit" :src="url"></el-avatar>
        <el-link :underline="false" class="user-name">用户名</el-link>
        <el-tag size="mini" class="user-tag">篮球</el-tag>
        <el-tag size="mini">篮球</el-tag>
        <div class="article-time">
          发布于:<span class="time">2020年10月03日</span>
        </div>
      </div>
      <!-- 内容 -->
      <div class="content">
        <h2>标题标题标题标题</h2>
        <div class="text-box">
          <div class="text-preview">哈哈其实刚开始出去玩被亲了一下脸我都很震惊！（因为以前的恋爱连拉手都没有哈哈哈以前还小）后来在学校里悄悄咪咪亲了一次他的脸，啊啊啊啊就觉得男孩子的脸怎么这么好亲！！！！（暴露辽暴露辽）但是根本没有想过亲嘴巴什么的这些，觉得还早还早哈哈哈哈哈哈哈哈哈哈哈哈，结果后来才发现他是预谋已久</div>
          <div class="text-icon" v-if="!url">
            <el-image :fit="cover" :src="url" style="width: 100%; height: 100%"></el-image>
          </div>
        </div>
      </div>
      <!-- 状态区 -->
      <div class="statue">
        <el-button type="primary" size="mini" icon="el-icon-caret-top">赞<span class="like-num">1234</span></el-button>
        <el-button type="primary" size="mini" icon="el-icon-caret-bottom">踩</el-button>

        <el-link :underline="false" icon="el-icon-chat-dot-square" class="statue-item">1234 条评论</el-link>
        
        <el-dropdown trigger="click" class="statue-item">
          <el-link :underline="false" icon="el-icon-s-promotion" class="statue-item">分享</el-link>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-link">复制链接</el-dropdown-item>
            <el-dropdown-item icon="el-icon-chat-dot-round">QQ</el-dropdown-item>
            <el-dropdown-item icon="el-icon-full-screen">微信扫一扫</el-dropdown-item>
            <el-dropdown-item style="text-align: center;">
              <el-image :src="wechatUrl" :fit="fit" :lazy="true" style="width: 70px; height: 70px"></el-image>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        
        <el-link :underline="false" icon="el-icon-star-on" class="statue-item">收藏</el-link>
        <el-link :underline="false" icon="el-icon-s-help" class="statue-item">喜欢</el-link>

        <el-dropdown trigger="click" class="statue-item">
          <el-link :underline="false" icon="el-icon-more"></el-link>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>举报</el-dropdown-item>
            <el-dropdown-item>不感兴趣</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'ArticlePreviewBox',
    data() {
      return {
        fit: "fit",
        cover: "cover",
        url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        wechatUrl: "https://www.zhihu.com/qrcode?url=https%3A%2F%2Fwww.zhihu.com%2Fanswer%2F1609450476%23showWechatShareTip"
      }
    }
  }
</script>

<style scoped>
  .article-prebox {
    width: 100%;
    margin-bottom: 20px;
  }

  .article-prebox>>>.el-card .el-card__header {
    padding: 5px;
  }

  .header {
    display: flex;
    align-items: center;
    position: relative;
  }

  .user-name {
    padding: 0 10px;
  }

  .article-time {
    height: 100%;
    display: inline-flex;
    align-items: center;
    position: absolute;
    right: 0;
    color: #898b91;
    font-size: 14px;
  }

  .user-tag {
    margin: 0 4px;
  }

  .time {
    color: #4f5154;
    padding: 0 5px;
  }

  /* 内容 */
  .text-box {
    display: flex;
    padding: 10px 0;
  }

  .text-box .text-preview {
    flex: 5;
  }

  .text-box .text-icon {
    flex: 1;
    border-radius: 5px;
    overflow: hidden;
  }

  /* 状态区 */
  .statue {
    display: flex;
  }

  .statue>>>.el-button--mini {
    padding: 7px 5px;
  }

  .statue .like-num {
    padding: 5px;
  }

  .statue .statue-item {
    padding: 0 10px;
    display: flex;
    align-content: center;
  }
</style>
