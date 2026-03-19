<template>
    <div class="pediatrics-service">
        <PediatricsHeroImage />
        <PediatricsIntro />
        <PediatricsChallenges />
        <PediatricsConditions />
        <PediatricsDosage />
        <PediatricsSafety />
        <PediatricsCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const PediatricsHeroImage = defineAsyncComponent(() => import('./components/pediatrics/PediatricsHeroImage.vue'))
const PediatricsIntro = defineAsyncComponent(() => import('./components/pediatrics/PediatricsIntro.vue'))
const PediatricsChallenges = defineAsyncComponent(() => import('./components/pediatrics/PediatricsChallenges.vue'))
const PediatricsConditions = defineAsyncComponent(() => import('./components/pediatrics/PediatricsConditions.vue'))
const PediatricsDosage = defineAsyncComponent(() => import('./components/pediatrics/PediatricsDosage.vue'))
const PediatricsSafety = defineAsyncComponent(() => import('./components/pediatrics/PediatricsSafety.vue'))
const PediatricsCtaBanner = defineAsyncComponent(() => import('./components/pediatrics/PediatricsCtaBanner.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.pediatrics-service {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>