<!-- La Ferrari component to display contect left and image right. 
Reference to calling the bodyModalCard component in data.js file -->

<template>
  <div class="body-container">
    <div class="content">
      <div class="background-text">
        <p>{{ bodyContent[0].name }}</p>
      </div>
      <h2 class="text">{{ bodyContent[0].header }}</h2>
      <h1 class="text">{{ bodyContent[0].name }}</h1>
      <button class="modal-btn" @click="showModal = true">
        LEARN MORE<i class="arrow"
          ><img class="icon" src="./../assets/svg/chevron-red.svg" alt="icon"
        /></i>
      </button>
      <body-modal
        v-show="showModal"
        :heading="modalContent[0].heading"
        :sub-heading="modalContent[0].subHeading"
        :content="modalContent[0].content"
        :url="modalContent[0].url"
        @close-modal="showModal = false"
      />
    </div>
    <a @click="showModal = true"><div class="content-img"></div></a>
  </div>
</template>

<script>
import { bodyModalCard } from './../assets/data'
import { bodyCardContent } from './../assets/data'
export default {
  name: 'AppBodyLeft',
  data() {
    return {
      showModal: false,
      modalContent: bodyModalCard,
      bodyContent: bodyCardContent,
    }
  },
}
</script>

<style lang="scss" scoped>
// Import Global Style Properties
@import '@/assets/css/_main.scss';

// On Page Style Properties
.body-container {
  position: relative;
  overflow: hidden;
}

.content {
  background-color: rgb(24, 28, 30);
  border-top: 2px $secondary-color solid;
  height: 500px;

  .background-text {
    position: absolute;
    top: 10%;

    p {
      color: rgb(20, 24, 26);
      font-size: 10rem;
      font-weight: 700;
      z-index: -1;
    }
  }

  h1 {
    color: $primary-color;
    font-size: 3rem;
    font-weight: 700;
  }

  h2 {
    color: $secondary-color;
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
  }

  .modal-btn {
    color: $tertiary-color;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 15px 0;

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

  h1,
  h2,
  .modal-btn {
    position: relative;
    z-index: 1;
    top: 40%;
    left: 9%;
  }

  .text {
    width: 400px;
  }
}

.content-img {
  position: absolute;
  top: 0%;
  right: 0%;
  height: 500px;
  width: 800px;
  background-image: url(./../assets/img/car-1.jpg);
  background-size: cover;
  border: 2px $secondary-color solid;
  border-bottom: 0;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    background-image: linear-gradient(
        0deg,
        rgba(128, 0, 40, 0.5),
        rgba(128, 0, 40, 0.5)
      ),
      url(./../assets/img/car-1.jpg);
  }

  .modal-text {
    padding: 0;
  }
}

@media (max-width: 991px) {
  .body-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .content {
    position: relative;
    height: 250px;

    .background-text {
      display: none;
    }

    h2 {
      font-size: 1.3rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    h1,
    h2,
    .modal-btn {
      top: 20%;
    }

    .modal-btn {
      margin-top: 50px;

      i {
        opacity: 1;
      }
    }
  }

  .content-img {
    position: relative;
    height: 300px;
    width: 100%;
    &:hover {
      transform: scale(1);
      background-image: url(./../assets/img/car-1.jpg);
    }
  }
}
</style>
