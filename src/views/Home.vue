<template>
  <div class="header">
    <div class="header__title">
      <h1>Christoper Riley</h1>
      <p>Writer | Editor</p>
    </div>
    <div class="test">
      <div class="header__links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="header__image">
        <img src="../assets/main.jpg" class="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
  }

  &__links {
    display: flex;
    flex-direction: column;
  }

  &__image img {
    clip-path: polygon(25% 0, 100% 0%, 75% 100%, 0% 100%);
  }

  .test {
    display: flex;
  }
}
</style>
