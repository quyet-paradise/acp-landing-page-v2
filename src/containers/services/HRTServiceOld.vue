<template>
    <div class="hrt-service">
        <HrtHero />
        <HrtIntro />
        <HrtWhatIs />
        <HrtConditions />
        <HrtProgram />
        <HrtDossageForms />
        <HrtFaqs />
        <HrtCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const HrtHero = defineAsyncComponent(() => import('./components/hrt-old/HrtHero.vue'))
const HrtIntro = defineAsyncComponent(() => import('./components/hrt-old/HrtIntro.vue'))
const HrtWhatIs = defineAsyncComponent(() => import('./components/hrt-old/HrtWhatIs.vue'))
const HrtConditions = defineAsyncComponent(() => import('./components/hrt-old/HrtConditions.vue'))
const HrtProgram = defineAsyncComponent(() => import('./components/hrt-old/HrtProgram.vue'))
const HrtDossageForms = defineAsyncComponent(() => import('./components/hrt-old/HrtDossageForms.vue'))
const HrtFaqs = defineAsyncComponent(() => import('./components/hrt-old/HrtFaqs.vue'))
const HrtCtaBanner = defineAsyncComponent(() => import('./components/hrt-old/HrtCtaBanner.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
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