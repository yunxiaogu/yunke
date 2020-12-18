<template>
  <div class="card">
    <ul class="card-list">
      <li class="list-item">
        <a class="item-link" href="javascript:;">
        <span class="link-icon el-icon-message-solid"></span>
        <span class="link-title">我的邀请</span>
        <span class="link-num">12</span>
        </a>
      </li>
      <li class="list-item">
        <a class="item-link" href="javascript:;">
        <span class="link-icon el-icon-star-on"></span>
        <span class="link-title">我关注的文章</span>
        <span class="link-num">12</span>
        </a>
      </li>
      <li class="list-item">
        <a class="item-link" href="javascript:;">
        <span class="link-icon el-icon-phone-outline"></span>
        <span class="link-title">客服中心</span>
        <span class="link-num">12</span>
        </a>
      </li>
      <li class="list-item">
        <a class="item-link" href="javascript:;">
        <span class="link-icon el-icon-star-on"></span>
        <span class="link-title">关于本站</span>
        <span class="link-num">12</span>
        </a>
      </li>
      <li class="list-item">
        <a class="item-link" href="javascript:;">
        <span class="link-icon el-icon-cpu"></span>
        <span class="link-title">版权声明</span>
        <span class="link-num">12</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px 0;
  }
  
  .card-list {
    width: 100%;
  }
  
  .card-list .item-link {
    height: 40px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    color: #666e7f;
    font-size: 14px;
  }
  
  .card-list .item-link:hover {
    background-color: #f6f6f6;
  }
  
  .card-list .item-link .link-icon {
    font-size: 20px;
  }
  
  .card-list .item-link .link-title {
    flex: 1 1;
    padding: 0 10px;
  }
  
</style>
