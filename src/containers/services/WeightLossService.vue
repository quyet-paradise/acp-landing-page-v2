<template>
    <div class="weight-loss-service">
        <WeightLossHeroImage />
        <WeightLossIntro />
        <WeightLossWhy />
        <WeightLossHow />
        <WeightLossCandidate />
        <WeightLossSafety />
        <WeightLossCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const WeightLossHeroImage = defineAsyncComponent(() => import('./components/weight-loss/WeightLossHeroImage.vue'))
const WeightLossIntro = defineAsyncComponent(() => import('./components/weight-loss/WeightLossIntro.vue'))
const WeightLossWhy = defineAsyncComponent(() => import('./components/weight-loss/WeightLossWhy.vue'))
const WeightLossHow = defineAsyncComponent(() => import('./components/weight-loss/WeightLossHow.vue'))
const WeightLossCandidate = defineAsyncComponent(() => import('./components/weight-loss/WeightLossCandidate.vue'))
const WeightLossSafety = defineAsyncComponent(() => import('./components/weight-loss/WeightLossSafety.vue'))
const WeightLossCtaBanner = defineAsyncComponent(() => import('./components/weight-loss/WeightLossCtaBanner.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.weight-loss-service {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>