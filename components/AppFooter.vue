<!-- Render Footer Component   -->

<template>
  <footer class="footer flex-container flex-container-mob container-fluid">
    <div class="logos content-container">
      <img src="./../assets/svg/logo.svg" class="brand-logo" alt="logo" />
      <p class="content">© Driveclub. All rights reserved.</p>
      <footer-logos
        v-for="logo in logoInfo"
        :key="logo.id"
        :logo-detail="logo"
      />
    </div>
    <div class="flex-container content-container content-container-mob">
      <footer-links
        v-for="link in linkInfo"
        :key="link.id"
        :link-detail="link"
      />
    </div>
  </footer>
</template>

<script>
// Import Footer Data from data.js
import { footerLogo, footerLink } from './../assets/data'
import FooterLinks from './FooterLinks.vue'
import FooterLogos from './FooterLogos.vue'
export default {
  name: 'AppFooter',
  components: { FooterLogos, FooterLinks },

  data() {
    return {
      logoInfo: footerLogo,
      linkInfo: footerLink,
    }
  },
}
</script>

<style lang="scss" scoped>
// Import Global Style Properties
@import '@/assets/css/_main.scss';
// On Page Style Properties
.footer {
  border-top: 2px $secondary-color solid;
}

.flex-container {
  background-color: rgb(34, 40, 45);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.content-container {
  margin: 80px 0;
}

.content {
  color: $primary-color;
  margin: 10px 0 30px;
  width: 100%;
  font-weight: 200;
}

.logo {
  margin-right: 20px;
}

@media (max-width: 991px) {
  .flex-container-mob {
    flex-direction: column;
  }

  .content-container {
    margin: 50px 30px 20px;
  }

  .content-container-mob {
    justify-content: space-between;
  }

  .content {
    font-size: 0.9rem;
  }
}
</style>
