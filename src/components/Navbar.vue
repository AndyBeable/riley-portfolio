<template>
  <header :class="{ 'scrolled-nav': saveScrollPosition }">
    <nav>
      <div class="branding">
        <router-link class="link" :to="{ name: 'Home' }"
          >Christopher Riley</router-link
        >
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Portfolio' }"
            >Portfolio</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'About' }">About</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Contact' }"
            >Contact</router-link
          >
        </li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobile"
          v-show="mobile"
          class="fa-solid fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Portfolio' }"
              >Portfolio</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Contact' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrollPosition: null,
      mobile: true,
      mobileNav: null,
      windowWidth: null,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #000;

  nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      color: #000;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }
    .branding {
      display: flex;
      align-items: center;
    }
  }
}
</style>
