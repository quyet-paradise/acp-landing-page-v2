<template>
    <div class="homepage">
        <main ref="homeAuxHeaderRef" class="homepage--aux">
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

        <main ref="homeServicesRef">
            <HomeServices />
        </main>

        <main ref="homeCommitmentRef">
            <HomeCommitment />
        </main>

        <main ref="homeFacilityRef">
            <HomeFacility />
        </main>

        <main ref="homeCommentRef">
            <HomeComment />
        </main>

        <main ref="homeAccreditationRef">
            <HomeAccreditation />
        </main>

        <main ref="homeContactRef">
            <NewletterForm />
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
const HomeServices = defineAsyncComponent(() => import('./components/HomeServices.vue'))
const HomeCommitment = defineAsyncComponent(() => import('./components/HomeCommitment.vue'))
const HomeFacility = defineAsyncComponent(() => import('./components/HomeFacility.vue'))
const NewletterForm = defineAsyncComponent(() => import('@/components/contact/NewletterForm.vue'))
const HomeAccreditation = defineAsyncComponent(() => import('./components/HomeAccreditation.vue'))
const HomeComment = defineAsyncComponent(() => import('./components/HomeComment.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))
</script>

<style lang="scss" scoped>
.homepage {
    width: 100%;
    background: var(--dls-color-faf8de);
    position: relative;
    overflow: clip;

    &--aux {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    &--nav {
        position: sticky;
        top: var(--dls-aux-header-height);
        left: 0;
        z-index: 1000;
    }

    @media (max-width: 1024px) {
        &--nav {
            display: none;
        }
    }
}
</style>