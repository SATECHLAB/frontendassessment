<!-- Contact Hero Component Displays Content and Car Background -->

<template>
  <div id="contact" class="contact-car container-fluid">
    <app-nav-bar />
    <div class="home-content">
      <div class="pattern"></div>
      <h1 class="heading">CONTACT US</h1>
      <h2 class="heading sub-heading">24/7 SUPPORT</h2>
    </div>
  </div>
</template>

<script>
// Import Navigation Component
import AppNavBar from './AppNavBar.vue'
export default {
  name: 'AppContact',
  components: { AppNavBar },
}
</script>

<style lang="scss" scoped>
// Import Global Properties
@import '@/assets/css/_main.scss';
// On Page Style Properties
.contact-car {
  background-image: url('./../assets/img/hero-contact.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
  position: relative;
  z-index: 0;
}

.pattern {
  background-image: url('./../assets/svg/dots.svg');
  background-repeat: space;
  opacity: 0.05;
  height: 450px;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
}

.home-content {
  margin: 100px 100px;
}

.heading {
  color: $primary-color;

  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 0;
}

.sub-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px $primary-color;
}

@media (max-width: 991px) {
  .contact-car {
    background-image: url('./../assets/img/hero-contact.jpg');
    height: 500px;
    z-index: 2;
  }
  .pattern {
    height: 100%;
  }

  .home-content {
    margin: 120px 10px 0;
  }

  .heading {
    font-size: 3rem;
  }

  .sub-heading {
    font-size: 1.8rem;
  }
}
</style>
