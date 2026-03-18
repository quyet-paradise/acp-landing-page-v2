<template>
    <div class="hrt-service">
        <HrtHeroImage />
        <HrtIntro />
        <HrtWhatIs />
        <HrtConditions />
        <HrtProgram />
        <HrtDosageForms />
        <HrtFaqs />
        <HrtCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const HrtHeroImage = defineAsyncComponent(() => import('./components/hrt/HrtHeroImage.vue'))
const HrtIntro = defineAsyncComponent(() => import('./components/hrt/HrtIntro.vue'))
const HrtWhatIs = defineAsyncComponent(() => import('./components/hrt/HrtWhatIs.vue'))
const HrtConditions = defineAsyncComponent(() => import('./components/hrt/HrtConditions.vue'))
const HrtProgram = defineAsyncComponent(() => import('./components/hrt/HrtProgram.vue'))
const HrtDosageForms = defineAsyncComponent(() => import('./components/hrt/HrtDosageForms.vue'))
const HrtFaqs = defineAsyncComponent(() => import('./components/hrt/HrtFaqs.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
const HrtCtaBanner = defineAsyncComponent(() => import('./components/hrt/HrtCtaBanner.vue'))
</script>

<style lang="scss" scoped>
.hrt-service {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>
