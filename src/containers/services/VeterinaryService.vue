<template>
    <div class="veterinary-service">
        <VeterinaryHeroImage />
        <VeterinaryIntro />
        <VeterinarySpecies />
        <VeterinaryDelivery />
        <VeterinaryCarePath />
        <VeterinaryDisclaimer />
        <VeterinaryCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const VeterinaryHeroImage = defineAsyncComponent(() => import('./components/veterinary/VeterinaryHeroImage.vue'))
const VeterinaryIntro = defineAsyncComponent(() => import('./components/veterinary/VeterinaryIntro.vue'))
const VeterinarySpecies = defineAsyncComponent(() => import('./components/veterinary/VeterinarySpecies.vue'))
const VeterinaryDelivery = defineAsyncComponent(() => import('./components/veterinary/VeterinaryDelivery.vue'))
const VeterinaryCarePath = defineAsyncComponent(() => import('./components/veterinary/VeterinaryCarePath.vue'))
const VeterinaryDisclaimer = defineAsyncComponent(() => import('./components/veterinary/VeterinaryDisclaimer.vue'))
const VeterinaryCtaBanner = defineAsyncComponent(() => import('./components/veterinary/VeterinaryCtaBanner.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.veterinary-service {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>