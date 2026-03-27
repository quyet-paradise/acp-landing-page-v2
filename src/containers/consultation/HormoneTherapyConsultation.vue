<template>
    <div class="hormone-therapy-consultation">
        <HTCHeroSplit />
        <HTCProgram />
        <HTCPackages />
        <HTCFaqs />
        <NewletterForm />
        <HTCStickyBar />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const HTCHeroSplit = defineAsyncComponent(() => import('./components/hormone-therapy/HTCHeroSplit.vue'))
const HTCProgram = defineAsyncComponent(() => import('./components/hormone-therapy/HTCProgram.vue'))
const HTCPackages = defineAsyncComponent(() => import('./components/hormone-therapy/HTCPackages.vue'))
const HTCFaqs = defineAsyncComponent(() => import('./components/hormone-therapy/HTCFaqs.vue'))
const HTCStickyBar = defineAsyncComponent(() => import('./components/hormone-therapy/HTCStickyBar.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
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
.hormone-therapy-consultation {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));
    position: relative;

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>