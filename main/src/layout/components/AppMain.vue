<template>
  <section class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
    <!-- <WujieVue v-if="route.meta && route.meta.module" width="100%" height="100%" class="wujie" :url="getUrl()" :name="key" :props="getProps()" /> -->
    <WujieVue class="wujie" width="100%" height="100%" :url="getUrl()" :name="key" :props="{ baseApp: 'wujie' }" />
    <!-- <router-view :key="key" /> -->
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    },
    route() {
      console.log(this.$route)
      return this.$route
    }
  },
  methods: {
    getUrl() {
      return 'http://localhost:19012/#/404'
    },
    getProps() {}
  }
}
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 50px);
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
