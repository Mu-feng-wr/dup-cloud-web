<template>
  <div class="system-title">
    <div class="left">
      <img class="logo" :src="require('@/assets/images/logo.png')" alt />
      <img class="ml-22 mr-22" :src="require('@/assets/images/split.png')" alt />
      <span class="fs-20">BI大屏系统</span>
    </div>
    <div class="time">当前时间：{{ time }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: ''
    }
  },
  created() {
    this.time = this.$vxe.toDateString(new Date(), 'yyyy年MM月dd日 HH:mm:ss')
    setInterval(() => {
      this.time = this.$vxe.toDateString(new Date(), 'yyyy年MM月dd日 HH:mm:ss')
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.system-title {
  height: 60px;
  padding: 5px 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  .time {
    color: #002340;
    font-size: 14px;
  }
  .logo {
    height: 50px;
  }
}
</style>
