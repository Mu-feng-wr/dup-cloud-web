<template>
  <div class="login-temp">
    <div class="login-content">
      <div class="form-wrap">
        <div class="fs-30 desc-title">{{ defaultSettings.title }}</div>
        <div class="fs-18 desc-text">Construction Procurement Auxiliary System</div>
        <form>
          <div class="input-group">
            <el-input v-model="formData.username" placeholder="请输入账号">
              <template slot="prepend">
                <i class="icon icon-username"></i>
              </template>
            </el-input>
          </div>
          <div class="input-group">
            <el-input v-model="formData.password" placeholder="请输入密码" type="password">
              <template slot="prepend">
                <i class="icon icon-password"></i>
              </template>
            </el-input>
          </div>

          <el-row>
            <el-col :span="12">
              <el-checkbox v-model="rememberPassword" class="login-check">记住我</el-checkbox>
            </el-col>
          </el-row>
          <el-button :loading="loading" class="btn-login" type="primary" @click="handleSubmit">立 即 登 录</el-button>
          <el-alert v-if="isError" :title="errorTitle" :closable="false" type="error" show-icon />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      defaultSettings: require('@/settings.js'),
      formData: {},
      rememberPassword: false,
      errorTitle: '',
      isError: '',
      loading: false
    }
  },
  created() {
    const loginForm = Cookies.get('loginForm')
    if (loginForm) {
      this.rememberPassword = true
      this.formData = JSON.parse(loginForm)
    }
  },
  mounted() {
    document.onkeydown = (event) => {
      var e = event
      if (e && e.keyCode == 13) {
        this.handleSubmit()
      }
    }
  },
  methods: {
    handleSubmit() {
      if (!this.formData.username || !this.formData.password) {
        this.errorTitle = '亲~ 请输入账号密码！'
        this.isError = true
        return
      }
      const submitData = {
        companyCode: 'test',
        ...this.formData
      }
      this.loading = true
      this.$store
        .dispatch('system/loginHandler', submitData)
        .then((res) => {
          if (this.rememberPassword) {
            Cookies.set('loginForm', JSON.stringify(this.formData))
          }
          this.$notify({
            title: '提示',
            message: '登录成功',
            type: 'success',
            position: 'bottom-right',
            duration: 1000,
            onClose: () => {
              this.$router.push({
                path: '/'
              })
            }
          })
        })
        .catch((err) => {
          this.errorTitle = err.msg
          this.isError = true
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-temp {
  margin: 0 36px;
  height: 100%;
  .login-content {
    max-width: 1200px;
    height: 100%;
    position: relative;
    margin: 0 auto;
    .form-wrap {
      position: absolute;
      top: 50%;
      right: 40px;
      padding: 40px;
      width: 450px;
      height: 540px;
      background-color: #fff;
      transform: translateY(-50%);
      .desc-title {
        margin: 0;
        color: #002340;
        font-weight: 600;
        line-height: 36px;
      }
      .desc-text {
        margin-bottom: 36px;
        color: #666;
      }
      .input-group {
        margin: 0 auto 24px;
        text-align: left;
        align-items: center;
        transition: border 0.2s;
      }
      ::v-deep input {
        padding: 10px 0px;
        height: 50px;
        font-size: 18px;
        border-left: none;
        border-color: #8d95a8;
        color: #002340;
      }
      ::v-deep .el-input-group__prepend {
        padding: 0 16px;
        border-color: #8d95a8;
        background-color: transparent;
      }
      ::v-deep .icon {
        display: inline-block;
        width: 24px;
        height: 30px;
      }
      .icon-username {
        background-image: url('~@/assets/images/icon-user.png');
      }
      .icon-password {
        background-image: url('~@/assets/images/icon-password.png');
      }
    }
  }
}
.login-check {
  ::v-deep .el-checkbox__inner {
    width: 18px !important;
    height: 18px !important;
  }
  ::v-deep .el-checkbox__inner::after {
    top: 3px !important;
    left: 6px !important;
  }
  ::v-deep .el-checkbox__label {
    font-size: 18px;
  }
}
.btn-login {
  margin: 24px 0 10px;
  padding: 12px 0;
  width: 100%;
  color: #fff;
  font-size: 24px;
  text-align: center;
}
</style>
