<script lang='ts'>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  }
}
</script>

<template>
  <div class="login">
    <img src="../assets/images/login_left.png" alt="">
    <img src="../assets/images/login_right.png" alt="">
    <div class="login-box">
      <div class="title">账号密码登录</div>
      <el-form>
        <el-form-item label="">
          <el-input placeholder="请输入用户名" class="login-input" v-model="username" />
        </el-form-item>
        <el-form-item label="">
          <el-input type="password" placeholder="请输入密码" class="login-input" v-model="password" />
        </el-form-item>
        <el-button type="primary" class="login-btn">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.login {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .login-box {
    position: absolute;
    left: 10%;
    width: 380px;
    height: 450px;
    box-shadow: 0 0 5px #aaa;
    top: 20%;
    background-color: #fff;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 60px 20px 0 40px;
    .title {
      color: #5477c3;
      text-decoration: underline;
      font-size: 18px;
      margin-bottom: 50px;
    }
    .login-input {
      height: 60px;
      margin-bottom: 30px;
      ::v-deep .el-input__wrapper {
        background-color: #FCFCFC;
        border-radius: 30px;
        padding-left: 30px;
        font-size: 16px;
      }
    }
    .login-btn {
      width: 100%;
      height: 50px;
      border-radius: 25px;
      font-size: 20px;
    }
  }
}
</style>
