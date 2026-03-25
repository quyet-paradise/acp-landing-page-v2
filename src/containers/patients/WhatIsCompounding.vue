<template>
    <div class="wic">
        <WICHero />
        <WICIntro />
        <WICWhy />
        <WICForms />
        <WICProcess />
        <WICSafety />
        <WICBenefits />
        <WICCta />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const WICHero = defineAsyncComponent(() => import('./components/wic/WICHero.vue'))
const WICIntro = defineAsyncComponent(() => import('./components/wic/WICIntro.vue'))
const WICWhy = defineAsyncComponent(() => import('./components/wic/WICWhy.vue'))
const WICForms = defineAsyncComponent(() => import('./components/wic/WICForms.vue'))
const WICProcess = defineAsyncComponent(() => import('./components/wic/WICProcess.vue'))
const WICSafety = defineAsyncComponent(() => import('./components/wic/WICSafety.vue'))
const WICBenefits = defineAsyncComponent(() => import('./components/wic/WICBenefits.vue'))
const WICCta = defineAsyncComponent(() => import('./components/wic/WICCta.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))

</script>

<style lang="scss" scoped>
.wic {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>