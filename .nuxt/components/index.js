export { default as AppBodyLeft } from '../..\\components\\AppBodyLeft.vue'
export { default as AppBodyRight } from '../..\\components\\AppBodyRight.vue'
export { default as AppContact } from '../..\\components\\AppContact.vue'
export { default as AppContactDetails } from '../..\\components\\AppContactDetails.vue'
export { default as AppContactForm } from '../..\\components\\AppContactForm.vue'
export { default as AppFooter } from '../..\\components\\AppFooter.vue'
export { default as AppHome } from '../..\\components\\AppHome.vue'
export { default as AppNavBar } from '../..\\components\\AppNavBar.vue'
export { default as BodyModal } from '../..\\components\\BodyModal.vue'
export { default as ContactDetail } from '../..\\components\\ContactDetail.vue'
export { default as ContactFormInput } from '../..\\components\\ContactFormInput.vue'
export { default as FooterLinks } from '../..\\components\\FooterLinks.vue'
export { default as FooterLogos } from '../..\\components\\FooterLogos.vue'
export { default as NavModal } from '../..\\components\\NavModal.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
