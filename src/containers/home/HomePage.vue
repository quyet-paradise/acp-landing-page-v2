<template>
    <div class="homepage">
        <main ref="homeAuxHeaderRef">
            <HomeAuxHeader />
        </main>

        <main ref="homeBannerRef">
            <HomeBanner />
        </main>

        <main ref="homeNavHeaderRef" class="homepage--nav">
            <NavHeader />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const HomeAuxHeader = defineAsyncComponent(() => import('@/components/header/AuxHeader.vue'))
const HomeBanner = defineAsyncComponent(() => import('./components/HomeBanner.vue'))
const NavHeader = defineAsyncComponent(() => import('@/components/header/NavHeader.vue'))
</script>

<style lang="scss" scoped>
.homepage {
    width: 100%;
    height: 5000px; //test
    max-width: 1920px;
    margin: 0 auto;
    background: var(--dls-color-faf8de);

    &--nav {
        position: sticky;
        top: 0;
        z-index: 1000;
    }
}
</style>