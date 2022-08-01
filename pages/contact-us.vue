<!-- ContactPage Template -->

<template>
  <div>
    <app-contact />
    <app-contact-details />
    <app-contact-form />
  </div>
</template>

<script>
// Import Components 
import AppContact from '../components/AppContact.vue'
import AppContactDetails from '../components/AppContactDetails.vue'
import AppContactForm from '../components/AppContactForm.vue'
export default {
  components: { AppContact, AppContactDetails, AppContactForm },
  layout: 'default-page',
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'contact',
          name: 'contact',
          content: 'Contact us.',
        },
      ],
    }
  },
}
</script>

