<template>
    <div class="our-team">
        <OTHero />
        <OTQuoteStrip />
        <OTMembers />
        <OTValues />
        <OTCta />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const OTHero = defineAsyncComponent(() => import('./components/our-team/OTHero.vue'))
const OTQuoteStrip = defineAsyncComponent(() => import('./components/our-team/OTQuoteStrip.vue'))
const OTMembers = defineAsyncComponent(() => import('./components/our-team/OTMembers.vue'))
const OTValues = defineAsyncComponent(() => import('./components/our-team/OTValues.vue'))
const OTCta = defineAsyncComponent(() => import('./components/our-team/OTCta.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))

</script>

<style lang="scss" scoped>
.our-team {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));
    background: var(--dls-color-lemonice);

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>