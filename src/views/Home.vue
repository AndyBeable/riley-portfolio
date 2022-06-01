<template>
  <div class="header">
    <div class="header__content">
      <div class="header__title">
        <h1>Christoper Riley</h1>
        <span class="sub__title">Writer | Editor</span>
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
  position: relative;

  &__title {
    position: absolute;
    top: 1rem;
    left: 2rem;
    z-index: 2;

    h1 {
      margin-bottom: 1rem;
    }

    .sub__title {
      display: none;
    }

    @media screen and (min-width: 750px) {
      top: 15rem;
      left: -5rem;

      .sub__title {
        display: initial;
      }
      }
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
