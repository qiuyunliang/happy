<template>
  <a-layout id="components-layout-demo-fixed">
    <Header />
    <a-layout-content :style="{ padding: '0 0px', marginTop: '64px' }">
      <div id="content">
        Content
      </div>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import { message } from 'ant-design-vue';
export default {
  components: { Header, Footer },
  data() {
    return {};
  },
  methods: {},
  watch: {},
};
</script>

<style>
#content {
  line-height: 500px;
  height: 500px;
}

.ant-menu-item.ant-menu-item-selected,
.ant-menu-item.ant-menu-item-active {
  font-size: 16px !important;
  color: #007dee !important;
  border-bottom: 2px solid #007dee !important;
}
.ant-menu-item {
  font-size: 16px !important;
}
</style>
