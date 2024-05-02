<template>
  <div class="disp-flex align-center" style="height:100%">
    <i class="el-icon-s-home icon mr-10" style="font-size:14px;"></i>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.id">
        <span @click.prevent="toLink(item)">{{ item.name }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    menuList() {
      return this.$vxe.toTreeArray(this.$store.getters.menuList, { children: 'list' })
    },
    breadcrumbList() {
      const list = []
      let routeData = this.menuList.find(item => '/' + item.url == this.$route.path)
      list.push({ parentId: routeData.parentId, id: routeData.menuId, name: routeData.name, url: routeData.url })

      while (routeData.parentId) {
        routeData = this.menuList.find(item => item.menuId == routeData.parentId)
        list.unshift({ parentId: routeData.parentId, id: routeData.menuId, name: routeData.name, url: routeData.url })
      }
      return list
    }

  },
  methods: {
    toLink(item) {
      if (item.parentId) {
        this.$router.push({ path: '/' + item.url })
      } else {
        const routeData = this.menuList.find(temp => item.id == temp.menuId)
        if (routeData.list && routeData.list.length > 0) {
          console.log('/' + routeData.list[0].url)
          debugger
          this.$router.push({ path: '/' + routeData.list[0].url })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon{
    color: #999;
  }
  ::v-deep .el-breadcrumb__inner{
    color: #999;
    cursor: pointer;
  }
  ::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: #333;
    cursor: pointer;
  }
</style>
