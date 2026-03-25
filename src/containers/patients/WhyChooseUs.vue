<template>
    <div class="wcu">
        <WCUHero />
        <WCUPhilosophy />
        <WCUQuality />
        <WCUCashPay />
        <WCUSpecialties />
        <WCUCta />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const WCUHero = defineAsyncComponent(() => import('./components/wcu/WCUHero.vue'))
const WCUPhilosophy = defineAsyncComponent(() => import('./components/wcu/WCUPhilosophy.vue'))
const WCUQuality = defineAsyncComponent(() => import('./components/wcu/WCUQuality.vue'))
const WCUCashPay = defineAsyncComponent(() => import('./components/wcu/WCUCashPay.vue'))
const WCUSpecialties = defineAsyncComponent(() => import('./components/wcu/WCUSpecialties.vue'))
const WCUCta = defineAsyncComponent(() => import('./components/wcu/WCUCta.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.wcu {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>