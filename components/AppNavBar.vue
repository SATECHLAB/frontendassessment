<!-- Main Navigation With Mobile Navbar As Component  -->

<template>
  <header>
    <nav>
      <div class="logo">
        <img src="./../assets/svg/logo.svg" alt="logo-img" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><nuxt-link to="/" class="link">Home</nuxt-link></li>
        <li><nuxt-link to="/contact-us" class="link">Contact Us</nuxt-link></li>
      </ul>
      <div class="icon-bar">
        <i
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
          @click="showModal = true"
          ><font-awesome-icon class="icon" icon="bars"
        /></i>
      </div>
      <nav-modal v-show="showModal" @close-modal="showModal = false" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-nav-bar',
  components: {},

  data() {
    return {
      showModal: false,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },

  beforeMount() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 991) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      this.showModal = false
    },
  },
}
</script>

<style lang="scss" scoped>
// Import Global Style Properties
@import '@/assets/css/_main.scss';
// On Page Style Properties
header {
  background-color: transparent;
  transition: 1s ease all;
  color: $primary-color;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  height: 70px;
  width: 100%;
  margin: 0 auto;

  ul,
  .link {
    font-weight: 300;
    list-style: none;
    text-decoration: none;
  }

  li {
    padding: 16px;
    margin-left: 16px;
  }

  .link {
    font-size: 1.2rem;
    transition: 0.3s ease all;
    padding-top: 10px;
    border-top: 2px transparent solid;

    &:hover {
      color: $tertiary-color;
      border-color: $tertiary-color;
    }
  }

  .logo {
    display: flex;
    align-items: center;

    img {
      transition: 1s ease all;
      margin-left: 100px;
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    height: 100%;
    margin-right: 100px;
  }

  .icon-bar {
    i {
      cursor: pointer;
      transition: 0.5s ease all;
      font-size: 1.5rem;
      position: fixed;
      height: 60px;
      top: 0;
      right: -1%;
      padding: 12px 20px;
      border: 0.8px $secondary-color solid;
      background-color: $dark-body-color;
      z-index: 3;
    }
  }
}

@media (max-width: 991px) {
  nav {
    .logo {
      img {
        margin-left: 10px;
      }
    }
  }
}
</style>
