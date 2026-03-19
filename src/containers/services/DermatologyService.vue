<template>
    <div class="dermatology-service">
        <DermatologyHeroImage />
        <DermatologyIntro />
        <DermatologyConditions />
        <DermatologyFormulations />
        <DermatologyPromise />
        <DermatologyCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DermatologyHeroImage = defineAsyncComponent(() => import('./components/dermatology/DermatologyHeroImage.vue'))
const DermatologyIntro = defineAsyncComponent(() => import('./components/dermatology/DermatologyIntro.vue'))
const DermatologyConditions = defineAsyncComponent(() => import('./components/dermatology/DermatologyConditions.vue'))
const DermatologyFormulations = defineAsyncComponent(() => import('./components/dermatology/DermatologyFormulations.vue'))
const DermatologyPromise = defineAsyncComponent(() => import('./components/dermatology/DermatologyPromise.vue'))
const DermatologyCtaBanner = defineAsyncComponent(() => import('./components/dermatology/DermatologyCtaBanner.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.dermatology-service {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>