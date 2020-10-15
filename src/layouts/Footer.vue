<template>
  <div class="footer">
    <div class="copyright">Copyright © 2020 HAPPY</div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.copyright {
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  min-width: 260px;
  margin: 0 auto;
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;
}
</style>
