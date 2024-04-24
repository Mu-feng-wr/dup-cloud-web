<template>
  <div class="text">© {{ year }} 广州机施建设集团有限公司版权所有</div>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666666;
}
</style>
