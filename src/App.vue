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
<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
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
</style>
