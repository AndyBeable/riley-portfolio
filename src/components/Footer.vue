<template>
  <footer class="footer">
    <div class="footer__content">
      <span>CR.</span>
      <p>Copyright© 2022 Christoper Riley</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer__content {
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 30px;
  }
}
</style>
