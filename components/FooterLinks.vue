<!-- FooterLinks Component Imports Data From Data.js And Exports to AppFooter  -->


<template>
  <div class="info-container">
    <h3>{{ linkDetail.header }}</h3>
    <ul class="list-unstyled">
      <li>
        <nuxt-link :to="linkDetail.link1">{{ linkDetail.content1 }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="linkDetail.link2">{{ linkDetail.content2 }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['linkDetail'],
}
</script>

<style lang="scss" scoped>
// Import Global Style Properties
@import '@/assets/css/_main.scss';
// On Page Style Properties
.info-container {
  margin: 0 50px;

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 25px;
  }

  a {
    color: $secondary-color;
    margin: 5px 0;

    &:hover {
      text-decoration: none;
      color: $tertiary-color;
    }
  }
}

@media (max-width: 991px) {
  .info-container {
    margin: 0;

    h3 {
      font-size: 1.3rem;
    }

    a {
      font-weight: 300;
    }
  }
}
</style>
