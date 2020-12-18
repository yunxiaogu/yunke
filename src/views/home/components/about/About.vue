<template>
  <div class="about">
    <ul class="about-list">
      <li class="list-item">
        <a class="item-link" href="javascript:;">云客</a>
        <a class="item-link" href="javascript:;">云客协议</a>
        <a class="item-link" href="javascript:;">云客指南</a>
        <a class="item-link" href="javascript:;">云客隐私保护指引</a>
        
      </li>
      <li class="list-item">
        <a class="item-link" href="javascript:;">侵权举报中心</a>
      </li>
      <li class="list-item">
        <a class="item-link" href="javascript:;">赣ICP备 20002059号</a>
      </li>
      <li class="list-item">
        <a class="item-link" href="javascript:;">违法和不良信息举报：110-110-110</a>
      </li>
      <li class="list-item">
        <a class="item-link" href="javascript:;">
          联系我们
          <span class="el-icon-paperclip"> YUNKE · 云客</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>
  .about {
    width: 100%;
    padding: 10px 0;
    border-radius: 5px;
    margin-top: 20px;
  }

  .about-list {
    width: 100%;
  }

  .about-list .list-item {
    height: 30px;
    display: flex;
    align-items: center;
  }
  
  .about-list .list-item .item-link {
    height: 100%;
    padding: 0 5px;
    display: flex;
    align-items: center;
    color: #6b6b6b;
    font-size: 12px;
  }
  
  .about-list .list-item .item-link:hover {
    color: #000000;
  }
</style>
