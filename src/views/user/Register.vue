<template>
  <div id="container">
    <div id="register">
      <div style="display: inline-block;">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item v-bind="formItemLayout" label="电子邮箱">
            <a-input
              autocomplete="off"
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: '您输入的并不是什么有效邮箱地址!',
                    },
                    {
                      required: true,
                      message: '请您输入邮箱地址!',
                    },
                  ],
                },
              ]"
              com
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: '请您输入密码!',
                    },
                    {
                      validator: validateToNextPassword,
                    },
                  ],
                },
              ]"
              type="password"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
            <a-input
              v-decorator="[
                'confirm',
                {
                  rules: [
                    {
                      required: true,
                      message: '请您重复输入一次密码!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                },
              ]"
              type="password"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout">
            <span slot="label">
              昵称
            </span>
            <a-input
              v-decorator="[
                'nickname',
                {
                  rules: [
                    {
                      required: true,
                      message: '请您输入您将使用的昵称!',
                      whitespace: true,
                    },
                  ],
                },
              ]"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="电话号码">
            <a-input
              v-decorator="[
                'phone',
                {
                  rules: [
                    {
                      required: false,
                      message: '希望您愿意让我们必要时有机会和您取得联系!',
                    },
                  ],
                },
              ]"
              style="width: 100%"
              placeHolder="151..."
            >
              <a-select
                slot="addonBefore"
                v-decorator="['prefix', { initialValue: '86' }]"
                style="width: 70px"
              >
                <a-select-option value="86">
                  +86
                </a-select-option>
                <a-select-option value="87">
                  +87
                </a-select-option>
              </a-select>
            </a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="验证码">
            <a-row :gutter="8">
              <a-col :span="15">
                <a-input
                  v-decorator="[
                    'captcha',
                    {
                      rules: [
                        {
                          required: true,
                          message: '请输入您最新获取到的验证码!',
                        },
                      ],
                    },
                  ]"
                />
              </a-col>
              <a-col :span="9">
                <a-button class="button-captcha">获取验证码</a-button>
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item v-bind="tailFormItemLayout">
            <a-checkbox :checked="checked" @change="onChange">
              我已阅读并同意
              <a href="">
                用户协议
              </a>
            </a-checkbox>
          </a-form-item>
          <a-form-item v-bind="tailFormItemLayout">
            <a-button type="primary" html-type="submit" :disabled="!checked">
              注册提交
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <div style="width: 160px;display: inline-block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      checked: false,
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('您刚刚两次输入的密码不一致!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    onChange(e) {
      this.checked = e.target.checked;
    },
  },
};
</script>

<style scoped>
#register .ant-form.ant-form-horizontal {
  width: 500px;
  margin: auto;
}

#container {
  height: 100%;
}

#container#register {
  vertical-align: middle;
}

input#register_captcha.ant-input {
  width: 100%;
}

div#register {
  margin: auto;
  padding-top: 160px;
}

button.button-captcha.ant-btn {
  width: 90%;
  margin-left: 10%;
}

.ant-btn-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  width: 100%;
}
</style>
