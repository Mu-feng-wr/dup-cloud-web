<template>
  <section class="app-main">
    <el-container class="app-container">
      <el-header v-if="$route.path!='/home'" class="header">
        <Breadcrumb />
      </el-header>
      <el-main class="main">
        <transition name="fade-transform" mode="out-in">
          <WujieVue v-if="route.meta && route.meta.module" width="100%" height="100%" :url="getUrl()" :name="route.name" :props="getProps()" />
          <router-view v-else :key="key" />
        </transition>
      </el-main>
      <el-footer class="footer">
        <Copyright />
      </el-footer>
    </el-container>
  </section>
</template>

<script>
import Copyright from '@/components/Copyright'
import hostMap from '@/hostMap.js'
import Breadcrumb from './Breadcrumb.vue'
export default {
  name: 'AppMain',
  components: {
    Copyright,
    Breadcrumb
  },
  computed: {
    key() {
      return this.$route.path
    },
    route() {
      return this.$route
    }
  },
  methods: {
    getUrl() {
      const origin = `${window.location.protocol}//${window.location.hostname}`
      const wujieHost = {
        bspweb: hostMap(`${origin}:19012/#`)
      }
      console.log(wujieHost[this.$route.meta.module] + this.$route.path)
      return wujieHost[this.$route.meta.module] + this.$route.path
    },
    getProps() {
      return {
        userInfo: this.$store.getters.userInfo,
        permissions: this.$store.getters.permissions
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 50px);
  background: #efefef;
  width: 100%;
  overflow: hidden;
}
.app-container{
  height: 100%;
  padding: 0;
  .header{
    height: 42px !important;
  }
  .main{
    padding:0 16px;
  }
  .footer{
    height: auto !important;
  }
}
</style>

<style lang="scss">
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
