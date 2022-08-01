<!-- Fullscreen Pop Up Modal Component  -->

<template>
  <transition name="slide" appear>
    <div class="modal-popover">
      <div class="img-container">
        <img
          :src="require(`./../assets/img/${url}`)"
          class="img-car"
          alt="car-img"
        />
      </div>
      <div class="content-container">
        <button class="close-btn" @click="$emit('close-modal')">
          <font-awesome-icon class="icon" icon="xmark" />
        </button>
        <h2>{{ subHeading }}</h2>
        <h1>{{ heading }}</h1>
        <p>
          {{ content }}
        </p>
        <p>
          {{ content }}
        </p>
        <p>
          {{ content }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    heading: String,
    subHeading: String,
    content: String,
    url: String,
  },
}
</script>

<style lang="scss" scoped>
// Import Global Style Properties
@import '@/assets/css/_main.scss';
// On Page Style Properties
.close-btn {
  background-color: $dark-body-color;
  border: 0.5px $secondary-color solid;
  padding: 8px 15px;
  font-size: 1.2rem;
  position: fixed;
  top: 0%;
  right: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.modal-popover {
  top: 0;
  left: 0;
  height: 100%;
  width: 101%;
  position: fixed;
  z-index: 99;
  overflow: hidden;
  display: flex;
}

.img-container {
  width: 100%;
  padding: 0;
  position: relative;

  .img-car {
    height: 100%;
    width: 100%;
  }
}

.content-container {
  background-color: $dark-body-color;
  border-left: 2px $secondary-color solid;
  padding: 0 60px;
  width: 70%;
  height: 105%;
  overflow: scroll;

  h2 {
    color: $primary-color;
    font-size: 1.2rem;
    font-weight: 200;
    margin: 50px 0 0;
  }

  h1 {
    color: $primary-color;
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 60px;
  }

  p {
    color: $primary-color;
    font-size: 1.2rem;
    font-weight: 200;
    letter-spacing: 0.5px;
  }
}

@media (max-width: 991px) {
  .modal-popover {
    flex-direction: column;
    overflow: scroll;
  }

  .content-container {
    overflow: visible;
    width: 100%;
    height: auto;

    h1 {
      font-size: 2.5rem;
    }

    h2,
    p {
      font-size: 1rem;
    }

    .close-btn {
      font-size: 1.5rem;
      padding: 10px 20px;
    }
  }

  .img-container {
    height: 130%;

    .img-car {
      width: 100%;
    }
  }
}
</style>
