<template>
  <div class="parent">
    <div id="container" :style="[{ display: resultVisible ? 'none' : 'block' }]">
      <div id="title">
        Missing
      </div>
      <div id="register">
        <div style="display: inline-block; line-height: 400px;">
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
                        message: '朋友，请问你是？',
                        whitespace: true,
                      },
                    ],
                  },
                ]"
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
                        message: '想想初次见面那时的电子信箱!',
                      },
                    ],
                  },
                ]"
              />
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
              <a-button :block="true" type="primary" html-type="submit">
                现在，通知我
              </a-button>
            </a-form-item>

            <a-button
              :block="true"
              style="color: #007dee; font-size: 10px; text-align: right; padding: 0"
              type="link"
              @click="$router.push('/account/signin')"
              >… 嘿嘿，灵光一闪，不需要咯</a-button
            >
          </a-form>
        </div>
        <div class="form-blank" style="width: 23%; display: inline-block"></div>
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
      <a-result title="别着急，我们马上就到。" sub-title="">
        <template #icon>
          <div
            style="height: fit-content; border-bottom: dashed;margin-bottom: 30px; border-bottom-width: thick; border-bottom-color: #007dee; border-bottom-style: dotted;"
          >
            <a-icon style="fontSize: 60px;" rotate="10" type="mail" theme="twoTone" />
          </div>
        </template>
        <template #extra>
          <a-button style="font-size: 14px; color: #007dee; margin: 0" type="dashed" @click="$router.push('/account/signin')">
            继续前行
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
    getCaptcha() {
      this.$message.info({ content: '6F3W', duration: 2 });
    },
  },
};
</script>

<style scoped>
#register .ant-form.ant-form-horizontal {
  width: 400px;
  margin: auto;
}

#container {
  width: 100%;
  min-height: 100%;
  background-size: 100%;
  padding: 180px 0 180px;
  position: relative;
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
  min-width: 560px;
  width: 560px;
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

@media screen and (max-width: 560px) {
  #register .form-blank {
    width: 0 !important;
  }

  div#register {
    min-width: 400px;
    width: 400px;
    margin: 50px auto;
  }
}
</style>
