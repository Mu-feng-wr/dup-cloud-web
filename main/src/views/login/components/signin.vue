<template>
  <div class="login-page disp-flex align-center justify-center">
    <div class="login-page__content">
      <div class="fs-28 fw-600 title">欢迎登录信息化平台</div>
      <div class="desc-text mt-2 mb-36">Construction Productivity Auxiliary System</div>
      <form>
        <div class="input-group">
          <el-input v-model="formData.username" placeholder="请输入账号">
            <template slot="prepend">
              <i class="icon el-icon-user"></i>
            </template>
          </el-input>
        </div>
        <div class="input-group">
          <el-input v-model="formData.password" placeholder="请输入密码" type="password" show-password>
            <template slot="prepend">
              <i class="icon el-icon-lock"></i>
            </template>
          </el-input>
        </div>

        <el-row>
          <el-col :span="12">
            <el-checkbox v-model="formData.rememberPassword" class="login-check">记住我</el-checkbox>
          </el-col>
        </el-row>
        <el-button :loading="btnLoading" :disabled="btnDisabled" class="btn-login" type="primary" @click="handleSubmit">立 即 登 录</el-button>
        <el-alert v-if="isError" :title="errorTitle" :closable="false" type="error" show-icon />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data() {
    return {
      formData: {
        rememberPassword: false
      },
      isError: false,
      errorTitle: '账号或者密码错误',
      btnLoading: false,
      btnDisabled: false
    }
  },
  created() {
    const loginInfo = window.localStorage.getItem('loginInfo')
    this.formData = loginInfo ? JSON.parse(loginInfo) : {}
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
      this.btnLoading = true
      this.$store
        .dispatch('system/loginHandler', { companyCode: 'test', ...this.formData })
        .then((res) => {
          if (this.formData.rememberPassword) {
            window.localStorage.setItem('loginInfo', JSON.stringify(this.formData))
          }
          this.btnDisabled = true
          this.$notify({
            title: '提示',
            message: '登录成功',
            type: 'success',
            duration: 1500,
            position: 'bottom-right',
            onClose: () => {
              this.$router.push({ path: '/' })
            }
          })
        })
        .catch((err) => {
          this.isError = true
          this.errorTitle = err.msg
        })
        .finally(() => {
          this.btnLoading = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/color.scss';
@import '@/styles/bgIcon.scss';

.login-page {
  width: 100%;
  height: 100%;

  .login-page__content {
    width: 450px;
    height: 540px;
    padding: 40px 30px 100px;

    .title {
      color: $primaryColorText;
      letter-spacing: 5px;
    }

    .desc-text {
      color: #666666;
    }

    .input-group {
      margin: 0 auto 24px;
      text-align: left;
      align-items: center;
      transition: border 0.2s;
      background: #f2f3f5;
    }

    ::v-deep input {
      padding: 10px 0px;
      height: 50px;
      font-size: 18px;
      border-left: none;
      border-color: #f2f3f5;
      color: $primaryColorText;
      background: #f2f3f5;
    }

    ::v-deep .el-input-group__prepend {
      padding: 0 16px;
      border-color: #f2f3f5;
      background-color: transparent;

      i {
        font-size: 24px;
        color: #004dad;
      }
    }

    ::v-deep .el-checkbox__inner {
      width: 18px;
      height: 18px;
    }

    ::v-deep .el-checkbox__inner::after {
      top: 1px !important;
      left: 5px !important;
      width: 4px;
      height: 9px;
    }

    ::v-deep .el-checkbox__label {
      font-size: 18px;
      color: #004dad;
    }

    .btn-login {
      width: 100%;
      font-size: 24px !important;
      margin: 24px 0 10px;
    }
  }
}
</style>
