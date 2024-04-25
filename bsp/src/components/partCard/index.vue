<template>
  <div class="part-card" :style="style">
    <el-container :style="style">
      <el-header class="part-card__header">
        <div class="title">{{ title }}</div>
        <div class="right">
          <slot name="header-r"></slot>
        </div>
      </el-header>
      <el-main v-if="isShowBody" class="part-card_main">
        <slot></slot>
      </el-main>
      <el-footer v-if="isHasFooter">
        <slot name="footer"></slot>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'PartCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '100%'
    },
    isShowBody: {
      type: Boolean,
      default: true
    },
    isHeaderSplit: {
      type: Boolean,
      default: false
    },
    isHasFooter: {
      type: Boolean,
      default: false
    },
    noShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    style: function () {
      return {
        height: this.height
      }
    }
  },
  methods: {
    handleTitleClick() {
      this.$emit('on-click-title')
    }
  }
}
</script>
<style lang="scss" scoped>
.part-card {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 4px;
  .part-card__header{
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    height: 50px !important;
    line-height: 50px !important;
    .title{
      font-size: 20px;
      color: #002340;
    }
  }
  .part-card_main{
    padding: 0 16px;
  }
}
</style>
