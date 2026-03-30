<template>
    <div class="hormone-consultation">
        <HCHero />
        <HCInvitation />
        <HCFlow />
        <HCJourney />
        <HCPackages />
        <HCPricing />
        <HCFaqs />
        <HCStickyBar />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const HCHero = defineAsyncComponent(() => import('./components/hormone-consultation/HCHero.vue'))
const HCInvitation = defineAsyncComponent(() => import('./components/hormone-consultation/HCInvitation.vue'))
const HCFlow = defineAsyncComponent(() => import('./components/hormone-consultation/HCFlow.vue'))
const HCJourney = defineAsyncComponent(() => import('./components/hormone-consultation/HCJourney.vue'))
const HCPackages = defineAsyncComponent(() => import('./components/hormone-consultation/HCPackages.vue'))
const HCPricing = defineAsyncComponent(() => import('./components/hormone-consultation/HCPricing.vue'))
const HCFaqs = defineAsyncComponent(() => import('./components/hormone-consultation/HCFaqs.vue'))
const HCStickyBar = defineAsyncComponent(() => import('./components/hormone-consultation/HCStickyBar.vue'))

const scrollPosition = ref<number>(0)

const handleScroll = () => {
    scrollPosition.value = window.scrollY || window.pageYOffset
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

watch(scrollPosition, (newValue) => {
    const bar = document.getElementById('stickyBar')

    if (bar) {
        if (newValue > 700) {
            bar.classList.add('visible')
        } else {
            bar.classList.remove('visible')
        }
    }
})
</script>

<style lang="scss" scoped>
.hormone-consultation {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));
    position: relative;

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>