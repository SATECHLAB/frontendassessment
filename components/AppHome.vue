<!-- Display Hero Section On Home Page And Contains Text And The Car Background  -->

<template>
  <div id="home" class="home-car container-fluid">
    <app-nav-bar />
    <div class="home-content">
      <div class="pattern"></div>
      <h1 class="heading">GOOSEBUMPS</h1>
      <h2 class="heading sub-heading">COME STANDARD</h2>
      <p class="content">
        Discover the benefits of DRIVECLUB Trade-in and get a free vehicle
        evaluation.
      </p>
      <nuxt-link class="contact-btn" to="/contact-us">
        Contact us
        <i><img src="./../assets/svg/chevron.svg" alt="arrow" /></i
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
// Import Navigation Component
import AppNavBar from './AppNavBar.vue'
export default {
  name: 'AppHome',
  components: { AppNavBar },
}
</script>

<style lang="scss" scoped>
// Import Global Style Properties
@import '@/assets/css/_main.scss';
// On Page Style Properties
.home-car {
  background-size: 100vw;
  background-image: url('./../assets/img/hero-home.jpg');
  height: 570px;
  position: relative;
  z-index: 50;
}

.home-content {
  margin: 100px;

  .pattern {
    background-image: url('./../assets/svg/dots.svg');
    background-repeat: space;
    opacity: 0.04;
    height: 570px;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }

  .heading {
    color: $primary-color;
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 0;
  }

  .sub-heading {
    font-size: 2.5rem;
    color: transparent;
    -webkit-text-stroke: 0.8px $primary-color;
  }

  .content {
    color: $primary-color;
    margin: 30px 0 50px;
    width: 420px;
    font-weight: 200;
  }
}

.contact-btn {
  padding: 10px 20px;
  font-size: 1.1rem;
  color: $primary-color;
  border: 2px $tertiary-color solid;
  background-color: $transparent-red-color;
  transition: all 0.3s;
  position: relative;
  background: linear-gradient(
        45deg,
        $tertiary-color 20%,
        $transparent-red-color 0
      )
      bottom/160% 100%,
    linear-gradient(45deg, $transparent-red-color 80%, $tertiary-color 0)
      bottom/160% 100%;

  &::after {
    content: '';
    z-index: -1;
    position: relative;
  }

  &:hover {
    text-decoration: none;
    background-color: $tertiary-color;
    transition: all 0.3s;
    padding-right: 40px;
  }

  i {
    margin: 0 0 0 8px;
    opacity: 0;
    transition: 0.3s ease-in-out;
    position: absolute;
    transition: transform 1;
  }

  &:hover i {
    opacity: 1;
    position: absolute;
  }
}

@media (max-width: 991px) {
  .home-car {
    background-image: url('./../assets/img/hero-mobile.jpg');
    height: 470px;
    background-repeat: no-repeat;
  }

  .home-content {
    margin: 80px 10px 0;

    .pattern {
      height: 100%;
    }

    .heading {
      font-size: 3rem;
    }

    .sub-heading {
      font-size: 1.8rem;
      margin: 0;
    }

    .content {
      font-size: 0.9rem;
      width: 100%;
    }
  }

  .contact-btn {
    font-size: 1.3rem;
  }
}
</style>
