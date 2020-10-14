<template>
  <a-layout id="components-layout-demo-fixed">
    <Header />
    <a-layout-content :style="{ padding: '0 0px', marginTop: '36px' }">
      <div id="content">
        to be continue…
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
@import '../common/font/letter.css';
#content {
  line-height: 100%;
  height: 100%;
  background-color: white;
  color: #007dee;
  padding-bottom: 5%;
  font-size: 30px;
  font-family: PoiretOne-Regular !important;
  font-weight: bold;

  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;

  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-pack: center;
  -moz-box-align: center;
}

.ant-menu-item.ant-menu-item-selected,
.ant-menu-item.ant-menu-item-active {
  font-size: 14px !important;
  color: #007dee !important;
  border-bottom: 2px solid #007dee !important;
  padding: 0 !important;
  margin: 0 10px !important;
}
.ant-menu-item {
  font-size: 14px !important;
  padding: 0 !important;
  margin: 0 10px !important;
}
</style>
