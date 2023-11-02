<template>
  <div class="login-page">
    <!-- <div class="login-page__content">
      <div class="form-wrap-outer">
        <div class="form-wrap">
          <h3>欢迎登录信息化平台</h3>
          <p class="desc-text">
            Construction Productivity Auxiliary System
          </p>
          <form>
            <div class="input-group">
              <el-input v-model="form.username" placeholder="请输入账号">
                <template slot="prepend">
                  <i class="icon icon-username" /></template>
              </el-input>
            </div>
            <div class="input-group">
              <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
                <template slot="prepend"><i class="icon icon-password" /></template>
              </el-input>
            </div>

            <el-row>
              <el-col :span="12">
                <el-checkbox v-model="rememberPassword" class="login-check">记住我</el-checkbox>
              </el-col>
            </el-row>
            <el-button class="btn-login" type="primary" @click="handleSubmit">立 即 登 录</el-button>
            <el-alert v-if="isError" :title="errorTitle" :closable="false" type="error" show-icon />
          </form>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rememberPassword: false,
      isCheck: false,
      isError: false,
      errorTitle: '账号或者密码错误'
    }
  },
  mounted() {
    document.onkeydown = event => {
      var e = event || window.event
      if (e && e.keyCode == 13) {
        this.handleSubmit()
      }
    }
  },

  created() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>

</style>
