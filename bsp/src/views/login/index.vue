<template>
  <el-container class="container">
    <el-header class="header">
      <div class="header-content">
        <img class="header-logo" :src="require('@/assets/images/logo.png')" alt />
        <img style="height:40px;" class="ml-22 mr-22" :src="require('@/assets/images/split.png')" alt />
        <span class="fs-30">欢迎登录</span>
      </div>
    </el-header>
    <el-main class="main">
      <login />
    </el-main>
    <el-footer class="footer">
      <Copyright />
    </el-footer>
  </el-container>
</template>
<script>
import Copyright from '@/components/Copyright/index.vue'
import login from './components/login.vue'
export default {
  components: {
    Copyright,
    login
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .header {
    height: 88px !important;
    padding: 0;
    .header-content {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .header-logo {
        height: 60px;
        vertical-align: middle;
      }
    }
  }
  .main {
    padding: 0 !important;
    background-color: #0058b4;
    background-image: url('~@/assets/images/bg-login.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: -140px center;
  }
  .footer {
    height: 47px !important;
  }
}
</style>
