<template>
  <el-container class="container">
    <el-header class="header">
      <system-title />
      <TopMenu />
    </el-header>
    <el-main class="main">
      <div v-if="isRouterAlive" style="height:100%;">
        <router-view />
      </div>
    </el-main>
    <el-footer class="footer">
      <Copyright />
    </el-footer>
  </el-container>
</template>
<script>
import Copyright from '@/components/Copyright/index.vue'
import SystemTitle from './components/systemTitle.vue'
import TopMenu from './components/topMenu.vue'
export default {
  provide() {
    // 父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    }
  },
  components: {
    Copyright,
    SystemTitle,
    TopMenu
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false // 先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true // 再打开
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  .header {
    height: 102px !important;
    padding: 0;
  }
  .main {
    padding: 0;
    background-color: #e8ecf6;
  }
  .footer {
    height: 30px !important;
    background-color: #e8ecf6;
  }
}
</style>
