<template>
    <div class="getting-started">
        <GSHero />
        <GSWelcome />
        <GSActionCards />
        <GSFaqs />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const GSHero = defineAsyncComponent(() => import('./components/getting-started/GSHero.vue'))
const GSWelcome = defineAsyncComponent(() => import('./components/getting-started/GSWelcome.vue'))
const GSActionCards = defineAsyncComponent(() => import('./components/getting-started/GSActionCards.vue'))
const GSFaqs = defineAsyncComponent(() => import('./components/getting-started/GSFaqs.vue'))
</script>

<style lang="scss" scoped>
.getting-started {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>