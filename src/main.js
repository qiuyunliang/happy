import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  Layout,
  Icon,
  Menu,
  Result,
  Button,
  Form,
  Input,
  Checkbox,
} from 'ant-design-vue';

// 单独引入Button及其样式, 利用babel可以做到按需引入, 具体配置在babel.config.js中, 参见https://www.antdv.com/docs/vue/introduce-cn/
// import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/lib/button/style';

// 引入所有样式
// import 'ant-design-vue/dist/antd.less';

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Result);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
