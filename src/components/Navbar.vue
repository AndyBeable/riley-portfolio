<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <router-link class="link" :to="{ name: 'Home' }"
          ><h1 v-if="!isHomepage">Christopher Riley</h1></router-link
        >
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Portfolio' }"
            >PORTFOLIO
<!--            <ul class="navigation__dropdown">-->
<!--              <li>Magazines</li>-->
<!--              <li>Podcasts</li>-->
<!--              <li>Videos</li>-->
<!--              <li>Creative direction</li>-->
<!--              <li>Books</li>-->
<!--            </ul>-->
          </router-link>
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
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa-solid fa-bars"
          :class="['icon-active', mobileNav ? 'fa-xmark' : 'fa-bars']"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
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
      scrolledNav: null,
      mobile: true,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  computed: {
    isHomepage() {
      return this.$route.name === "Home";
    },
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: transparent;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #000;

  nav {
    display: flex;
    position: relative;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 1rem auto;

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
      font-size: 18px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      @media screen and (min-width: 750px) {
        &:hover {
          border-color: #000;
        }
      }
    }
    .branding {
      display: flex;
      align-items: center;

      a {
        font-size: 18px;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;

      //&__dropdown {
      //  opacity: 1;
      //  background-color: red;
      //  position: absolute;
      //  top: 5rem;
      //  //visibility: hidden;
      //}
      //
      //&__dropdown ul:hover {
      //
      //}
    }

    navigation:first-child {
      background-color: red;
    }
    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;

      li {
        margin-left: 0;

        .link {
          color: #000;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}
.scrolled-nav {
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    .branding a {
      font-size: 15px;
    }

    i {
      font-size: 15px;
    }
  }
}
</style>
