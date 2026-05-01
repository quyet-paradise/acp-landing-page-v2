<template>
    <div class="faq">
        <FaqHero />
        <FaqContent />
        <FaqCtaBanner />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const FaqHero = defineAsyncComponent(() => import('./components/faq/FaqHero.vue'))
const FaqContent = defineAsyncComponent(() => import('./components/faq/FaqContent.vue'))
const FaqCtaBanner = defineAsyncComponent(() => import('./components/faq/FaqCtaBanner.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.faq {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));
    background: var(--dls-color-lemonice);

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>