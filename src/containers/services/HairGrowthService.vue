<template>
    <div class="hair-growth-service">
        <HairGrowthHeroImage />
        <HairGrowthIntro />
        <HairGrowthWhy />
        <HairGrowthIngredients />
        <HairGrowthFormulations />
        <HairGrowthTimeline />
        <HairGrowthCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const HairGrowthHeroImage = defineAsyncComponent(() => import('./components/hair-growth/HairGrowthHeroImage.vue'))
const HairGrowthIntro = defineAsyncComponent(() => import('./components/hair-growth/HairGrowthIntro.vue'))
const HairGrowthWhy = defineAsyncComponent(() => import('./components/hair-growth/HairGrowthWhy.vue'))
const HairGrowthIngredients = defineAsyncComponent(() => import('./components/hair-growth/HairGrowthIngredients.vue'))
const HairGrowthFormulations = defineAsyncComponent(() => import('./components/hair-growth/HairGrowthFormulations.vue'))
const HairGrowthTimeline = defineAsyncComponent(() => import('./components/hair-growth/HairGrowthTimeline.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
const HairGrowthCtaBanner = defineAsyncComponent(() => import('./components/hair-growth/HairGrowthCtaBanner.vue'))
</script>

<style lang="scss" scoped>
.hair-growth-service {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>