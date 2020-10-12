<template>
  <a-layout
    id="components-layout-demo-custom-trigger"
    style="min-height: 100vh"
  >
    <a-layout-sider
      theme="dark"
      v-model="collapsed"
      :trigger="null"
      collapsible
      style="width: 256px"
    >
      <div class="logo">{{ logoTitle }}</div>
      <SliderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="changeCollapse"
        ></a-icon>
        <Header />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '0px 16px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import SliderMenu from './SliderMenu';
import { message } from 'ant-design-vue';
export default {
  components: { Header, Footer, SliderMenu },
  data() {
    return {
      collapsed: false,
      logoTitle: '数据共享',
    };
  },
  methods: {
    changeCollapse: function() {
      console.log('before title: ' + this.logoTitle);
      this.collapsed = !this.collapsed;
    },
  },
  watch: {
    collapsed: function() {
      // `this` 指向 vm 实例
      const duration = this.collapsed ? 10 : 50;
      const timeoutId = setInterval(() => {
        this.logoTitle = this.collapsed ? 'DS' : '数据共享';
        console.log('duration:' + duration + ' title: ' + this.logoTitle);
        clearTimeout(timeoutId);
      }, duration);

      message.info(this.$store.state.token);
    },
  },
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: white;
  text-align: center;
  line-height: 32px;
}

.trigger {
  padding: 0 20px;
  line-height: 64px;
  float: left;
}
</style>
