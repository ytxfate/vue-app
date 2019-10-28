<template>
  <div class="login-div">
    <div class="login-form">
      <el-form ref="loginForm" :model="formValues" label-width="80px" :rules="rules" label-position="top">
        <el-form-item label="Username：" prop="username">
          <el-input v-model="formValues.username"></el-input>
        </el-form-item>
        <el-form-item label="Password：" prop="password">
          <el-input type="password" v-model="formValues.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import store from '../../store/index'
export default {
  name: 'Login',
  data () {
    const validateUserName = (rule, value, callback) => {
      if (value === undefined || value.trim().length === 0) {
        callback(new Error('用户名不能为空'))
      } else if (value.length >= 3 && value.length <= 12) {
        callback()
      } else {
        callback(new Error('用户名长度在3~12位之间'))
      }
    }
    const validatePassWord = (rule, value, callback) => {
      if (value === undefined || value.trim().length === 0) {
        callback(new Error('密码不能为空'))
      } else if (value.length >= 6 && value.length <= 15) {
        callback()
      } else {
        callback(new Error('密码长度在6~15位之间'))
      }
    }
    return {
      formValues: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [{ validator: validateUserName, trigger: 'blur' }],
        password: [{ validator: validatePassWord, trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          store.dispatch('user/login', this.formValues).then(() => {
            this.$message({
              type: 'success',
              message: '登录成功'
            })
            this.$router.push('/')
          })
        }
        return false
      })
    }
  }
}
</script>

<style scoped>
.login-div {
  width: 100%;
  height: 100%;
  background-color: #b2bbbe;
}
.login-form {
    width: 400px;
    margin: 0 auto;
    padding-top: 15%;
}
.login-btn {
    width: 100%;
}
</style>
