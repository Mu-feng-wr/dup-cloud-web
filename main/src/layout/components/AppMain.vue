<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <WujieVue v-if="route.meta && route.meta.module" width="100%" height="100%" :url="getUrl()" :name="getUrl()" :props="getProps()" />
      <router-view v-else :key="key" />
    </transition>
  </section>
</template>

<script>
import hostMap from '@/hostMap.js'
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    },
    route() {
      // console.log(this.$route)
      return this.$route
    }
  },
  methods: {
    getUrl() {
      const origin = `${window.location.protocol}//${window.location.hostname}`
      const wujieHost = {
        bspweb: hostMap(`${origin}:19012/#`)
      }
      return 'http://localhost:19012/#/404'
    },
    getProps() {
      return {}
    }
  }
}
</script>

<style scoped>
.app-main {
  height: calc(100vh - 50px);
  background: #efefef;
  width: 100%;
  overflow: hidden;
}
</style>

<style lang="scss">
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
