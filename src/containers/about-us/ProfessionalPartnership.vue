<template>
    <div class="professional-partnership">
        <PPIntro />
        <PPAffiliations />
        <NewletterForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const PPIntro = defineAsyncComponent(() => import('./components/professional-partnership/PPIntro.vue'))
const PPAffiliations = defineAsyncComponent(() => import('./components/professional-partnership/PPAffiliations.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
</script>

<style lang="scss" scoped>
.professional-partnership {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));
    background: var(--dls-color-lemonice);

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>