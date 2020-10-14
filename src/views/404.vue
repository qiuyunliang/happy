<template>
  <a-result status="404" title="404" style="margin-top: 5%; height: 50%" sub-title="别瞎几把逛，正常点，知道吗？">
    <template #extra>
      <a-button type="primary" @click="$router.push('/index')">
        返回首页
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: '404',
};
</script>

<style scoped></style>
