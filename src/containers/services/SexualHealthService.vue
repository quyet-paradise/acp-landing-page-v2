<template>
    <div class="sexual-health-service">
        <SexualHealthHeroImage />
        <SexualHealthIntro />
        <SexualHealthTabsGender />
        <SexualHealthWhyArtisan />
        <SexualHealthDisclaimer />
        <SexualHealthCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const SexualHealthHeroImage = defineAsyncComponent(() => import('./components/sexual-health/SexualHealthHeroImage.vue'))
const SexualHealthIntro = defineAsyncComponent(() => import('./components/sexual-health/SexualHealthIntro.vue'))
const SexualHealthTabsGender = defineAsyncComponent(() => import('./components/sexual-health/SexualHealthTabsGender.vue'))
const SexualHealthWhyArtisan = defineAsyncComponent(() => import('./components/sexual-health/SexualHealthWhyArtisan.vue'))
const SexualHealthDisclaimer = defineAsyncComponent(() => import('./components/sexual-health/SexualHealthDisclaimer.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
const SexualHealthCtaBanner = defineAsyncComponent(() => import('./components/sexual-health/SexualHealthCtaBanner.vue'))
</script>

<style lang="scss" scoped>
.sexual-health-service {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>