<template>
  <div class="searchArea" :class="{ expand: showAllSearch }">
    <slot></slot>

    <a v-if="showToggleBtn" class="toggleBtn" @click="toggleSearch">
      <i class="el-icon-d-arrow-right" :class="showAllSearch ? 'rotateF90' : 'rotate90'"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: 'SearchArea',
  props: {
    showAllSearch: {
      // 默认不展开全部
      type: Boolean,
      default: false
    },
    showToggleBtn: {
      // 显示操作按钮
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {
    // 展开、收起
    toggleSearch() {
      this.$emit('update:showAllSearch', !this.showAllSearch)
    },
    // 刷新
    refresh() {
      this.$emit('queryTable')
    },
    // 重置
    reset() {
      this.$emit('resetTable')
    }
  }
}
</script>
<style lang="scss" scoped>
.searchArea {
  border-bottom: 1px solid #ededed;
  position: relative;
  box-sizing: border-box;
  ::v-deep .el-form-item{
    margin-bottom: 14px;
  }
  .toggleBtn {
    height: 20px;
    cursor: pointer;
    position: relative;
    left: 50%;
    top: 4px;
    transform: translateX(-50%);
    background: #f0f2f5;
    border-radius: 10px 10px 0 0;
    padding: 0 14px;
    color: #5489ca;
    display: inline-block;
    i {
      font-size: 15px;
      font-weight: bold;
    }

    .rotateF90 {
      transform: rotate(-90deg);
      transition: all 0.3s;
    }

    .rotate90 {
      transform: rotate(90deg);
      transition: all 0.3s;
    }
  }
}
</style>
