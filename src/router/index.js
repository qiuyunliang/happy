import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/404';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "layout" */ '../layouts/UserLayout'),
    children: [
      // 重定向至登录页面
      {
        path: '/usr',
        redirect: '/signin',
      },
      {
        path: '/signin',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/Login.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/Register.vue'),
      },
    ],
  },
  {
    path: '/signin',
    component: () => import(/* webpackChunkName: "layout" */ '../views/user/Login.vue'),
    children: [],
  },
  {
    path: '/',
    redirect: '/signin',
  },
  {
    path: '/index',
    component: () => import(/* webpackChunkName: "layout" */ '../layouts/BasicLayout'),
    children: [],
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

// 网上查询添加下列4行用来处理 <NavigationDuplicated: Avoided redundant navigation to current location: "/".> 的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
