<template>
  <div id="loginLayout" class="login-layout-wrapper">
    <div class="container">
      <div class="top">
        HAPPY
      </div>

      <div class="main">
        <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
          <a-form-item :style="{ display: 'none !important' }">
            <a-input type="password" autocomplete="new-password"></a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [{ required: true, message: '输入大名吧！' }],
                },
              ]"
              placeholder="大名"
              autocomplete="off"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [{ required: true, message: '口号必不可少的！' }],
                },
              ]"
              type="password"
              autocomplete="new-password"
              placeholder="口号"
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
                  initialValue: false,
                },
              ]"
              class="login-form-remember"
            >
              只要确认眼神
            </a-checkbox>
            <a class="login-form-forgot" href="/account/reset/password">
              忘记口号
            </a>
            <a-button type="primary" html-type="submit" class="login-form-button">
              进去看看
            </a-button>
            还没有参与？
            <a href="/account/singup">
              立刻加入
            </a>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="footer">
      <div class="copyright">Copyright © 2020 HAPPY</div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request';

export default {
  components: {},
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
            this.$router.push('/index');
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

@import '../../common/font/letter.css';
#loginLayout.login-layout-wrapper .container .top {
  padding-bottom: 60px;
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
  font-size: 40px;
  color: #007dee;
  font-family: PoiretOne-Regular !important;
  font-weight: bold !important;
  line-height: 50px;
}

#loginLayout.login-layout-wrapper .container {
  width: 100%;
  background-size: 100%;
  top: 50%;
  transform: translateY(-70%);
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
  padding: 0 20px;
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
  margin-bottom: 5px;
}

.ant-form-item div.ant-form-explain {
  margin-bottom: -1px;
  float: left;
}

.copyright {
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  min-width: 260px;
  margin: 0 auto;
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 16px;
  margin: 10px 0 10px;
  text-align: center;
}
</style>
