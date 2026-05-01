<template>
    <div class="contact-us">
        <ContactUsHero />
        <ContactUsIntro />
        <ContactUsContent />
        <ContactUsMap />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const ContactUsHero = defineAsyncComponent(() => import('./components/contact-us/ContactUsHero.vue'))
const ContactUsIntro = defineAsyncComponent(() => import('./components/contact-us/ContactUsIntro.vue'))
const ContactUsContent = defineAsyncComponent(() => import('./components/contact-us/ContactUsContent.vue'))
const ContactUsMap = defineAsyncComponent(() => import('./components/contact-us/ContactUsMap.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.contact-us {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));
    background: var(--dls-color-lemonice);

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>