<template>
  <a-layout-header id="components-layout-demo-fixed" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
    <div class="logo">
      <a href="/account/signin">
        HAPPY
      </a>
    </div>
    <a-menu theme="light" mode="horizontal" :default-selected-keys="['3']" :style="{ lineHeight: '38px' }">
      <a-menu-item key="1">
        安静
      </a-menu-item>
      <a-menu-item key="2">
        唠叨
      </a-menu-item>
      <a-menu-item key="3">
        首页
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
#components-layout-demo-fixed {
  position: relative;
  z-index: 100;
  overflow: hidden;
  padding: 0 !important;
  background: #fff;
  -webkit-box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
  background-clip: content-box;
}
#components-layout-demo-fixed.ant-layout-header {
  height: 40px;
  padding: 0 0;
  line-height: 40px;
}
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 40px !important;
  background: rgba(255, 255, 255, 0.2);
  padding-left: 30px;
  float: left;
}
.ant-menu-horizontal {
  float: right;
  padding-right: 20px;
}
ant-menu ant-menu-horizontal ant-menu-root ant-menu-light {
  line-height: 38px !important;
  height: 38px !important;
}

@import '../common/font/letter.css';
a {
  float: left;
  font-size: 20px;
  color: #007dee;
  font-family: PoiretOne-Regular !important;
  font-weight: bold !important;
}
</style>
