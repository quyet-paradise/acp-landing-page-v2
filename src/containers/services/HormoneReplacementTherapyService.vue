<template>
    <div class="hrt-service">
        <HrtHeroImage />
        <HrtGetStarted />
        <HrtIntro />
        <HrtWhatIs />
        <HrtConditions />
        <HrtProgram />
        <HrtDosageForms />
        <HrtPackages />
        <HrtFaqs />
        <HrtCtaBanner />
        <NewletterForm />
        <HrtStickyBar />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const HrtHeroImage = defineAsyncComponent(() => import('./components/hrt/HrtHeroImage.vue'))
const HrtGetStarted = defineAsyncComponent(() => import('./components/hrt/HrtGetStarted.vue'))
const HrtIntro = defineAsyncComponent(() => import('./components/hrt/HrtIntro.vue'))
const HrtWhatIs = defineAsyncComponent(() => import('./components/hrt/HrtWhatIs.vue'))
const HrtConditions = defineAsyncComponent(() => import('./components/hrt/HrtConditions.vue'))
const HrtProgram = defineAsyncComponent(() => import('./components/hrt/HrtProgram.vue'))
const HrtDosageForms = defineAsyncComponent(() => import('./components/hrt/HrtDosageForms.vue'))
const HrtPackages = defineAsyncComponent(() => import('./components/hrt/HrtPackages.vue'))
const HrtFaqs = defineAsyncComponent(() => import('./components/hrt/HrtFaqs.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
const HrtCtaBanner = defineAsyncComponent(() => import('./components/hrt/HrtCtaBanner.vue'))
const HrtStickyBar = defineAsyncComponent(() => import('./components/hrt/HrtStickyBar.vue'))

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
.hrt-service {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));
    position: relative;

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>
