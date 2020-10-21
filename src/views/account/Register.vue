<template>
  <div class="parent">
    <div id="container" :style="[{ display: resultVisible ? 'none' : 'block' }]">
      <div id="title">
        HAPPY, come to me…
      </div>
      <div id="register">
        <div style="display: inline-block;">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item :style="{ display: 'none !important' }">
              <a-input type="password" autocomplete="new-password"></a-input>
            </a-form-item>
            <a-form-item v-bind="formItemLayout" label="大名">
              <a-input
                v-decorator="[
                  'nickname',
                  {
                    rules: [
                      {
                        required: true,
                        message: '请您输入您将使用的大名!',
                        whitespace: true,
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item v-bind="formItemLayout" label="口号" has-feedback>
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      {
                        required: true,
                        message: '请您输入口号!',
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
            <a-form-item v-bind="formItemLayout" label="确认口号" has-feedback>
              <a-input
                v-decorator="[
                  'confirm',
                  {
                    rules: [
                      {
                        required: true,
                        message: '请您重复输入一次口号!',
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
            <a-form-item v-bind="formItemLayout" label="电子信箱">
              <a-input
                autocomplete="off"
                v-decorator="[
                  'email',
                  {
                    rules: [
                      {
                        type: 'email',
                        message: '您输入的并不是什么有效的电子信箱!',
                      },
                      {
                        required: true,
                        message: '请您输入电子信箱!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item v-bind="formItemLayout" label="您的热线">
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
                placeholder="151..."
              >
                <a-select slot="addonBefore" v-decorator="['prefix', { initialValue: '86' }]" style="width: 70px">
                  <a-select-option value="86">
                    +86
                  </a-select-option>
                  <a-select-option value="87">
                    +87
                  </a-select-option>
                </a-select>
              </a-input>
            </a-form-item>
            <a-form-item class="last-captcha-explain" v-bind="formItemLayout" label="暗号">
              <a-row :gutter="8">
                <a-col :span="15">
                  <a-input
                    v-decorator="[
                      'captcha',
                      {
                        rules: [
                          {
                            required: true,
                            message: '请输入您最新获取到的暗号!',
                          },
                        ],
                      },
                    ]"
                  />
                </a-col>
                <a-col :span="9">
                  <a-button class="button-captcha" @click="getCaptcha">发射暗号</a-button>
                </a-col>
              </a-row>
            </a-form-item>
            <a-form-item v-bind="tailFormItemLayout">
              <a-checkbox :checked="checked" @change="onChange">
                我也有这样的
              </a-checkbox>
              <a style="color: #007dee" @click="() => (modalVisible = true)">
                认识 & 想法
              </a>
            </a-form-item>
            <a-form-item v-bind="tailFormItemLayout">
              <a-button :block="true" type="primary" html-type="submit" :disabled="!checked">
                注册提交
              </a-button>
            </a-form-item>

            <a-button
              :block="true"
              style="color: #007dee; font-size: 10px; text-align: right; padding: 0"
              type="link"
              @click="$router.push('/account/signin')"
              >…下次再说</a-button
            >
          </a-form>
          <a-modal
            class="register-modal"
            v-model="modalVisible"
            title="我以为我们都应该…"
            centered
            ok-text="那还用说"
            cancel-text="额…"
            :closable="false"
            :mask-closable="false"
            @ok="() => ((modalVisible = false), (checked = true))"
            @cancel="() => ((modalVisible = false), (checked = false))"
          >
            <p>爱国守法，明礼诚信；</p>
            <p>喜欢自己；</p>
            <p style="margin: 0">努力。</p>
          </a-modal>
        </div>
        <div style="width: 160px;display: inline-block"></div>
      </div>
    </div>
    <div
      id="result"
      :style="[
        {
          display: resultVisible ? 'block' : 'none',
          marginBottom: '10%',
        },
      ]"
    >
      <a-result title="太开心了，有你的到来。" sub-title="亲爱的朋友，欢迎加入大家庭，一起来感受美好、创造未来呀 ！">
        <template #icon>
          <a-icon style="transform: rotate(10deg)" type="smile" theme="twoTone" />
        </template>
        <template #extra>
          <a-button style="font-size: 16px; color: #007dee; margin: 0" type="dashed" @click="$router.push('/index')">
            心的开始
          </a-button>
        </template>
      </a-result>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      resultVisible: false,
      modalVisible: false,
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
          this.resultVisible = true;
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
        callback('您刚刚两次输入的口号不一致!');
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
    getCaptcha() {
      this.$message.info({ content: '6F3W', duration: 2 });
    },
  },
};
</script>

<style scoped>
#register .ant-form.ant-form-horizontal {
  width: 500px;
  margin: auto;
  padding: 5px;
}

#container {
  height: fit-content;
  padding-bottom: 2%;
}

#container#register {
  vertical-align: middle;
}

#result {
  width: 700px;
  margin: 0 auto;
}

#result .ant-btn-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  width: 20% !important;
}

input#register_captcha.ant-input {
  width: 100%;
}

@import '../../common/font/letter.css';
div#title {
  font-size: 30px;
  color: #007dee;
  font-family: PoiretOne-Regular !important;
  font-weight: bold !important;
  line-height: 50px;
}

div#register {
  min-width: 300px;
  margin: 50px auto;
}

button.button-captcha.ant-btn {
  width: 90%;
  margin-left: 10%;
}

.parent {
  line-height: 100%;
  height: 100%;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;

  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-pack: center;
  -moz-box-align: center;
}
</style>
