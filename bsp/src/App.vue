<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
// 子应用单独启动使用的样式
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
