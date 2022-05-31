<template>
  <div class="header">
    <!--    <div v-show="mobile" class="header__title">-->
    <!--      <h1>Christoper Riley</h1>-->
    <!--      <p>Writer | Editor</p>-->
    <!--    </div>-->
    <div class="header__content">
      <!--      <div class="header__links">-->
      <!--        <router-link to="/" class="link">Home</router-link>-->
      <!--        <router-link to="/about" class="link">About</router-link>-->
      <!--        <router-link to="/portfolio" class="link">Portfolio</router-link>-->
      <!--        <router-link to="/contact" class="link">Contact</router-link>-->
      <!--      </div>-->
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

  &__content {
    position: relative;
  }
  &__links {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 25rem;
    top: 2rem;
    z-index: 2;

    & a {
      padding-bottom: 1rem;
      text-transform: uppercase;
      color: #000;
    }
  }

  &__image img {
    height: 100%;
    max-width: 100%;

    @media screen and (min-width: 750px) {
      clip-path: polygon(25% 0, 100% 0%, 75% 100%, 0% 100%);
    }
  }
}
</style>
