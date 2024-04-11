<template>
  <div id="app">
    <div v-if="!wujie" class="subapplication">
      <div class="header">
        <el-menu :default-active="activeName" class="el-menu-demo" mode="horizontal">
          <template v-for="item in menuList">
            <el-menu-item v-if="!item.hidden" :key="item.path" :route="item.path" :index="item.path" @click="toPath(item)">{{ item.meta.title }}</el-menu-item>
          </template>
        </el-menu>
        <el-button type="danger" class="logout" @click="logout">退出</el-button>
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    wujie() {
      return window.$wujie
    },
    menuList() {
      if (this.wujie) {
        return []
      }
      return this.$router.options.routes
    },
    activeName() {
      return this.$route.path
    }
  },
  methods: {
    toPath(item) {
      this.$router.push({
        path: item.path
      })
    },
    logout() {
      this.$store.dispatch('system/logout')
    }
  }
}
</script>
<style lang="scss" scoped>
// 子应用单独启动使用的样式
.subapplication {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  .header {
    position: relative;
    height: 61px;
    background-color: white;
    display: flex;
    justify-content: center;
    .logout {
      position: absolute;
      right: 20px;
      top: 10px;
    }
  }
  .main {
    margin-top: 15px;
    padding: 0 20px;
    height: calc(100% - 76px);
  }
}
</style>
<style>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #efefef;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 3px;
}

::-webkit-scrollbar-track {
  background-color: #efefef;
}
.vxe-table--tooltip-wrapper {
  position: fixed !important;
}
</style>
