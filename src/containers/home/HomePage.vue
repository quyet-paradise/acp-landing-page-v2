<template>
    <div class="homepage">
        <main ref="homeAuxHeaderRef">
            <HomeAuxHeader />
        </main>

        <main ref="homeBannerRef">
            <HomeBanner />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const HomeAuxHeader = defineAsyncComponent(() => import('@/components/header/AuxHeader.vue'))
const HomeBanner = defineAsyncComponent(() => import('./components/HomeBanner.vue'))
</script>

<style lang="scss" scoped>
.homepage {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
}
</style>