<template>
    <div class="ldn-service">
        <LdnHeroImage />
        <LdnIntro />
        <LdnWhy />
        <LdnFormulations />
        <LdnJourneySteps />
        <LdnCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const LdnHeroImage = defineAsyncComponent(() => import('./components/ldn/LdnHeroImage.vue'))
const LdnIntro = defineAsyncComponent(() => import('./components/ldn/LdnIntro.vue'))
const LdnWhy = defineAsyncComponent(() => import('./components/ldn/LdnWhy.vue'))
const LdnFormulations = defineAsyncComponent(() => import('./components/ldn/LdnFormulations.vue'))
const LdnJourneySteps = defineAsyncComponent(() => import('./components/ldn/LdnJourneySteps.vue'))
const LdnCtaBanner = defineAsyncComponent(() => import('./components/ldn/LdnCtaBanner.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.ldn-service {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>