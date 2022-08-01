<!-- LandingPage Template -->

<template>
  <div>
    <app-home />
    <app-body-left />
    <app-body-right />
  </div>
</template>

<script>
// Import Components For Layout Sections
import AppHome from '../components/AppHome.vue'
import AppBodyLeft from '../components/AppBodyLeft.vue'
import AppBodyRight from '../components/AppBodyRight.vue'
export default {
  name: 'IndexPage',
  components: { AppHome, AppBodyLeft, AppBodyRight },
  layout: 'default-page',
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'home',
          name: 'home',
          content: 'Home.',
        },
      ],
    }
  },
}
</script>
