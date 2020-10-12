<template>
  <div class="my-menu">
    <a-menu
      mode="inline"
      theme="dark"
      :open-keys="openKeys"
      style="width: inherit"
      @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span> 录入管理</span></span>
        <a-menu-item key="1">
          题目录入
        </a-menu-item>
        <a-menu-item key="2">
          试卷录入
        </a-menu-item>
        <a-menu-item key="3">
          教辅录入
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'SliderMenu',
  data() {
    return {
      rootSubmenuKeys: ['sub1'],
      openKeys: ['sub1'],
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1,
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>

<style scoped>
.my-menu ul li >>> div:first-child {
  padding: 0 0 0 0 !important;
}

.my-menu ul li {
  padding: 0 0 0 0 !important;
}
</style>
