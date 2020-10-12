<template>
  <div id="container">
    <div class="header">
      <a href="/user/login">
        <img src="../../assets/happy.png" width="200" />
      </a>
    </div>
    <div id="login">
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
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
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
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
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
          <a-button type="primary" html-type="submit" class="login-form-button">
            登录
          </a-button>
          还没有账号?
          <a href="">
            立即注册
          </a>
        </a-form-item>
      </a-form>
    </div>
    <div class="footer">
      <div class="copyright">Copyright © 2020 HAPPY</div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request';
import { message } from 'ant-design-vue';

export default {
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
            message.success('登录成功！');
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
.header {
  line-height: 50px;
  padding: 160px 0 60px;
}
.copyright {
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
}
.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;
}
#login {
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
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
}
</style>
