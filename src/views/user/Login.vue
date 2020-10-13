<template>
  <div id="loginLayout" class="login-layout-wrapper">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/user/login">
            <img src="../../assets/happy.png" width="200" />
          </a>
        </div>
      </div>

      <div class="main">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [{ required: true, message: '请输入用户名!' }],
                },
              ]"
              placeholder="用户名"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [{ required: true, message: '请输入密码!' }],
                },
              ]"
              type="password"
              placeholder="密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
              class="login-form-remember"
            >
              自动登录
            </a-checkbox>
            <a class="login-form-forgot" href="">
              忘记密码
            </a>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              登录
            </a-button>
            还没有账号?
            <a href="/user/register">
              立即注册
            </a>
          </a-form-item>
        </a-form>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import request from '../../utils/request';
import Footer from '../../layouts/Footer';

export default {
  components: { Footer },
  name: 'Login',
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const { userName, password, remember } = values;
          request({
            url: '/api/login',
            method: 'post',
            data: {
              username: userName,
              password: password,
              rememberMe: remember,
            },
          }).then(response => {
            const { code, token } = response.data;
            this.$message.success('登录成功！');
            this.$store.commit('updateToken', token);
            this.$router.push('/');
          });
        }
      });
    },
  },
};
</script>
<style scoped>
#loginLayout.login-layout-wrapper {
  height: 100%;
}

#loginLayout.login-layout-wrapper .container .top {
  padding-bottom: 80px;
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
}

#loginLayout.login-layout-wrapper .container {
  width: 100%;
  min-height: 100%;
  background-size: 100%;
  padding: 180px 0 180px;
  position: relative;
}

#loginLayout.login-layout-wrapper .container .main {
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
}

.login-form {
  max-width: 600px !important;
  margin-left: auto;
  margin-right: auto;
}
.login-form-remember {
  float: left;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
  margin-top: 10px;
}

.ant-form-item div.ant-form-explain {
  margin-bottom: -1px;
  float: left;
}
</style>
