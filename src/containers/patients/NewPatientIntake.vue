<template>
    <div class="new-patient-intake">
        <NPIHero />
        <NPIForm />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const NPIHero = defineAsyncComponent(() => import('./components/new-patient-intake/NPIHero.vue'))
const NPIForm = defineAsyncComponent(() => import('./components/new-patient-intake/NPIForm.vue'))
</script>

<style lang="scss" scoped>
.new-patient-intake {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));

    @media (max-width: 1024px) {
        margin-top: var(--dls-aux-header-height);
    }
}
</style>