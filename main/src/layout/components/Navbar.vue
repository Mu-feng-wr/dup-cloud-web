<template>
  <div class="navbar disp-flex justify-between align-center">
    <div class="site-navbar__title">信息化平台</div>
    <div class="navbarMenu disp-flex align-center">
      <div class="time">{{ newTime }}</div>
      <div class="sysmessage">
        <el-badge value="new">
          <i class="el-icon-chat-line-square fs-18"></i>
        </el-badge>
      </div>
      <div class="setting">
        <i class="el-icon-setting fs-18"></i>
      </div>
      <div class="user">
        <el-dropdown :show-timeout="0" placement="bottom">
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid"></i>
            {{ userInfo.name }}
            <i class="el-icon-arrow-down" style="font-size: 12px"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logoutHandle()">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { logout } from '@/api/dup/system.js'
export default {
  data() {
    return {
      newTime: this.$vxe.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo
    }
  },
  created() {
    setInterval(() => {
      this.newTime = this.$vxe.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }, 1000)
  },
  methods: {
    logoutHandle() {
      this.$confirm('确定进行[退出]操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        logout().finally(() => {
          this.$store.dispatch('system/logOut')
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  .site-navbar__title {
    color: #000;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .navbarMenu {
    div {
      height: 100%;
      margin: 0 10px;
      cursor: pointer;
    }
    .time {
      color: #303133;
    }
  }
}
::v-deep .el-badge__content {
  line-height: 16px;
}
</style>
