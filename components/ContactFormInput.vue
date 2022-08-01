<!-- ContactForm Input Components Importing Data From Data.js  -->

<template>
  <div>
    <p>{{ infoDetail.name }}</p>
    <input
      :id="`input_${infoDetail.type}`"
      class="form-control input-height"
      :type="infoDetail.type"
      required
    />
  </div>
</template>

<script>
export default {
  props: ['infoDetail'],
}
</script>

<style lang="scss" scoped>
// Import Global Style Properties
@import '@/assets/css/_main.scss';
// On Page Style Properties
p {
  margin: 25px 0 0;
  font-size: 0.9rem;
  color: $primary-color;
}

.form-control {
  border: 1px $primary-color solid;
  background-color: transparent;
  border-radius: 0;
}

.input-height {
  height: 50px;

  &:focus {
    background: linear-gradient(
          45deg,
          rgb(223, 70, 3) 20%,
          rgb(223, 70, 3, 0.1) 0
        )
        bottom/165% 100%,
      linear-gradient(45deg, rgb(223, 70, 3, 0.1) 80%, rgb(223, 70, 3) 0)
        bottom/165% 100%;
    border-color: rgb(223, 70, 3);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

@media (max-width: 991px) {
  p {
    font-weight: 200;
  }
}
</style>
