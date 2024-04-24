<template>
  <div class="menu">
    <div ref="menu" class="memu-left">
      <el-menu :default-active="activeIndex" class="menu-custom" mode="horizontal">
        <template v-for="item in menuList">
          <el-submenu v-if="item.list && item.list.length > 0" :key="item.menuId" popper-class="custom" :index="item.url?'/'+item.url:item.menuId.toString()">
            <template slot="title">{{ item.name }}</template>
            <el-menu-item v-for="(temp, index) in item.list" :key="index" :index="temp.url?'/'+temp.url:item.menuId.toString()" @click.native="handleSelect(temp)">{{ temp.name }}</el-menu-item>
          </el-submenu>
          <template v-else>
            <el-menu-item :key="item.menuId" :index="item.url?'/'+item.url:item.menuId.toString()" @click.native="handleSelect(item)">{{ item.name }}</el-menu-item>
          </template>
        </template>
        <template v-if="moreMenueList.length>0">
          <el-submenu index="more" class="more_menu">
            <template slot="title">更多</template>
            <template v-for="item in moreMenueList">
              <el-submenu v-if="item.list && item.list.length > 0" :key="item.menuId" popper-class="more_menu_custom" :index="item.url?'/'+item.url:item.menuId.toString()">
                <template slot="title">{{ item.name }}</template>
                <el-menu-item v-for="(temp, index) in item.list" :key="index" :index="temp.url?'/'+temp.url:item.menuId.toString()" @click.native="handleSelect(temp)">{{ temp.name }}</el-menu-item>
              </el-submenu>
              <template v-else>
                <el-menu-item :key="item.menuId" :index="item.url?'/'+item.url:item.menuId.toString()" @click.native="handleSelect(item)">{{ item.name }}</el-menu-item>
              </template>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>

    <div class="memu-right pr-20">
      <div class="user-info mr-5" @click="toUserMsg">
        <img class="user mr-5 mt-2" :src="require('@/assets/images/portrait.png')" />
        <div class="user-name">
          {{ userInfo.username }}【{{ userInfo.department }}】
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
      <el-divider direction="vertical" />
      <div class="logout ml-5">
        <img class="custom-icon-logout mr-8" :src="require('@/assets/images/icon-logout.png')" alt />
        <span class="login-out" @click="loginOut">退出</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [],
      moreMenueList: []
    }
  },
  computed: {
    allMenuList() {
      console.log(this.$store.getters.menuList)
      return this.$store.getters.menuList
    },
    activeIndex() {
      return this.$route.path
    },
    userInfo() {
      return this.$store.getters.userInfo
    }
  },
  mounted() {
    this.calculateMenu()
    window.onresize = () => {
      this.calculateMenu()
    }
  },
  methods: {
    calculateMenu() {
      const number = Math.floor(this.$refs.menu.offsetWidth / 100)
      if (this.allMenuList.length > number) {
        this.menuList = this.allMenuList.slice(0, number)
        this.moreMenueList = this.allMenuList.slice(number)
      } else {
        this.menuList = this.allMenuList
        this.moreMenueList = []
      }
    },
    handleSelect(item) {
      this.$router.push({ path: '/' + item.url })
    },
    toUserMsg() {
      this.$router.push({ path: '/sys/userMsg' })
    },
    loginOut() {
      this.$confirm('确定进行[退出]操作?', '提示', { type: 'warning' }).then(() => {
        this.$store.dispatch('system/loginOutHandler')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  background: #002340;
  height: 42px;
  display: flex;
  justify-content: space-between;
  .memu-left {
    margin-right: 30px;
    flex: 1;
    .menu-custom {
      height: 42px;
      background-color: #002340;
      border-bottom: 0px !important;
      ::v-deep .el-menu-item {
        margin: 0 16px;
        padding: 12px 0;
        height: auto;
        color: #fff !important;
        line-height: 1;
        font-size: 16px;
      }
      ::v-deep .el-menu-item:active {
        background-color: transparent !important;
      }
      ::v-deep .el-menu-item:focus {
        background-color: transparent !important;
      }
      ::v-deep .el-menu-item:hover {
        background-color: transparent !important;
      }

      ::v-deep .el-submenu__title {
        height: 42px;
        padding: 12px 0;
        margin: 0 16px;
        font-size: 16px;
        color: #fff;
        line-height: 1;
        border-bottom: 2px solid #00a0e9;
      }
      ::v-deep .el-submenu__title i {
        display: none;
      }
      ::v-deep .el-submenu__title:active {
        background-color: transparent !important;
      }
      ::v-deep .el-submenu__title:focus {
        background-color: transparent !important;
      }
      ::v-deep .el-submenu__title:hover {
        background-color: transparent !important;
      }
    }
  }
  .memu-right {
    display: flex;
    align-items: center;
    height: 100%;
    .user-info {
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      .user {
        height: 16px;
      }
      .user-name {
        color: white;
        font-size: 14px;
      }
    }
    .logout {
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      .login-out {
        color: white;
        font-size: 14px;
      }
      .custom-icon-logout {
        width: 14px;
        height: 14px;
      }
    }
  }
}
.el-menu--horizontal .el-menu .el-menu-item {
  color: #002340;
}
</style>
<style lang="scss">
.el-menu--popup {
  min-width: 150px !important;
  margin-top: 0;
}
.custom .el-menu--popup {
  max-height: 360px;
  overflow-y: auto;
}
.more_menu_custom .el-menu--popup {
  max-height: 360px;
  overflow-y: auto;
}

.is-active {
  color: #00a0e9 !important;
}
</style>
