<!-- Mobile Navbar Component  -->

<template>
  <transition name="slide" appear>
    <div class="content-container">
      <button class="close-btn" @click="$emit('close-modal')">
        <font-awesome-icon class="icon" icon="xmark" />
      </button>
      <ul class="slide-nav">
        <h2>MENU</h2>
        <li><nuxt-link to="/" class="link">Home</nuxt-link></li>
        <li>
          <nuxt-link to="/contact-us" class="link">Contact Us</nuxt-link>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// Import Global Style Properties
@import '@/assets/css/_main.scss';
// On Page Style Properties
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.content-container {
  background-color: $dark-body-color;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding: 0 10px;
  overflow: hidden;
  z-index: 99;

  .close-btn {
    background-color: $dark-body-color;
    border: none;
    font-size: 2.5rem;
    padding: 16px 40px;
    position: fixed;
    top: 0;
    right: 0;
  }
}

h2 {
  color: $primary-color;
  font-size: 2rem;
  font-weight: 700;
  margin: 100px 0 50px;
}

li {
  list-style: none;
  margin-bottom: 15px;
}

.link {
  text-decoration: none;
  color: $primary-color;
  font-weight: 200;
  font-size: 1.5rem;

  &:hover {
    color: $tertiary-color;
  }
}
</style>
