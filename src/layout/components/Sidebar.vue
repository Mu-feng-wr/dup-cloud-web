<template>
  <div>
    <div class="logo">logo</div>
    <div class="menu">
      <el-menu :collapse="isCollapse">
        <template v-for="item in menuList">
          <el-submenu v-if="item.list&&item.list.length>0" :key="item.menuId" :index="String(item.menuId)">
            <template slot="title">
              <i class="el-icon-location" />
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="temp in item.list" :key="temp.menuId" :index="String(temp.url)">
              <i class="el-icon-setting" />
              <span slot="title">{{ temp.name }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="item.menuId" :index="item.url">
            <i class="el-icon-setting" />
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="collapse" :class="isCollapse?'notCollapse':'isCollapse'">
      <i v-if="!isCollapse" class="el-icon-s-fold" @click="changeIsCollapse" />
      <i v-if="isCollapse" class="el-icon-s-unfold" @click="changeIsCollapse" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse
    },
    menuList() {
      return this.$store.getters.menuList
    }
  },
  methods: {
    changeIsCollapse() {
      console.log(this.menuList)
      this.$store.commit('system/SET_ISCOLLAPSE', !this.$store.getters.isCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: 50px;
}
.menu {
  height: calc(100% - 110px);
  overflow: auto;
  scrollbar-width: none;
}
.collapse {
  height: 55px;
  box-shadow: 0 4px 10px 0 #fff;
  margin-top: 5px;
  color: #fff;
  line-height: 55px;
  cursor: pointer;
  font-size: 20px;
}
.isCollapse {
  padding-left: 30px;
}
.notCollapse {
  text-align: center;
}
</style>
