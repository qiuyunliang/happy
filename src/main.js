import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Layout, Icon, Menu, Result, Button, Form, Input, Checkbox, Breadcrumb, Select, Row, Col, Modal } from 'ant-design-vue';

// 单独引入Button及其样式, 利用babel可以做到按需引入, 具体配置在babel.config.js中, 参见https://www.antdv.com/docs/vue/introduce-cn/
// import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/lib/button/style';

// 引入所有样式
// import 'ant-design-vue/dist/antd.less';
import './index.less';

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Result);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Breadcrumb);
Vue.use(Select);
Vue.use(Row);
Vue.use(Col);
Vue.use(Modal);

import { message } from 'ant-design-vue';
Vue.prototype.$message = message;
message.config({
  duration: 2, // 持续时间
  top: `50px`, // 到页面顶部距离
  maxCount: 3, // 最大显示数, 超过限制时，最早的消息会被自动关闭
});

Vue.directive('title', {
  inserted: function(el, binding) {
    document.title = el.dataset.title;
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
