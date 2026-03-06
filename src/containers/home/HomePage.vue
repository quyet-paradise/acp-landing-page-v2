<template>
    <div class="homepage">
        <main ref="homeAuxHeaderRef">
            <HomeAuxHeader />
        </main>

        <main ref="homeBannerRef">
            <HomeBanner />
        </main>

        <main ref="homeNavHeaderRef" class="homepage--nav">
            <HomeNavHeader />
        </main>

        <main ref="homeQuoteRef">
            <HomeQuote />
        </main>

        <main ref="homeAccreditationRef">
            <HomeAccreditation />
        </main>

        <main ref="homeContactRef">
            <HomeContact />
        </main>

        <main ref="homeFooterRef">
            <Footer />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const HomeAuxHeader = defineAsyncComponent(() => import('@/components/header/AuxHeader.vue'))
const HomeBanner = defineAsyncComponent(() => import('./components/HomeBanner.vue'))
const HomeNavHeader = defineAsyncComponent(() => import('@/components/header/NavHeader.vue'))
const HomeQuote = defineAsyncComponent(() => import('./components/HomeQuote.vue'))
const HomeContact = defineAsyncComponent(() => import('./components/HomeContact.vue'))
const HomeAccreditation = defineAsyncComponent(() => import('./components/HomeAccreditation.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))
</script>

<style lang="scss" scoped>
.homepage {
    width: 100%;
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