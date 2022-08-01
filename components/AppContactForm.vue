<!-- Render Contact Form   -->

<template>
  <div class="form-section">
    <div class="form-container">
      <h2>HOW CAN WE HELP?</h2>
      <form action="" method="post">
        <contact-form-input
          v-for="input in formInput"
          :key="input.id"
          :info-detail="input"
        />
        <p>How can we help?</p>
        <textarea
          id="textarea"
          name="text"
          class="form-control textarea-highlight"
          rows="8"
        ></textarea>
      </form>
      <button type="submit" class="send-btn">Submit</button>
    </div>
  </div>
</template>

<script>
// Import ContactDetail Data from data.js
import { contactForms } from './../assets/data'
import ContactFormInput from './ContactFormInput.vue'
export default {
  name: 'AppContactForm',
  components: { ContactFormInput },

  data() {
    return {
      formInput: contactForms,
    }
  },
}
</script>

<style lang="scss" scoped>
// Import Global Style Properties
@import '@/assets/css/_main.scss';
// On Page Style Properties
.form-section {
  border-top: 2px $secondary-color solid;
  background-color: $dark-body-color;
  height: 300px;

  .form-container {
    border: 2px $secondary-color solid;
    position: absolute;
    padding: 50px;
    background: $dark-body-color;
    right: 150px;
    top: 350px;
    width: 600px;

    h2 {
      margin: 40px 0 30px;
    }

    p {
      margin: 25px 0 0;
      font-size: 0.9rem;
      color: $primary-color;
    }
  }
}

.form-control {
  border: 1px $primary-color solid;
  background-color: transparent;
  border-radius: 0;
}

.textarea-highlight:focus {
  background: linear-gradient(
        45deg,
        rgb(223, 70, 3) 20%,
        rgb(223, 70, 3, 0.1) 0
      )
      bottom/185% 100%,
    linear-gradient(45deg, rgb(223, 70, 3, 0.1) 80%, rgb(223, 70, 3) 0)
      bottom/185% 100%;
  border-color: rgb(223, 70, 3);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.send-btn {
  margin-top: 20px;
  padding: 10px 45px;
  color: $primary-color;
  font-size: 1.1rem;
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

  &:hover {
    background-color: $tertiary-color;
  }
}

@media (max-width: 991px) {
  .form-section {
    height: auto;

    .form-container {
      position: relative;
      top: 0;
      right: 0;
      width: 100%;
      padding: 30px;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: 200;
    }

    .send-btn {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
  }
}
</style>
