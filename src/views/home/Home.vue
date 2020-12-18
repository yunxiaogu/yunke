<template>
  <div id="home">
    <div class="home-container">
      <!-- 文章展示区 -->
      <div class="article-wrap">
        <ArticlePreviewBox></ArticlePreviewBox>
        <ArticlePreviewBox></ArticlePreviewBox>
        <ArticlePreviewBox></ArticlePreviewBox>
        <ArticlePreviewBox></ArticlePreviewBox>
      </div>
      <!-- 右侧展示区 -->
      <div class="side-wrap">
        <div class="side-box">
          <ToolBox></ToolBox>
          <Card></Card>
          <About></About>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ArticlePreviewBox from "../../components/articlePreviewBox/ArticlePreviewBox.vue"
  
  import ToolBox from "./components/toolBox/ToolBox.vue"
  import Card from "./components/card/Card.vue"
  import About from "./components/about/About.vue"
  export default {
    name: 'Home',
    components: {
      ArticlePreviewBox,
      ToolBox,
      Card,
      About
    }
  }
</script>

<style scoped>
  .home-container {
    width: 1000px;
    margin: 50px auto;
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }

  .article-wrap {
    width: 650px;
  }

  .side-wrap {
    width: 350px;
    height: 500px;
    display: flex;
    justify-content: center;
  }
  
  .side-wrap .side-box {
    width: 320px;
  }
</style>
