<template>
    <div class="contact-us">
        <ContactUsHero />
        <ContactUsForms />
        <!-- <ContactUsInfo /> -->
         <ContactUsMap />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const ContactUsHero = defineAsyncComponent(() => import('./components/ContactUsHero.vue'))
const ContactUsForms = defineAsyncComponent(() => import('./components/ContactUsForms.vue'))
// const ContactUsInfo = defineAsyncComponent(() => import('./components/ContactUsInfo.vue'))
const ContactUsMap = defineAsyncComponent(() => import('./components/ContactUsMap.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.contact-us {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>