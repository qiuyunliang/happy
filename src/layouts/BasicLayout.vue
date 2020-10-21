<template>
  <a-layout id="components-layout-demo-fixed">
    <Header />
    <a-layout-content :style="{ padding: '0 0px', marginTop: '46px' }">
      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <template v-for="{ type, text } in actions" slot="actions">
            <span :key="type">
              <a-icon :type="type" style="margin-right: 8px" />
              {{ text }}
            </span>
          </template>
          <img slot="extra" width="210" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          <a-list-item-meta :description="item.description">
            <a slot="title" :href="item.href">{{ item.title }}</a>
            <a-avatar slot="avatar" :src="item.avatar" />
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </a-list>
      <Footer />
    </a-layout-content>
  </a-layout>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import { message } from 'ant-design-vue';
const listData = [];
for (let i = 0; i < 115; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply to help people create their product prototypes beautifully and efficiently.',
  });
}

export default {
  components: { Header, Footer },
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
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

.ant-list {
  position: relative !important;
  min-height: calc(100% - 66px) !important;
  background-color: white !important;
  left: 50%;
  transform: translateX(-50%);
  min-width: 920px;
  margin: 10px 0;
  width: 920px !important;
  padding: 0px 20px 0;
}

.ant-list-pagination {
  position: absolute;
  bottom: 0;
  margin-top: 10px;
  padding-bottom: 10px;
}

.ant-spin-nested-loading {
  padding-bottom: 0px !important;
}

.ant-list-item-main {
  text-align: left !important;
}

.ant-list-lg .ant-list-item {
  padding-top: 10px;
  padding-bottom: 10px;
}

.ant-list-lg .ant-list-item:first-child {
  padding-top: 20px !important;
}
</style>
