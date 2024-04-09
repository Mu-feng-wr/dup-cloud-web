<template>
  <div>
    <div :class="isCollapse ? 'isCollapseLogo' : 'logo'">
      <img :src="require('@/assets/images/theme1/indexLogo.png')" alt />
    </div>
    <div class="menu">
      <el-menu :collapse="isCollapse">
        <template v-for="item in menuList">
          <el-submenu v-if="item.list && item.list.length > 0" :key="item.menuId" :index="String(item.menuId)" popper-class="popperClass">
            <template slot="title">
              <svg-icon :class="isCollapse ? '' : 'mr-5'" :icon-class="'icon-' + item.icon" />
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="temp in item.list" :key="temp.menuId" :index="String(temp.url)">
              <svg-icon :class="isCollapse ? '' : 'mr-5'" :icon-class="'icon' + temp.icon" />
              <span slot="title">{{ temp.name }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="String(item.menuId)" :index="item.url">
            <svg-icon :class="isCollapse ? '' : 'mr-5'" :icon-class="'icon' + item.icon" />
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="collapse" :class="isCollapse ? 'notCollapse' : 'isCollapse'">
      <i v-if="!isCollapse" class="el-icon-s-fold" @click="changeIsCollapse"></i>
      <i v-if="isCollapse" class="el-icon-s-unfold" @click="changeIsCollapse"></i>
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
      this.$store.commit('system/SET_ISCOLLAPSE', !this.$store.getters.isCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.isCollapseLogo {
  height: 50px;
  padding: 5px 7px;
}
.logo {
  height: 50px;
  padding: 5px 11px;
}
.menu {
  height: calc(100% - 110px);
  overflow: auto;
  scrollbar-width: none;
  padding: 15px 0;
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
