<template>
    <div class="fill-my-rx">
        <FMRHero />
        <FMRForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const FMRHero = defineAsyncComponent(() => import('./components/fill-my-rx/FMRHero.vue'))
const FMRForm = defineAsyncComponent(() => import('./components/fill-my-rx/FMRForm.vue'))
</script>

<style lang="scss" scoped>
.fill-my-rx {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>

