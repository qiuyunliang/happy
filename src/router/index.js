import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/404';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    component: () =>
      import(/* webpackChunkName: "layout" */ '../layouts/UserLayout'),
    children: [
      // 重定向至登录页面
      {
        path: '/usr',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        name: 'login',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/user/Login.vue'),
      },
      {
        path: '/user/register',
        name: 'register',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/user/Register.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "layout" */ '../layouts/BasicLayout.vue'),
    children: [
      // 仪表盘dashboard
      // {
      //   path: '/',
      //   redirect: '/dashboard/analysis',
      // },
      // {
      //   path: '/dashboard',
      //   name: 'dashboard',
      //   component: { render: h => h('router-view') },
      //   children: [
      //     {
      //       path: '/dashboard/analysis',
      //       name: 'analysis',
      //       component: () =>
      //         import(
      //           /* webpackChunkName: "dashboard" */ '../views/Dashboard/Analysis'
      //         ),
      //     },
      //   ],
      // },
      // // form
      // {
      //   path: '/form',
      //   name: 'form',
      //   component: { render: h => h('router-view') },
      //   children: [
      //     {
      //       path: '/form/basic-form',
      //       name: 'basicform',
      //       component: () =>
      //         import(/* webpackChunkName: "form" */ '../views/forms/BasicForm'),
      //     },
      //   ],
      // },
    ],
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 浏览器顶端在切换路由时，显示进度条
router.beforeEach((to, form, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
